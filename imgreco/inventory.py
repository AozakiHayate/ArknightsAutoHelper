import numpy as np
import cv2
from . import item, imgops, util
from PIL import Image
from util.richlog import get_logger

logger = get_logger(__name__)
exclude_items = {'32001', 'other', '3401'}


def convert_pil_screen(pil_screen):
    # 720p
    cv_screen = cv2.cvtColor(np.asarray(pil_screen), cv2.COLOR_BGR2RGB)
    img_h, img_w = cv_screen.shape[:2]
    ratio = 720 / img_h
    if ratio != 1:
        ratio = 720 / img_h
        cv_screen = cv2.resize(cv_screen, (int(img_w * ratio), 720))
    return cv_screen


def get_all_item_img_in_screen(pil_screen):
    cv_screen = convert_pil_screen(pil_screen)
    gray_screen = cv2.cvtColor(cv_screen, cv2.COLOR_BGR2GRAY)
    dbg_screen = cv_screen.copy()
    # pip 仓库中的 python-opencv 4.5.1 的 HoughCircles 会返回一些错误的 y 坐标, anaconda 中的 opencv 则没有这个问题
    circles : np.ndarray = get_circles(gray_screen)
    img_h, img_w = cv_screen.shape[:2]
    if circles is None:
        return []
    res = []
    # circle size 128x128
    item_circle_radius = 64
    itemreco_box_size = 142        # dimension that compatible with imgreco.item
    item_dx = 156                  # delta X of two items in inventory
    center_ys = [191, 381, 570.5]  # center Y of items
    xs = circles[:, 0]
    # print(np.mean(circles[:, 2]))
    xs.sort()
    dxs = np.diff(xs)
    center_xs = np.asarray([np.median(x) for x in np.split(xs, np.where(dxs>140)[0]+1)])
    calautated_offsets = (center_xs - (item_dx / 2)) % item_dx
    offset_x = int(np.min(calautated_offsets))

    while offset_x < img_w:
        cv2.line(dbg_screen, (offset_x, 0), (offset_x, img_h-1), (255,0,0), 1)
        center_x = offset_x + item_dx / 2
        xf = center_x - itemreco_box_size/2
        x = int(xf)
        x2 = x + itemreco_box_size
        if x2 < img_w:
            for y in center_ys:
                yf = y - itemreco_box_size/2
                y = int(yf)
                cv_item_img = cv_screen[y:y+itemreco_box_size, x:x+itemreco_box_size]
                # filter non-item block
                gray_img = cv2.cvtColor(cv_item_img, cv2.COLOR_BGR2GRAY)
                canny_img = cv2.Canny(gray_img, 60, 180)
                if np.sum(canny_img) < 200:
                    continue
                # use original size for better quantity recognition
                ratio = img_h / pil_screen.height
                original_item_img = pil_screen.crop((int(xf / ratio), int(yf / ratio), int((xf+itemreco_box_size)/ratio), int((yf+itemreco_box_size)/ratio)))
                numimg = imgops.scalecrop(original_item_img, 0.39, 0.71, 0.82, 0.84).convert('L')
                res.append({'item_img': cv_item_img, 'num_img': numimg})
                cv2.rectangle(dbg_screen, (x, y), (x+itemreco_box_size, y+itemreco_box_size), (255,0,0), 2)
        offset_x += item_dx
    for x, y, r in circles:
        cv2.circle(dbg_screen, (int(x), int(y)), int(r), (0, 0, 255), 2)

    logger.logimage(convert_to_pil(dbg_screen))
    return res


def get_circles(gray_img, min_radius=56, max_radius=68):
    circles = cv2.HoughCircles(gray_img, cv2.HOUGH_GRADIENT, 1, 100, param1=128,
                               param2=30, minRadius=min_radius, maxRadius=max_radius)
    return circles[0]


def show_img(cv_img):
    cv2.imshow('test', cv_img)
    cv2.waitKey()


def get_quantity(num_img):
    logger.logimage(num_img)
    x_threshold = int(num_img.height * 0.25) + 1
    numimg = imgops.crop_blackedge2(num_img, 130, x_threshold)
    logger.logimage(numimg)

    if numimg is not None:
        numimg = imgops.clear_background(numimg, 120)
        logger.logimage(numimg)
        cached = item.load_data()
        numtext, score = cached.num_recognizer.recognize2(numimg, subset='0123456789万')
        logger.logtext('quantity: %s, minscore: %f' % (numtext, score))
        quantity = int(numtext) if numtext.isdigit() else None
        return quantity

    return None


def convert_to_pil(cv_img):
    return Image.fromarray(cv2.cvtColor(cv_img, cv2.COLOR_BGR2RGB))


def remove_holes(img):
    contours, hierarchy = cv2.findContours(img, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    for i in range(len(contours)):
        (x, y, w, h) = cv2.boundingRect(contours[i])
        # area = cv2.contourArea(contours[i])
        # cv2.rectangle()
        area = np.count_nonzero(img[y:y+h, x:x+w])
        if area < 28 or area > 100:
            cv2.drawContours(img, [contours[i]], 0, 0, -1)


def get_all_item_in_screen(screen):
    imgs = get_all_item_img_in_screen(screen)
    item_count_map = {}
    for item_img in imgs:
        logger.logimage(convert_to_pil(item_img['item_img']))
        prob, item_id, item_name, item_type = item.get_item_id(item_img['item_img'])
        logger.logtext('item_id: %s, item_name: %s, prob: %s, type: %s' % (item_id, item_name, prob, item_type))
        if item_id in exclude_items or item_type == 'ACTIVITY_ITEM':
            continue
        quantity = get_quantity(item_img['num_img'])
        item_count_map[item_id] = quantity
        # print(item_id, quantity)
        # show_img(item_img['item_img'])
    logger.logtext('item_count_map: %s' % item_count_map)
    return item_count_map


def get_all_item_details_in_screen(screen, exclude_item_ids=None, exclude_item_types=None, only_normal_items=True):
    if exclude_item_ids is None:
        exclude_item_ids = exclude_items
    if exclude_item_types is None:
        exclude_item_types = {'ACTIVITY_ITEM'}
    imgs = get_all_item_img_in_screen(screen)
    res = []
    for item_img in imgs:
        logger.logimage(convert_to_pil(item_img['item_img']))
        prob, item_id, item_name, item_type = item.get_item_id(item_img['item_img'])
        logger.logtext('item_id: %s, item_name: %s, prob: %s, type: %s' % (item_id, item_name, prob, item_type))
        if item_id in exclude_item_ids or item_type in exclude_item_types:
            continue
        if only_normal_items and (not item_id.isdigit() or len(item_id) < 5 or item_type != 'MATERIAL'):
            continue
        quantity = get_quantity(item_img['num_img'])
        res.append({'itemId': item_id, 'itemName': item_name, 'itemType': item_type, 'quantity': quantity})
    logger.logtext('res: %s' % res)
    return res


def get_inventory_rect(viewport):
    vw, vh = util.get_vwvh(viewport)
    return 100 * vw - 17.361 * vh, 81.944 * vh, 100 * vw - 6.111 * vh, 96.806 * vh


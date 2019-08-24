from flask import Blueprint, render_template

from PIL import Image

from yolo.yolo import YOLO

blue = Blueprint('roomTap', __name__)


def init_blue(app):
    app.register_blueprint(blueprint=blue)


@blue.route('/')
def hello_world():
    return 'Hello World!'


@blue.route('/testView/')
def testview():
    yolo = YOLO(score=0.15)
    path = 'yolo/00013000_640x480.png'
    try:
        image = Image.open(path)
    except:
        print('Open Error! Check path and try again!')
    else:
        r_image, posList = yolo.detect_image(image)
        # r_image.show()
        print(posList)
    # yolo.close_session()
    return render_template('posList.html', posList=posList)

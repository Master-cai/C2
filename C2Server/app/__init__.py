from flask import Flask

from app.extentions import init_extentions
from app.setting import envs
from app.views import init_blue


def create_app():
    app = Flask(__name__, template_folder=setting.TEMPLATE_FOLDER)
    app.config.from_object(envs.get('develop'))
    init_blue(app)
    init_extentions(app)
    return app

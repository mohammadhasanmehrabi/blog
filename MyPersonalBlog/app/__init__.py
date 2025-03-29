from flask import Flask
from config import Config
from .models import db
from .controllers.main import main_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)

    with app.app_context():
        db.create_all()

    # ثبت بلوپرینت‌ها
    app.register_blueprint(main_bp)

    return app

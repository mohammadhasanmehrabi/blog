from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    uid = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))
    created_at = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp())

    posts = db.relationship('Post', backref='author', lazy=True)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

class Post(db.Model):
    __tablename__ = 'posts'
    postid = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp())
    user_id = db.Column(db.Integer, db.ForeignKey('users.uid'), nullable=True)

class Profile(db.Model):
    __tablename__ = 'profile'
    profileid = db.Column(db.Integer, primary_key=True)
    introduction = db.Column(db.Text)
    education = db.Column(db.Text)
    skills = db.Column(db.Text)
    languages = db.Column(db.Text)
    updated_at = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())
    user_id = db.Column(db.Integer, db.ForeignKey('users.uid'), nullable=False)
    user = db.relationship('User', backref=db.backref('profile', uselist=False))

import os

class Config:
    SECRET_KEY = os.environ.get('134713811355') 
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:134713811355@localhost/blog'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

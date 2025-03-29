from flask import Blueprint, render_template
from ..models import User, Post

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    posts = Post.query.all()
    return render_template('index.html', posts=posts)

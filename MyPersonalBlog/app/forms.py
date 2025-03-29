from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email, EqualTo, Length

class RegistrationForm(FlaskForm):
    username = StringField('نام کاربری', validators=[DataRequired(), Length(min=4, max=25)])
    email = StringField('ایمیل', validators=[DataRequired(), Email()])
    password = PasswordField('کلمه عبور', validators=[DataRequired(), Length(min=6)])
    confirm_password = PasswordField('تأیید کلمه عبور', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('ثبت‌نام')

class LoginForm(FlaskForm):
    email = StringField('ایمیل', validators=[DataRequired(), Email()])
    password = PasswordField('کلمه عبور', validators=[DataRequired()])
    submit = SubmitField('ورود')

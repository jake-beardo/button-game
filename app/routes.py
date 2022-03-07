from flask import render_template, flash
from app import app
from button import button

@app.route('/')
@app.route('/index')
def index():
    button = button()
    return render_template('index.html', title='Button Home', button=button)

@app.route('/help')
def help():
    return "found help"
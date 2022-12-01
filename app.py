# app.py

from flask import Flask, render_template
import sqlite3

app = Flask(__name__)

@app.route('/login')
def login():
    return render_template('login.html')

# 파이썬 명령어로 실행할 수 있음
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
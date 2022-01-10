from flask import Flask, render_template, request, redirect, send_from_directory

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
@app.route('/<int:number>', methods=['GET', 'POST'])
def index(number=0):
    if request.method == 'POST':
        x = request.form['x-cam-1']
        y1 = request.form['y-cam-1']
        z = request.form['z-cam-2']
        y2 = request.form['y-cam-2']
        with open("coords.csv", 'a') as f:
            f.writelines(f"{x}, {y1}, {z}, {y2}\n")
        number += 1
        return redirect(f'/{number}')
    return render_template('index.html', number=number)

@app.route("/static/<path:path>")
def get_file(path):
    return send_from_directory('static', path)

@app.route("/points")
def points():
    return render_template('points.html')
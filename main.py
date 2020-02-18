from flask import Flask, request, render_template, json, jsonify
from file_proc import read_file, write_file
app = Flask(__name__)

@app.route('/')
def getIndex():
  return "Can you redirect me to Home?"

@app.route('/health')
def getOK():
  return "OK"

@app.route('/home')
def gethome():
  return render_template('home.html')

@app.route('/calc')
def getcalc():
  return render_template('/calc.html')

@app.route('/about')
def getabout():
  return render_template('/about.html')

@app.route('/calc', methods=['POST'])
def sutiit_zinju():
  dati = request.json
  return content.json

@app.route('/calc', methods=['GET'])
def sanemt_zinu():
  return read_file()
    
if __name__ == '__main__':
  app.run(threaded=True, port=5017, debug=True) 
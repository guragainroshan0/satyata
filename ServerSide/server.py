from flask import Flask, jsonify, request
from getCluster import get_cluster

app = Flask(__name__)

@app.route('/data', methods = ['GET'])
def inference():
    samachar = request.args.get('title')
    news_cluster = get_cluster(samachar)
    response = {
            "color" : "#ff011",
            "links" : dict(news_cluster)
    }
    
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug= True,host = '0.0.0.0',port=8888)
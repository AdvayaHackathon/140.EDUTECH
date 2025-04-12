from flask import Flask, request, jsonify
from poll_backend import create_poll, submit_response, get_poll, get_all_polls, upload_enote

app = Flask(__name__)

@app.route('/create_poll', methods=['POST'])
def api_create_poll():
    data = request.json
    poll_id = create_poll(data['question'], data['options'])
    return jsonify({'poll_id': poll_id})

@app.route('/submit_response', methods=['POST'])
def api_submit_response():
    data = request.json
    submit_response(data['poll_id'], data['user_id'], data['option_key'])
    return jsonify({'status': 'success'})

@app.route('/poll/<poll_id>', methods=['GET'])
def api_get_poll(poll_id):
    poll = get_poll(poll_id)
    return jsonify(poll)

@app.route('/polls', methods=['GET'])
def api_get_all_polls():
    return jsonify(get_all_polls())

@app.route('/upload_enote', methods=['POST'])
def api_upload_enote():
    data = request.json
    upload_enote(data['title'], data['file_url'])
    return jsonify({'status': 'note uploaded'})

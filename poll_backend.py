from firebase_config import db

def create_poll(question, options):
    poll_ref = db.reference('polls').push()
    poll_ref.set({
        'question': question,
        'options': options,
        'responses': {}
    })
    return poll_ref.key

def submit_response(poll_id, user_id, option_key):
    poll_ref = db.reference(f'polls/{poll_id}/responses')
    poll_ref.update({user_id: option_key})

def get_poll(poll_id):
    poll_ref = db.reference(f'polls/{poll_id}')
    return poll_ref.get()

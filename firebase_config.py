import firebase_admin
from firebase_admin import credentials, db

# Load Firebase service account key
cred = credentials.Certificate("serviceAccountKey.json")

# Initialize Firebase app
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://class-polling-system-default-rtdb.firebaseio.com/'
})

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

"""
FirebaseHandler - Handling connection to the Firebase.
Input:
- path to configuration file,
"""
class FirebaseHandler:
    def __init__(self, path_to_config) -> None:
        """
        Initializing params.
        """
        self.config = path_to_config
        self.firebase_credentials = credentials.Certificate(path_to_config)
    def connect(self):
        """
        Connecting to the firestore.
        """
        firebase_admin.initialize_app(self.firebase_credentials)
        self.firebase_database = firestore.client()
        if self.firebase_database is not None:
            self.connected = True
            print(f"LOG::FirebaseHandler::Connecting to the Firebase Firestore success!")
        else:
            self.connected = False
            print(f"LOG::FirebaseHandler::Connecting to the Firebase Firestore failed!")
        return self.connected
    
    def get_record(self, collection_name, key, value, debug=False):
        """
        Getting record from database.
        """
        if self.connected:
            data = self.firebase_database.collection(collection_name).stream()
            found = False
            for record in data:
                formatted_record = record.to_dict()
                if debug:
                    print(f"LOG::FireabaseHandler::Document id: {record.id}, {formatted_record}")
                if formatted_record[f"{key}"] == value:
                    found = True
                    return formatted_record
                if formatted_record[f"{key}"] == int(value):
                    found = True
                    return formatted_record
            return found
    
    def delete_record(self, collection_name, key, value, debug=False):
        """
        Deleting record from database.
        """
        if self.connected:
            data = self.firebase_database.collection(collection_name).stream()
            for record in data:
                formatted_record = record.to_dict()
                if debug:
                    print(f"LOG::FireabaseHandler::Document id: {record.id}, {formatted_record}")
                if formatted_record[f"{key}"] == value:
                    self.firebase_database.collection(collection_name).document(record.id).delete()
                if formatted_record[f"{key}"] == int(value):
                    self.firebase_database.collection(collection_name).document(record.id).delete()
    
    def delete_record(self, collection_name, key_1, value_1, key_2, value_2, debug=False):
        """
        Deleting record from database.
        """
        if self.connected:
            data = self.firebase_database.collection(collection_name).stream()
            for record in data:
                formatted_record = record.to_dict()
                if debug:
                    print(f"LOG::FireabaseHandler::Document id: {record.id}, {formatted_record}")
                readed_key_1 = str(formatted_record[f"{key_1}"])
                readed_key_2 = str(formatted_record[f"{key_2}"])
                if readed_key_1== str(value_1) and readed_key_2 == str(value_2): 
                    self.firebase_database.collection(collection_name).document(record.id).delete()
                                    
    def post_document(self, collection_name, document_data, document_id=""):
        """
        Posting document on the specific collection.
        """
        if self.connected:
            if document_id != "":
                self.firebase_database.collection(collection_name).document(document_id).set(document_data)
            else:
                self.firebase_database.collection(collection_name).document().set(document_data)
        else:
            print(f"LOG::FirebaseHandler::Not connected!")
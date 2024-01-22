import cnn_models_handler as cnh
from flask import Flask, request
import firebase_storage_handler as fsh
from flask_cors import CORS

##### LOADING MODELS #####

cnn_primitives_model = cnh.CNN_Model(
    model_name = "Primitives_classifier",
    path_to_model="./models_ready_to_use/primitives_cnn_model.keras", 
    class_names={0: 'circle', 1: 'elipse', 2: 'rectangle', 3: 'square', 4: 'triangle'},
    trained_input_dimension=(64, 64)
)
cnn_primitives_model.load()

cnn_digits_model = cnh.CNN_Model(
    model_name = "Digits_classfier",
    path_to_model="./models_ready_to_use/digits_cnn_model.keras",
    class_names={0:'0', 1:'1', 2:'2', 3:'3', 4:'4', 5:'5', 6:'6', 7:'7', 8:'8', 9:'9'},
    trained_input_dimension=(28, 28)
)
cnn_digits_model.load()

######## FIREABASE CONNECTION #####
firebase_handler = fsh.FirebaseHandler(path_to_config="./admin_key.json")
firebase_handler.connect()
record = firebase_handler.get_record("tasks", "id", "1", debug=False)
task = {
    'label': 'circle',
    'description': 'Narysuj okrag',
    'image': '/src/assets/icons/Circle.svg',
    'type': 'primitive',
    'id': 1,
    'difficulty': 1,
    'name': 'Okrąg'
}
score = {
    'accuracy': 0, 
    'score': 0,
    'taskId': 0,
    'time': 0,
    'userUid': "test",
}
#firebase_handler.post_document("scores", score)
print(f"Task with id: {record}")

######## REST API ########

app = Flask(__name__)
CORS(app)

def allowed_file(file_name):
    return '.' in file_name and file_name.rsplit('.', 1)[1] in {'png', 'jpg', 'jpeg'}

# Default Web Page/ Home
@app.route("/")
def hello():
    needed_format = "Needed input format:<br>{<br>'taskId':digit = [0, infinity],<br> 'userUid':string = 'NJCCOITk7JgSkWLZudPYpnKPI983',<br> 'time':digit = [0, infinity], <br>'image':file = file<br>}"
    return f"<p>Image Classifier:</p><p>/classify:  {needed_format}</p>"

@app.route("/classify", methods=["POST"])
def classify():
    """
    Needed input format:
    {
        "taskId":digit = [0, infinity]
        "userUid":string = "NJCCOITk7JgSkWLZudPYpnKPI983"
        "time":digit = [0, infinity]
        "image":file = file
    }
    """
    taskId:int = int(request.form.get("taskId"))
    userUid:str = str(request.form.get("userUid"))
    time:float = float(request.form.get("time"))
    type_of_image = firebase_handler.get_record("tasks", "id", taskId, debug=False)["type"]
    label_of_image = firebase_handler.get_record("tasks", "id", taskId, debug=False)["label"]
    image = request.files['image']
    path_to_image = "last_image.png"
    print(f"LOG:: TaskID: {taskId}, UserUid: {userUid}, type: {type_of_image}, label: {label_of_image}, image: {image}\n")
    if image and allowed_file(image.filename):
        image.save(path_to_image)
    else:
        return "Wrong format of image!"
    match type_of_image:
        case "primitive":
            prediction = cnn_primitives_model.predict(path_to_image)
            print(f"LOG::PRIMITIVE::PREDICTION = {prediction}")
        case "digit":
            prediction = cnn_digits_model.predict(path_to_image)
            print(f"LOG::DIGIT::PREDICTION = {prediction}")
        case _:
            return "Wrong type!"
    if label_of_image != prediction["label"]:
        score_value = 0
    else:
        if float(time) == 0:
            time = 1
        score_value = 100/float(time) * float(prediction["accuracy"])
    score = {
        'accuracy': prediction["accuracy"], 
        'score': score_value,
        'taskId': taskId,
        'time': time,
        'userUid': userUid,
    }
    print(f"LOG::RESULT = {score}, score value: {score_value}")
    firebase_handler.delete_record(collection_name="scores", key_1="userUid", value_1=userUid, key_2="taskId", value_2=taskId)
    firebase_handler.post_document(collection_name="scores", document_data=score)
    return f"Added: {score}"

if __name__ == '__main__':
    app.run(debug=True, port=80, host='0.0.0.0')
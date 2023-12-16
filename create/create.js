async function infobox(txt, type) {
    document.getElementById('notify').innerHTML = txt

    document.getElementById('notify').style.display='flex';
    setTimeout(function() {
        
    if(type == 1) {
        document.getElementById('notify').style.backgroundcolor='rgba(255, 0, 0, 0.671)';
    }else if(type == 2){
        document.getElementById('notify').style.backgroundcolor='rgba(0, 255, 0, 0.671)';
    }
    document.getElementById('notify').style.display='none';
    },5000)
}

function home() {
    window.location.href = "../index.html"
}

const firebaseConfig = {
    apiKey: "AIzaSyCJiUyClTJKl_7yYs9t-fDzrua58foitm4",
    authDomain: "blackchat-1-72126.firebaseapp.com",
    databaseURL: "https://blackchat-1-72126-default-rtdb.firebaseio.com",
    projectId: "blackchat-1-72126",
    storageBucket: "blackchat-1-72126.appspot.com",
    messagingSenderId: "144957923199",
    appId: "1:144957923199:web:d5938846b8df2d710b444a"
};
  
firebase.initializeApp(firebaseConfig)
var database = firebase.database()

function add_todo() {
    var title = document.getElementById('todo_title').value
    var desc = document.getElementById('todo_description').value
    var id = "id" + Math.random().toString(16).slice(2)

    if (title == "" || title == null) {
        infobox("Bitte gib einen Namen an", 1)
        return false
    }

    if(desc == " " || desc == null) {
        infobox('Bitte gib eine Beschreibung an', 1)
        return false;
    }

    firebase.database().ref(`todos/todo_${id}`).set({
        title: title,
        desc: desc,
        status: 1,
        id: id
    })

    infobox(`Dien aufgabe "${title}" wurde Hinzugefügt`)
    document.getElementById('todo_title').value = ""
    document.getElementById('todo_description').value = ""
}
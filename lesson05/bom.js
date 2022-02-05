const button = button;
const input = input;
const list = list;

function saveUserData() {
    var name = document.getElementById('favchap').value;
    console.log("users value is: " + name);
    document.getElementById("list").innerHTML = name;
 }
button.addEventLIstener('click', saveUserData())
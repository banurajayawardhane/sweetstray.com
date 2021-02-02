var firebaseConfig = {
    apiKey: "AIzaSyD8MgbjOo-yVN8BPHmkVHuJev4i3yUUSCc",
    authDomain: "sweets-tray-website.firebaseapp.com",
    databaseURL: "https://sweets-tray-website.firebaseio.com",
    projectId: "sweets-tray-website",
    storageBucket: "sweets-tray-website.appspot.com",
    messagingSenderId: "379546569738",
    appId: "1:379546569738:web:7337ac41de0dff218623f3",
    measurementId: "G-YXR6G1BVJT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();




var messagesRef = firebase.database().ref('messages');

document.getElementById('contact').addEventListener('submit',submitForm);

//submit form



function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var address = getInputVal('address');
    var info = getInputVal('info');

    //console.log(name);


    saveMessage(name,email,phone,address,info);

    document.querySelector('.alert').style.display = 'block';

setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000)

document.getElementById('contact').reset();


}

function getInputVal(id){
    return document.getElementById(id).value;
}

//save the message to firebase

function saveMessage(name,email,phone,address,info){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone:phone,
        address:address,
        info: info

    });

}


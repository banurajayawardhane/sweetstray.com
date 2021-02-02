
  
  var rootRef = firebase.database().ref().child("messages");

  rootRef.on ("child_added",snap => {

    

    var name = snap.child("name").val();
    var phone = snap.child("phone").val();
    var email = snap.child("email").val();
    var address = snap.child("address").val();
    var info = snap.child("info").val();

    


    $("#table_body").append ("<tr><td>"+name+"</td><td>"+phone+"</td><td>"+email+"</td><td>"+address+"</td><td>"+info+"</td> </tr>");

  });


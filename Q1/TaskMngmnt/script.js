
function validEntry() {
    var veremail = document.forms["FormContact"]["email"].value;
   
    if (veremail == '') {
        alert("Email cannot be Null");
    }
    else{
      alert(veremail)
    }
   
  }

function validateForm(){

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var country = document.getElementById("country").value;
var comments = document.getElementById("comments").value;

if(name=="" || email=="" || country=="" || comments==""){
alert("Please fill all fields");
return false;
}

alert("Form submitted successfully!");
return true;

}
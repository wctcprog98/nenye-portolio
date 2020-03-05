var names = "";
var email = "";
var message = '';

$(document).ready(function() {
  $("#send").click(function(e) {
  e.preventDefault();
  var name = $("#name").val();
  var email = $("#email").val();
  var msg = $("#msg").val();
  if (!(name == '' || email == '' || msg == '')) {
  $("#submitdata").empty();
  $("#submitdata").append("Name: " + name + "<br/>Email: " + email + "<br/>Message: " + msg);
  } else {
  alert("Please Fill All Fields.");
  }
  });
  });

$("#thankYou").hide();
$("#thanks").show(); 

$("#submit").click(function (e) {
  e.preventDefault();
  console.log("clicked");
    $("#cardForm").hide();
    $("#thankYou").show();
  });

  


 


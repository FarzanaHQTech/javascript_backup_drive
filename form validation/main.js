var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    // document.getElementById('name-error')
    nameError.innerHTML = "*Name is required!";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "*Write Full Name!";
    return false;
  }
  nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}
function validatePhone() {
  let phone = document.getElementById("contact-phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "*Phone no. is Required!";
    return false;
  }
  if (phone.length !== 11) {
    phoneError.innerHTML = "*Give correct number!"; //'Phone no. should be 11 digit'
    return false;
  }
  //  if(!phone.match(/^[01||+8801][3-9]{1}[0-9]{8}/)){
  //     phoneError.innerHTML = 'Give correct number'
  //     return false
  //     }
  else {
    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
  }
}

function validateEmail() {
  let email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "*Email is required!";
    return false;
  }
  if (!email.match(/[\w]+.@[\w]+\.[\w]/)) {
    //(/^[A-Za-z]\._\-[0-9]*@[]a-z]*[\.][a-z]{2,4}$/))
    emailError.innerHTML = "*Give correct email id!";
    return false;
  }
  emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}
function validateMessage() {
  let message = document.getElementById("contact-message").value;
  let required = 30;
  let left = required - message.length;
  if (left > 0) {
    messageError.innerHTML = left + "More charecters required";
    return false;
  }
  messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
  // }else{
  //     submitError.innerHTML = 'Thank you for submit the form correctly';
  // }
}

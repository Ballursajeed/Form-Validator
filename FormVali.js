console.log("Helllo Form");
let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let messageError = document.getElementById("message-error");
let emailError = document.getElementById("email-error");
let submitError = document.getElementById("submit-error");


function validateName(){
 let name = document.getElementById("contact-name").value;

 if (name.length == 0) {
   nameError.innerHTML = 'Name is required';

  return false; 
 }
 if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
   nameError.innerHTML='Write Full Name';
 
     return false;  
     }
  
      nameError.innerHTML = '✅';     
     return true;
}

function validatePhone(){
let phone =document.getElementById("contact-phone").value;
 if (phone.length == 0) {
   phoneError.innerHTML = 'Phone no. is required';
  return false; 
 }
 if (phone.length !== 10) {
  phoneError.innerHTML='number should be 10 digits';
  return false;
 }
 if (!phone.match(/^[0-9]{10}$/)) {
  phoneError.innerHTML='number should be 10 digits';
  return false;  
 }
     phoneError.innerHTML = '✅';     
     return true;
}

function validateEmail() {
  let email = document.getElementById("contact-email").value;

  if (email.length === 0) {
    emailError.innerHTML = 'Email is required';
    return false;
  }

  // Updated regular expression to allow '+' in the local part
  let emailRegex = /^[A-Za-z0-9._+\-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  
  if (!email.match(emailRegex)) {
    emailError.innerHTML = 'Enter a valid email';
    return false;
  }

  emailError.innerHTML = '✅';
  return true;
}

function validateMessage() {
 	  let message = document.getElementById("contact-message").value;
	  let required=30;
	  let left = required-message.length;
 	    if (left>0) {	  
    messageError.innerHTML=left + ' more characters required';	
	       return false;
	}  
   messageError.innerHTML = '✅';
  return true; 	
	
	}
	
	function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    	 submitError.style.display='block';
       submitError.innerHTML = 'Please fix errors to submit'
      setTimeout(function () {submitError.style.display='none';},3000);       
       return false;    
    }  	
	}


var formName = document.getElementById('employee_form');

// "e" is function argument
function validFormSubmit(e) {
  e.preventDefault();
  var userName = document.getElementById('username').value;
  console.log('InputName-->', userName);
  var passWord = document.getElementById('password').value;
  console.log('passWord-->', passWord);
  var confirmPassword = document.getElementById('confirmpass').value;
  console.log('confirm-password-->', confirmPassword);
  var mobileNumber = document.getElementById('mobile').value;
  console.log('mobilenumber-->', mobileNumber);
  var emailAddress = document.getElementById('email').value;
  console.log('Email-->', emailAddress);
  var genderInput = document.employee_form.gender_field;
  console.log('genderInput-->', genderInput);
  var userType = document.employee_form;
  console.log('userType-->', userType.user_type);
  var userMessage = document.getElementById('usermessage').value;
  console.log('userMessage-->', userMessage);

  if (userName == '') {
    document.getElementById('user_err').innerHTML = '* Please add user name';
    return false;
  } else if (!isNaN(userName)) {
    document.getElementById('user_err').innerHTML =
      '* User Name should be typed in alphabet !!';
  } else {
    document.getElementById('user_err').innerHTML = '';
  }
  if (!passWord) {
    document.getElementById('pass_err').innerHTML = '* Please add password';
    return false;
  } else {
    document.getElementById('pass_err').innerHTML = '';
  }
  if (confirmPassword == '') {
    document.getElementById('con_pass_err').innerHTML = '* This field is empty';
    return false;
  } else if (confirmPassword !== passWord) {
    document.getElementById('con_pass_err').innerHTML = '* Password Mismatch';
    return false;
  } else {
    document.getElementById('con_pass_err').innerHTML = '';
  }
  if (mobileNumber == '') {
    document.getElementById('mobile_err').innerHTML =
      '* Please add mobile number';
    return false;
  } else if (mobileNumber.length != 10) {
    document.getElementById('mobile_err').innerHTML =
      '*Mobile Number must be 10 digit';
    return false;
  } else if (isNaN(mobileNumber)) {
    document.getElementById('mobile_err').innerHTML =
      '* Mobile Number must typed in number !!';
    return false;
  } else {
    document.getElementById('mobile_err').innerHTML = '';
  }
  if (emailAddress == '') {
    document.getElementById('email_err').innerHTML = '* This field is empty !';
    return false;
  } else {
    document.getElementById('email_err').innerHTML = '';
  }
  if (genderInput.value == '') {
    document.getElementById('gender_err').innerHTML = '** Please select gender';
    return false;
  } else {
    document.getElementById('gender_err').innerHTML = '';
  }
  if (
    userType.user_type[0].checked == false &&
    userType.user_type[1].checked == false &&
    userType.user_type[2].checked == false
  ) {
    document.getElementById('usertype_err').innerHTML =
      '** Please select atleast one user';
    return false;
  } else {
    document.getElementById('usertype_err').innerHTML = '';
  }
  if (userMessage == '') {
    document.getElementById('message_err').innerHTML =
      '** Please add any message';
    return false;
  } else {
    document.getElementById('message_err').innerHTML = '';
  }
  return true;
}
formName.addEventListener('submit', validFormSubmit);

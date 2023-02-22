var formName = document.getElementById('employee_form');

// "e" is function argument
function validFormSubmit(e) {
  e.preventDefault();
  var userName = document.getElementById('username').value;
  console.log('Sumanpass-->', userName);
  var passWord = document.getElementById('password').value;
  console.log('passWord-->', passWord);
  var confirmPassword = document.getElementById('confirmpass').value;
  console.log('confirm-password-->', confirmPassword);
  var mobileNumber = document.getElementById('mobile').value;
  console.log('mobilenumber-->', mobileNumber);

  if (userName == '') {
    document.getElementById('user_err').innerHTML = '* Please add user name';
    return false;
  } else {
    document.getElementById('user_err').innerHTML = '';
  }
  if (!passWord) {
    document.getElementById('pass_err').innerHTML = '* Please add password';
    return false;
  } else {
    document.getElementById('pass_err').innerHTML = '';
  }
  if (confirmPassword==''){
    document.getElementById('con_pass_err').innerHTML = '* This field is empty';
    return false;
  } else if (confirmPassword!==passWord){
    document.getElementById('con_pass_err').innerHTML = '* Password Mismatch';
    return false;
  } else {
    document.getElementById('con_pass_err').innerHTML = '';
  }
  if (mobileNumber==''){
    document.getElementById('mobile_err').innerHTML = '* Please add mobile number';
    return false;
  } else if (mobileNumber.length !=10){
    document.getElementById('mobile_err').innerHTML = '*Mobile Number must be 10 digit';
    return false;
  } else {
    document.getElementById('mobile_err').innerHTML = '';
  }
  
  return true;
}
formName.addEventListener('submit', validFormSubmit);

var formName = document.getElementById('employee_form');

// "e" is function argument
function validFormSubmit(e) {
  e.preventDefault();
  var userName = document.getElementById('username').value;
  var passWord = document.getElementById('password').value;
  console.log('passWord-->', passWord);

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

  return true;
}
formName.addEventListener('submit', validFormSubmit);

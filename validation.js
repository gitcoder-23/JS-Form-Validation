// checkbox validation http://www.chennaisunday.com/jscheckbox.html

var form = document.getElementById('user_form');
function validation(event) {
  //Preventing page refresh
  event.preventDefault();
  // console.log('form-log-->', document.user_form.email.value);
  // console.log('form-log-->', document.user_form.submit.value);

  var user = document.getElementById('user').value;
  var userName = document.user_form.user; // for focus
  var gender = document.user_form.gender;
  console.log('gender-->', gender.value);

  var userType = document.querySelector('#user_type');
  console.log('usertype-->', userType);

  var course = document.user_form.course;
  console.log('course-->', course.value.length);
  var password = document.getElementById('password').value;
  var passWord = document.user_form.password; // for focus
  var confirmpass = document.getElementById('confirmpass').value;
  var confirmPassWord = document.user_form.confirmpass; // for focus
  var mobile = document.getElementById('mobile').value;
  var mobileNo = document.user_form.mobile; // for focus
  var email = document.getElementById('email').value;
  var emailId = document.user_form.email; // for focus
  var message = document.getElementById('message').value;
  var messageField = document.user_form.message; // for focus

  // Image validation
  var userImage = document.forms['user_form']['user_image'];
  console.log('userImage-->', userImage.value);
  var validExt = ['jpeg', 'png', 'jpg', 'gif'];

  // if(userName.value.length <= 0) {}
  if (user == '') {
    // alert('Please fill the username')
    document.getElementById('usernameerr').innerHTML =
      '** Please fill the username';
    userName.focus();
    return false;
  }
  if (user.length <= 2 || user.length > 20) {
    document.getElementById('usernameerr').innerHTML =
      '** Username must be between 2 and 20';
    userName.focus();
    return false;
  }
  if (!isNaN(user)) {
    document.getElementById('usernameerr').innerHTML =
      '** Username only characters allowed';
    userName.focus();
    return false;
  }
  if (gender.value.length <= 0) {
    document.getElementById('gendererr').innerHTML = '** Please select gender';
    return false;
  }
  if (userType.checked == false) {
    document.getElementById('usertypeerr').innerHTML =
      '** Choose one user type';
    return false;
  }
  if (course.value.length <= 0) {
    document.getElementById('courceerr').innerHTML = '** Please select course';
    return false;
  }
  if (password == '') {
    document.getElementById('passworderr').innerHTML =
      '** Please fill the password';
    passWord.focus();
    return false;
  }

  if (password.length <= 5 || password.length > 20) {
    document.getElementById('passworderr').innerHTML =
      '** Password must be between 2 and 20';
    passWord.focus();
    return false;
  }
  if (confirmpass == '') {
    document.getElementById('confirmpasserr').innerHTML =
      '** Please fill the confirm password';
    confirmPassWord.focus();
    return false;
  }
  if (password != confirmpass) {
    document.getElementById('confirmpasserr').innerHTML =
      '** Password should be same not matching';
    confirmPassWord.focus();
    return false;
  }
  if (mobile == '') {
    document.getElementById('mobileerr').innerHTML =
      '** Please fill the mobile number';
    mobileNo.focus();
    return false;
  }
  if (isNaN(mobile)) {
    document.getElementById('mobileerr').innerHTML =
      '** Mobile number must be number not character';
    mobileNo.focus();
    return false;
  }
  if (mobile.length != 10) {
    document.getElementById('mobileerr').innerHTML =
      '** Mobile number must be 10 digits';
    mobileNo.focus();
    return false;
  }
  if (email == '') {
    document.getElementById('emailerr').innerHTML = '** Please fill the email';
    emailId.focus();
    return false;
  }
  if (email.indexOf('@') <= 0) {
    document.getElementById('emailerr').innerHTML = '** @ Invalid position';
    emailId.focus();
    return false;
  }
  //  position 3 --> - 4
  if (
    email.charAt(email.length - 4) != '.' &&
    email.charAt(email.length - 3) != '.'
  ) {
    document.getElementById('emailerr').innerHTML = emailId.focus();
    ('** . Invalid position');
    return false;
  }

  if (message == '') {
    document.getElementById('messageerr').innerHTML =
      '** Please provide message';
    messageField.focus();
    return false;
  }
  if (message.length <= 5) {
    document.getElementById('messageerr').innerHTML =
      '** Message minimum 5 characters long';
    messageField.focus();
    return false;
  }

  if (userImage.value == '') {
    document.getElementById('imageerr').innerHTML = '** Please select image';
    return false;
  } else {
    var pos_of_dot = userImage.value.lastIndexOf('.');
    var img_ext = userImage.value.substring(pos_of_dot);
    var result = validExt.includes(img_ext);
    if ((result = false)) {
      document.getElementById('imageerr').innerHTML =
        '** Selected file is not image';
      return false;
    }
    console.log('img_ext-->', pos_of_dot, img_ext, result);
  }
  return true;
}
//Calling a function during form submission.
form.addEventListener('submit', validation);

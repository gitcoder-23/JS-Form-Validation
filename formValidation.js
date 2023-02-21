var form = document.getElementById('employee_form');
function validFormSubmit(event) {
    // console.log('form checking');
    event.preventDefault();
    var userName = document.getElementById('username').value;
    console.log('user', userName);

         
        //   if (userName == '') {
        //     document.querySelector('#user_err').innerHTML =
        //       '** Please add username';
          
        //     return false;
        //   }

        //   return true;
}
form.addEventListener('submit', validFormSubmit);
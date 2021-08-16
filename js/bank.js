document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('input-email');
    const userMail = emailField.value;
    const passField = document.getElementById('input-pass');
    const userPass = passField.value;

    if(userMail == 'fahim@gmail.com' && userPass == '011980427'){
        window.location.href='banking.html';
    }
})
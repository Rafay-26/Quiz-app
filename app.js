var allUsers = [];

var users = localStorage.getItem('users');


if (users !== null) {
    allUsers = JSON.parse(users)
}

function signup() {

    var name = document.getElementById('name');
    sessionStorage.setItem('naam', name)
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var user = {
        name: name.value,
        email: email.value,
        password: password.value
    }

    allUsers.push(user)
    localStorage.setItem('users', JSON.stringify(allUsers))
    location.href = "login.html"
}


function login() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    var filterUser = allUsers.filter(data => data.email === email.value && data.password === password.value);
    

    
    if (filterUser.length) {
        alert("user login succesful")
        location.href = 'quiz.html'
    }
    
     else {
        alert("email/password incorrect")
        location.href = 'login.html'
    }

}






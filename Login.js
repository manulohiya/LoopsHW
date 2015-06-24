var userLogin = {
    username: "manulohiya",
    password: "password"
}

var passwordTries = 3;

for (i = 0; i < passwordTries; i++) {
    var checkPassword = prompt("Enter password for user "+ userLogin.username);
    if (checkPassword !== userLogin.password) {
        alert("Try again! You have " + (passwordTries-i-1) +" tries left before we delete your operating system!")
        
        
    }
    else {
        alert("Congrats, "+ userLogin.username + ", you are in!");
        break;
    }

}



//console.log("Username: "+ userLogin.username);
//console.log("Password: "+ userLogin.password);

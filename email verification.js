var email = prompt("Please enter email address");

if(validateEmail(email) === true){
    alert("Congrats, you are signed up!");
}

else {
    alert("INVALID! Please enter valid email!");
}

function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
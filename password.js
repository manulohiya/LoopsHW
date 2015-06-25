var pass = prompt("Enter your strong password");
var strength = 0;

// password should be a good mix
    var checks = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
  //      nonWords: /\W/.test(pass),
  //      alpha: /\W/.test(pass)
    }


console.log(checks.digits);

 while (strength <= 0) {
   
    if (checks.digits === false) {
        alert("Your password should contain at least one number")
        break;
//        pass = prompt("Enter your strong password");
    }

    else if(checks.lower === false) {
        alert("Your password should contain at least one lower case")
        break;
    }

    else if(checks.upper === false) {
        alert("Your password should contain at least one upper case")
        break;
    }


    else {
        strength = strength + 1;
        break;
    }

}

if(strength === 1 ){
    alert("Congrats! Your password is strong enough to pass!");
    }


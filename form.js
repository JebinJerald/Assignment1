let regexp = /^([\w\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
let pwdregexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

// signup
function check(){
    let email = document.getElementById("email");
    let emailerror = document.getElementById("emailerror");

    if(regexp.test(email.value)){
        return true;
    } else{
        emailerror.innerHTML = "Email entered is invalid";
        emailerror.style.color = "red";
        return false;
    }
}
function checkpwd(){
    let pwd = document.getElementById("pwd");
    let pwderror = document.getElementById("pwderror");

    if(pwdregexp.test(pwd.value)){
             return true;
        } else{
             pwderror.innerHTML = "Password entered doesn't meet criteria";
             pwderror.style.color = "red";
             return false;
        }
}
function checkphone(){
    let phone = document.getElementById("phone");
    let phonerror = document.getElementById("phonerror");
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(phoneno.test(phone.value)){
            return true;
        } else{
             phonerror.innerHTML = "Phone no. doesn't meet criteria";
             phonerror.style.color = "red";
             return false;
        }
}
function checkconpwd(){
    let conpwd = document.getElementById("conpwd");
    let conpwderror = document.getElementById("conpwderror");

    if(pwd.value==conpwd.value){
             return true;
        } else{
             conpwderror.innerHTML = "Passwords doesn't match";
             conpwderror.style.color = "red";
             return false;
        }
}
// /signup

// login
function check1(){
    let email1 = document.getElementById("email1");
    let emailerror1 = document.getElementById("emailerror1");

    if(regexp.test(email1.value)){
        return true;
    } else{
        emailerror1.innerHTML = "Email entered is invalid";
        emailerror1.style.color = "red";
        return false;
    }
}
function check2(){
    let pwd1 = document.getElementById("pwd1");
    let pwderror1 = document.getElementById("pwderror1");

    if(pwdregexp.test(pwd1.value)){
        return true;
        } else{
            pwderror1.innerHTML = "Password entered doesn't meet criteria";
            pwderror1.style.color = "red";
            return false;
        }
}
// /login
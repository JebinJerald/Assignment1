let regexp = /^([\w\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/

// signup
function check(){
    let email = document.getElementById("email");
    let pwd = document.getElementById("pwd");
    let emailerror = document.getElementById("emailerror");
    let conpwd = document.getElementById("conpwd");
    let conpwderror = document.getElementById("conpwderror");
    let phone = document.getElementById("phone");
    let phonerror = document.getElementById("phonerror");
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(regexp.test(email.value)){
        if(phoneno.test(phone.value)){
            return true;
        } else{
            phonerror.innerHTML = "Phone no. doesn't match criteria";
            phonerror.style.color = "red";
        } 
        if(pwd.value==conpwd.value){
            return true;
        } else{
            conpwderror.innerHTML = "Passwords doesn't match";
            conpwderror.style.color = "red";
            return false;
        }
    } else{
        emailerror.innerHTML = "Email entered is invalid";
        emailerror.style.color = "red";
        return false;
    }
}
// /signup

// login
function check1(){
    let email1 = document.getElementById("email1");
    let emailerror1 = document.getElementById("emailerror1");
    let pwd1 = document.getElementById("pwd1");
    let pwderror1 = document.getElementById("pwderror1");

    if(regexp.test(email1.value)){
        return true;
    } else{
        emailerror1.innerHTML = "Email entered is invalid";
        emailerror1.style.color = "red";
        return false;
    }
}
// /login
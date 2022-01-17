let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let emailerror = document.getElementById("emailerror");
let pwderror = document.getElementById("pwderror");
let email1 = document.getElementById("email1");

function check(){
    let regexp = /^([\w\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
    if(regexp.test(email.value)){
        return true;
    }
    else{
        emailerror.innerHTML = "Email entered is invalid";
        emailerror.style.color = "red";
        return false;
    }
}
function check1(){
    let regexp = /^([\w\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
    if(regexp.test(email1.value)){
        return true;
    }
    else{
        emailerror.innerHTML = "Email entered is invalid";
        emailerror.style.color = "red";
        return false;
    }
}
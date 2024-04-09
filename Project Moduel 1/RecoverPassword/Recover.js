let email = document.getElementById('email');
let oldPassword = document.getElementById('oldPassword');
let newPassword = document.getElementById('newPassword');
let confirmPassword = document.getElementById('confirmPassword');
let errorMail = document.getElementById('emailError');
let errorOldpassword = document.getElementById('oldPasswordError');
let errorNewpassword = document.getElementById('newPasswordError');
let errorConfirmNewPassword = document.getElementById('confirmPasswordError');
var checkMail = false;
function handleEmailChange() {
    if (email.value == "") {
        errorMail.innerHTML = "Email is required";
        errorMail.style.color = "red";
        checkMail = false;
    } else {
        errorMail.innerHTML = "";
        checkMail = true;
    }
}
var checkOldPassword = false;
function handleInputOldpassword() {
    if (oldPassword.value == "") {
        errorOldpassword.innerHTML = "Old password is required";
        errorOldpassword.style.color = "red";
        checkOldPassword = false;
    } else {
        errorOldpassword.innerHTML = "";
        checkOldPassword = true;
    }
}
var checkNewPassword = false;
function handleNewPassword() {
    if (newPassword.value == "") {
        errorNewpassword.innerHTML = "New password is required";
        errorNewpassword.style.color = "red";
        checkNewPassword = false;
    } else {
        errorNewpassword.innerHTML = "";
        checkNewPassword = true;
    }
}
var checkConfirmPassword = false;
function handleConfirmNewPassword() {
    if (confirmPassword.value == "") {
        errorConfirmNewPassword.innerHTML = "Confirm password is required";
        errorConfirmNewPassword.style.color = "red";
        checkConfirmPassword = false;
    } else {
        errorConfirmNewPassword.innerHTML = "";
        checkConfirmPassword = true;
    }
}
function checkAll(){
    if(checkMail && checkOldPassword && checkNewPassword && checkConfirmPassword){
        return true;
    }
    return false;
}
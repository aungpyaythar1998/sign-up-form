function checkIfPwdMatches(e) {
    let pwd = pwdForm.value;
    let confirmPwd = confirmPwdForm.value;

    if (confirmPwd === "" || pwd === "") {
        // Clean up leftover added classes if one of the form
        // is empty again.
        pwdMatchHint.classList.remove("password-no-match");
        pwdMatchHint.classList.remove("password-match")
    }

    if (confirmPwd && pwd) {
        if (confirmPwd == pwd) {
            pwdMatchHint.classList.add("password-match");
            pwdMatchHint.classList.remove("password-no-match");
        } else {
            pwdMatchHint.classList.add("password-no-match");
            pwdMatchHint.classList.remove("password-match");
        }
    }
}

const pwdForm = document.getElementById("password");
const confirmPwdForm = document.getElementById("confirm-password");
const pwdMatchHint = document.querySelector(".password-hint");

pwdForm.addEventListener("input", checkIfPwdMatches);
confirmPwdForm.addEventListener("input", checkIfPwdMatches);
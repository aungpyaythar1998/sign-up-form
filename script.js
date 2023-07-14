function showPwdMatch() {
    pwdForm.classList.add("match-form");
    confirmPwdForm.classList.add("match-form");

    pwdForm.classList.remove("mis-match-form");
    confirmPwdForm.classList.remove("mis-match-form");

    pwdMatchHint.classList.add("password-match");
    pwdMatchHint.classList.remove("password-no-match");
}

function showPwdMismatch() {
    pwdForm.classList.add("mis-match-form");
    confirmPwdForm.classList.add("mis-match-form");

    pwdForm.classList.remove("match-form");
    confirmPwdForm.classList.remove("match-form");

    pwdMatchHint.classList.add("password-no-match");
    pwdMatchHint.classList.remove("password-match");
}

function removeAllPwdHints() {
    pwdForm.classList.remove("match-form");
    pwdForm.classList.remove("mis-match-form");

    confirmPwdForm.classList.remove("match-form");
    confirmPwdForm.classList.remove("mis-match-form");

    pwdMatchHint.classList.remove("password-match");
    pwdMatchHint.classList.remove("password-no-match");
}

function checkIfPwdMatches(e) {
    let pwd = pwdForm.value;
    let confirmPwd = confirmPwdForm.value;

    if (confirmPwd === "" || pwd === "") {
        // Clean up leftover added classes if one of the form
        // is empty again.
        removeAllPwdHints();
    }

    if (confirmPwd && pwd) {
        if (confirmPwd == pwd) {
            showPwdMatch();
        } else {
            showPwdMismatch();
        }
    }
}

const pwdForm = document.getElementById("password");
const confirmPwdForm = document.getElementById("confirm-password");
const pwdMatchHint = document.querySelector(".password-hint");

pwdForm.addEventListener("input", checkIfPwdMatches);
confirmPwdForm.addEventListener("input", checkIfPwdMatches);
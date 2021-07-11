const signinForm = document.querySelector("#signin-form");
const signinInput = signinForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const changeUsername = document.querySelector(".change-username");
const clock = document.querySelector(".clock");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onSigninSubmit(event) {
    event.preventDefault();
    signinForm.classList.add(HIDDEN_CLASSNAME);
    const username = signinInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

if (savedUsername === null) {
    signinForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    paintGreetings(savedUsername)
}

signinForm.addEventListener("submit", onSigninSubmit);

function onChangeUsername(event){
    event.preventDefault();
    signinInput.value = savedUsername;
    greeting.classList.add(HIDDEN_CLASSNAME);
    changeUsername.classList.add(HIDDEN_CLASSNAME);
    clock.classList.add(HIDDEN_CLASSNAME);
    signinForm.classList.remove(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
}

function paintGreetings(username) {
    greeting.innerText = `Welcome ${username} expedition!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    changeUsername.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME)
}

changeUsername.querySelector("a").addEventListener("click", onChangeUsername);
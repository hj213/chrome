const loginForm = document.querySelector("#login");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username"

function loginClick (event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText =  `Welcome ${username}🙌`;
    greeting.classList.remove("hidden");


}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", loginClick);
} else{
    greeting.innerText = `Welcome ${savedUsername}`;
    greeting.classList.remove("hidden");
}
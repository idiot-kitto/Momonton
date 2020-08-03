const nameContainer = document.querySelector(".js-name");
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintName(name){
    nameContainer.innerHTML = "";
    const title = document.createElement("span");
    title.className = "name__text";
    title.innerHTML = `Hello ${name}`;
    nameContainer.appendChild(title);
}

function handleSubmit(event){
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const currentValue = input.value;
    localStorage.setItem(USER_LS, currentValue);
    paintName(currentValue);
}

function askForName() {
    const input = document.createElement("input");
    input.placeholder = "What is your name?";
    input.type = "text";
    input.className = "name__input";
    const form = document.createElement("form");
    form.addEventListener("submit", handleSubmit);
    form.appendChild(input);
    nameContainer.appendChild(form);
}

function loadName() {
    const name = localStorage.getItem(USER_LS);
    if(name === null){
        askForName();
    } else {
        paintName(name);
    }
}

function init() {
    loadName();
}

init();
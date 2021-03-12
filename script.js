
const form = document.querySelector(".form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    validate();
})

function validate(){
    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
        if (firstname.value == ""){
            warning(firstname, "First name cannot be empty");
        } else {
            valid(firstname);
        }
        if (lastname.value == ""){
            warning(lastname, "Last name cannot be empty");
        } else {
            valid(lastname);
        }
        if (email.value == ""){
            warning(email, "Email cannot be empty");
        } else {
            valid(email);
        }
        if (password.value == ""){
            warning(password, "Password cannot be empty");
        } else {
            valid(password);
        }
}

function warning(input, message){
    const formControl = input.parentElement;
    formControl.classList.add("error");
    const error = formControl.querySelector("span");
    error.innerText = message;
}

function valid(input){
    const formControl = input.parentElement;
    formControl.classList.remove("error");
    const error = formControl.querySelector("span");
    error.innerText = " ";
}
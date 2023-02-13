const formulario = document.querySelector("form");
console.log(formulario);

formulario.addEventListener("submit", handleSubmit);

function handleSubmit(e){

    e.preventDefault();

    const {email, password} = e.currentTarget;

    if(email.value === "" || password.value === "") {
        return alert ("Todos los espacios deben ser rellenados...!!")
    }

    e.currentTarget.reset();

}
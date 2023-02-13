const colorValidation = document.querySelector('#validation-input');
const validationAll = Number(colorValidation.getAttribute('data-lenght'));

colorValidation.addEventListener('blur', (color)=>{
    if(color.currentTarget.value.length === validationAll){
        color.currentTarget.classList.add("valid")
        color.currentTarget.classList.remove("invalid")
    }else{
        color.currentTarget.classList.add("invalid")
    }
}
);
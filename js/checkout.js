// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var nameq = document.querySelector('.name');
var lastName = document.querySelector('.lastName');
var email = document.querySelector('.email');
var address = document.querySelector('.address');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  
var errorEmail = document.getElementById('errorEmail');

// Exercise 8
function validate() {
    // Validate fields entered by the user: name, phone, password, and email

    var inp = document.getElementsByTagName('input');

    // console.log(!/[a-zA-Z ]/.test(lastName.value) && lastName.value == null);

    if(!/^[a-zA-Z ]{3,}$/.test(lastName.value) && lastName.value != ""){
        lastName.className += " is-invalid";
        document.getElementById("errorLast").style.display = "block";
    }else{
        lastName.classList.remove("is-invalid");
        document.getElementById("errorLast").style.display = "none";
    }

    if(!/^[a-zA-Z ]{3,}$/.test(nameq.value) && nameq.value != ""){
        nameq.className += " is-invalid";
        errorName.style.display = "block";
    }else{
        nameq.classList.remove("is-invalid");
        errorName.style.display = "none";
    }

    if(!/[0-9]/.test(phone.value) && phone.value != ""){
        phone.className += " is-invalid";
        errorPhone.style.display = "block";
    }else{
        phone.classList.remove("is-invalid");
        errorPhone.style.display = "none";
    }

    if(!/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{4,8}$/.test(password.value) && password.value != ""){
        password.className += " is-invalid";
        errorPassword.style.display = "block";
    }else{
        password.classList.remove("is-invalid");
        errorPassword.style.display = "none";
    }

    if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email.value) && email.value != ""){
        email.className += " is-invalid";
        errorEmail.style.display = "block";
    }else{
        email.classList.remove("is-invalid");
        errorEmail.style.display = "none";
    }

    for(let i=0;i <= inp.length-1; i++){
        if(inp[i].value == null || inp[i].value.trim() == ""){
            inp[i].className += " is-invalid";
            document.getElementById("errorGeneral").style.display = "block";
        }else{
            document.getElementById("errorGeneral").style.display = "none";
        }

        if(inp[i].value.trim() <= 3){
            inp[i].className += " is-invalid";
            document.getElementById("errorGeneral2").style.display = "block";
        }else{
            document.getElementById("errorGeneral2").style.display = "none";
        }
    }
}
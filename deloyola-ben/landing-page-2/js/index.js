window.addEventListener('load', () => {

    const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const email = params.get('email');
    const phone = parseInt(params.get('phone'));
    const message = params.get('message');

    document.getElementById('name-result').innerHTML = name;
    document.getElementById('email-result').innerHTML = email;
    document.getElementById('phone-result').innerHTML = phone;
    document.getElementById('message-result').innerHTML = message;
});


function emailValidationSubs(){
    var form = document.getElementById('submit-form');
    
    var email = document.getElementById('email-subs').value;
    var text = document.getElementById('text-span');

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 

    if(email.match(pattern)){
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "Your Email Address is Valid."
        text.style.color = "#338d22"
    }else{
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Please Enter Valid Email Address."
        text.style.color = "#ff0000"
    }

    if(email === "" || email === null){
        form.classList.remove("valid")
        form.classList.remove("invalid")
        text.innerHTML = ""
        text.style.color = "#338d22"
    }
    
}

function emailValidation(){
    var form = document.getElementById('submitted-form');
    
    var email = document.getElementById('email').value;
    var text = document.getElementById('text');

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 

    if(email.match(pattern)){
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "Your Email Address is Valid."
        text.style.color = "#338d22"
    }else{
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Please Enter Valid Email Address."
        text.style.color = "#ff0000"
    }

    if(email === "" || email === null){
        form.classList.remove("valid")
        form.classList.remove("invalid")
        text.innerHTML = ""
        text.style.color = "#338d22"
    }
    
}
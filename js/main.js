let tmp1 = false, tmp2 = false, tmp3 = false;
const formel = document.querySelector('.form-sign');
formel.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formel);
    const data = Object.fromEntries(formData);
    fetch('https://goldblv.com/api/hiring/tasks/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(data => console.log(data))
        .then(window.location.href="loginsuccess.html")
        .catch(error => console.log(error))
    
    let newData = formData.get('email')
    localStorage.setItem('form',newData);
});


// function to validation user name 
function validationUserName()
{
    var form = document.querySelector('.form-sign');
    var username = document.getElementById('username').value;
    var text_user = document.getElementById('text_user');
    var pattern1 = /^([a-zA-Z]+)(\d+)([a-zA-Z]{1,})$/;
    
    if ( username.match(pattern1) )
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text_user.innerHTML = "Your User name  is valid ";
        text_user.style.color = "green";
        tmp1 = true;
    }
    else
    {
        form.classList.add("invalid");
        form.classList.remove("valid");
        text_user.innerHTML = "Please enter valid user name ";
        text_user.style.color = "red";
    }
    if (username == "")
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text_email.innerHTML = "";
        text_email.style.color = "white";
        
    }
}
// function to validation email address
function validationEmail()
{
    var form = document.querySelector('.form-sign');
    var email = document.getElementById('email').value;
    var text_email = document.getElementById('text_email');
    var pattern = /^([a-zA-Z\d]+)@([a-z]+)\.([a-z]{2,3})$/;
    
    if (email.match(pattern))
    {
        if (email.match('gmail') || email.match('yahoo'))
        {
            if (email.match('com'))
            {
                form.classList.add("valid");
                form.classList.remove("invalid");
                text_email.innerHTML = "Your mail is valid ";
                text_email.style.color = "green";
                tmp2 = true;
            }
        }
    }
    else
    {
        form.classList.add("invalid");
        form.classList.remove("valid");
        text_email.innerHTML = "Please enter valid email address ";
        text_email.style.color = "red";
    }
    if (email == "")
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text_email.innerHTML = "";
        text_email.style.color = "white";
        
    }
}
// function to validation email address
function validationPassword()
{
    var form = document.querySelector('.form-sign');
    var password = document.getElementById('pwd').value;
    var text_password = document.getElementById('text_password');
    var pattern =  /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!?])[a-zA-Z0-9!?]{8,}$/;
    
    if (password.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text_password.innerHTML = "Your password is valid ";
        text_password.style.color = "green";
        tmp3 = true;
    }
    else
    {
        form.classList.add("invalid");
        form.classList.remove("valid");
        text_password.innerHTML = "Please enter valid password ";
        text_password.style.color = "red";
    }
    if (email == "")
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text_password.innerHTML = "";
        text_password.style.color = "white";
        
    }
}


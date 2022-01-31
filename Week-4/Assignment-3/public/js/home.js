// Login
document.querySelector('#login_form').addEventListener('submit', (event) => {
    event.preventDefault();
    let input_email = document.querySelector('.input_email_login').value;
    let input_password = document.querySelector('.input_password_login').value;
    console.log(input_email, input_password);

    // call api 
    fetch('/loginUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: `${input_email}`, 
            password: `${input_password}`             
        })
    }).then((response) => {
        console.log(response);
        if(response.status !== 200){
            return response.json();
        }
        else{
            window.location.href='http://localhost:3000/member';
        }
    }).then((data) =>{
        if(data){
            console.log(data);
            alert(data.msg);
        }
    }).catch((err) => {
        console.log(err);
    })
});

// Signup
document.querySelector('#signup_form').addEventListener('submit', (event) => {
    event.preventDefault();
    let input_username = document.querySelector('.input_username').value;
    let input_email = document.querySelector('.input_email').value;
    let input_password = document.querySelector('.input_password').value;
    console.log(input_username, input_email, input_password);

    // call api
    fetch('/createUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: `${input_username}`, 
            email: `${input_email}`, 
            password: `${input_password}`             
        })
    }).then((response) => {
        console.log(response);
        if(response.status !== 200){
            return response.json();
        }
        else{
            window.location.href='http://localhost:3000/member';
        }
    }).then((data) => {
        if(data){
            console.log(data);
            alert(data.msg);
        }
        // alert(data.msg);
    }).catch((err) => {
        console.log(err)
    })
})

//     let xhr = new XMLHttpRequest();
//     let data = { 
//         username: `${input_username}`, 
//         email: `${input_email}`, 
//         password: `${input_password}` 
//     };
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4 && xhr.status === 200){
//             console.log(xhr.responseText);
//             var result = document.getElementById("result");
//             result.textContent = `${xhr.responseText}`;
//         }        
//     }
//     xhr.open('POST', 'http://localhost:3000/createUser');
//     xhr.send(JSON.stringify(data));
//     console.log('submit');
// })


let toggleToLogin = document.getElementById('signupfirst');
let toggleToSignup = document.getElementById('toLogin');

toggleToLogin.addEventListener('click',toggleBtn);
toggleToSignup.addEventListener('click',toggleBtn);

function toggleBtn() {
    let login_content = document.getElementsByClassName('content-login')[0];
    let signup_content = document.getElementsByClassName('content-signup')[0];

    if(login_content.style.display == 'none'){
        login_content.style.display = 'block';
        signup_content.style.display = 'none';
    }
    else{
        login_content.style.display = 'none';
        signup_content.style.display = 'block';
    }
}
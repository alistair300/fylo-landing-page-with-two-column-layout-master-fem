const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();
    const emailValue = email.value;

    if (!validateEmail(emailValue)) {
        form.classList.add('error');
    } else {
        form.classList.remove('error');
    }
});

// // email 2
// const form2 = document.getElementById('form-2');
// const email2 = document.getElementById('email-2');

// form2.addEventListener('submit', e => {
//     e.preventDefault();
//     const email2Value = email2.value;

//     if (!validateEmail(email2Value)) {
//         form.classList.add('error');
//     } else {
//         form.classList.remove('error');
//     }
// });

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
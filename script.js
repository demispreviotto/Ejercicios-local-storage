const fname = document.getElementById('fname');
const email = document.getElementById('email');
const message = document.getElementById('message');
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const p1 = document.getElementById('p1');

let formInfo = JSON.parse(localStorage.getItem('formInfo')) || [];

if (formInfo[0] !== "") {
    for (let i = 0; i < formInfo.length; i++) {
        p1.innerHTML +=
            `<ul>
                <li>First Name: ${formInfo[i].fname}</li>
                <li>Email:${formInfo[i].email}</li>
                <li>Message: ${formInfo[i].message}</li>
            </ul>`
    }
}

let printForm = (e) => {
    e.preventDefault();
    p1.innerHTML = ''
    // formInfo = localStorage
    // console.log('hola')
    formInfo.push(
        {
            'fname': fname.value,
            'email': email.value,
            'message': message.value
        }
    )
    console.log(formInfo);
    localStorage.setItem('formInfo', JSON.stringify(formInfo));
    let persons = JSON.parse(localStorage.getItem("formInfo"));
    console.log(persons[0].fname)
    // p1.innerHTML = `First Name: ${persons[0].fname}
    // Email:${persons[0].email}
    // Message: ${persons[0].message}`;

    for (let i = 0; i < persons.length; i++) {
        p1.innerHTML +=
            `<ul>
                <li>First Name: ${persons[i].fname}</li>
                <li>Email:${persons[i].email}</li>
                <li>Message: ${persons[i].message}</li>
            </ul>`
    }

}

let clearForm = (e) => {
    e.preventDefault
    localStorage.clear();
}

btn.addEventListener('click', printForm)
btn2.addEventListener('click', clearForm)
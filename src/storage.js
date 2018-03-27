console.log('I am storage.js!');

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded. Ready to go!");
    setEventOnAddUserButton();
});

const addUserToStorage = (name, lastName, age) => {
    const user = {
        name: name,
        lastName: lastName,
        age: age
    };
    let users = JSON.parse(localStorage.getItem('users'));
    if (!users) {
        users = [];
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

const addUser = (name, lastName, age) => {
    const tbody = document.querySelector('#users tbody');
    const user = document.createElement('tr');
    const userName = document.createElement('td');
    userName.innerText = name;
    const userLastName = document.createElement('td');
    userLastName.innerText = lastName;
    const userAge = document.createElement('td');
    userAge.innerText = age;
    user.appendChild(userName);
    user.appendChild(userLastName);
    user.appendChild(userAge);

    tbody.appendChild(user);

    addUserToStorage(name, lastName, age);
}

const setEventOnAddUserButton = () => {
    const button = document.querySelector('#new-user button');
    const noUsers = document.querySelector('#no-user-message')
    button.addEventListener('click', (event) => {
        const name = document.querySelector('input[name="name"]').value;
        const lastName = document.querySelector('input[name="last-name"]').value;
        const age = document.querySelector('input[name="age"]').value;
        addUser(name, lastName, age);
    });
}
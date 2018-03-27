console.log('I am playground.js!');

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded. Ready to go!");
    textarea();
    chatWithMyself();
});

const textarea = () => {
    const ta = document.querySelector('textarea');
    ta.addEventListener('keypress', (event) => {
        console.log(event.key);
    });
}

const chatWithMyself = () => {
    const ta = document.querySelector('textarea');
    const userName = document.querySelector('#user-name');
    ta.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            ta.nextElementSibling.innerHTML += '<b>' + userName.value + ': ' + '</b>' + ta.value + '<br>' /*+ '\n'*/ ;
            //ta.nextElementSibling.appendChild(document.createElement('br'));
            ta.value = '';
            event.preventDefault();
        }
    });
}
const handler = (event) => {};
element.addEventListener('click', handler); // dodawania nasluchu
element.removeEventListener('click', handler); // usuwanie nasluchu

// nasluch z funkcja anonimowa - nie da sie go zdjac
element.addEventListener('change', (e) => {

});


setInterval(() => {
    const a = document.querySelector('a');
    a.parentElement.removeChild(a);
}, 1000);


setTimeout(() => {}, 1000);
setInterval(() => {}, 1000);
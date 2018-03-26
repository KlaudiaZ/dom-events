console.log('I am b.js!');

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded. Ready to go!");
    //giveButtonId();
    //howManyTimesClicked();
    //deleteSameIdButtons();
    //addNewDiv();
    //addNewDivAndClearInput();
    buttonCeption();
});

// B.1 - Za każdym kliknięciem na dowolny przycisk dopisz do diva clicked-info data-id kliknietego przycisku.

const giveButtonId = () => {
    const buttonA = document.querySelector('button[data-id=A]');
    const buttonB = document.querySelector('button[data-id=B]');
    const buttonC = document.querySelector('button[data-id=C]');
    const divWithButtonInfo = document.querySelector('#clicked-info');
    buttonA.addEventListener("click", (event) => {
        divWithButtonInfo.innerText = buttonA.dataset.id;
    });
    buttonB.addEventListener("click", (event) => {
        divWithButtonInfo.innerText = buttonB.dataset.id;
    });
    buttonC.addEventListener("click", (event) => {
        divWithButtonInfo.innerText = buttonC.dataset.id;
    });
}

// B.2 - Zapisuj ile razy uzytkownik klika w dany przycisk i pokaz taka infomacje w formacie A: 3, B: 2, C: 0, gdzie
// format odpowiada {data-id przycisku}: {ilosc klikniec}

const howManyTimesClicked = () => {
    const buttonA = document.querySelector('button[data-id=A]');
    const buttonB = document.querySelector('button[data-id=B]');
    const buttonC = document.querySelector('button[data-id=C]');
    const divWithButtonInfo = document.querySelector('#clicked-info');
    divWithButtonInfo.innerText = '';
    divWithButtonInfo.appendChild(document.createElement("span"));
    let A = 0;
    document.querySelectorAll('span')[0].innerText = 'A: ' + A + ' ';
    divWithButtonInfo.appendChild(document.createElement("span"));
    let B = 0;
    document.querySelectorAll('span')[1].innerText = 'B: ' + B + ' ';
    divWithButtonInfo.appendChild(document.createElement("span"));
    let C = 0;
    document.querySelectorAll('span')[2].innerText = 'C: ' + C + ' ';
    buttonA.addEventListener("click", (event) => {
        A++;
        document.querySelectorAll('span')[0].innerText = 'A: ' + A + ' ';
    });
    buttonB.addEventListener("click", (event) => {
        B++;
        document.querySelectorAll('span')[1].innerText = 'B: ' + B + ' ';
    });
    buttonC.addEventListener("click", (event) => {
        C++;
        document.querySelectorAll('span')[2].innerText = 'C: ' + C + ' ';
    });
}

// B.3 - dodaj na stronie wiecej przyciskow. Po kliknieciu w przycisk o danym data-id wszystkie przyciski z tym data-id
// maja zniknac ze strony

const deleteSameIdButtons = () => {
    const buttonsWithIdA = document.querySelectorAll('button[data-id=A]');
    const buttonsWithIdB = document.querySelectorAll('button[data-id=B]');
    const buttonsWithIdC = document.querySelectorAll('button[data-id=C]');
    const body = document.querySelector('body');
    const buttonA0 = document.querySelectorAll('button[data-id=A]')[0];
    buttonA0.addEventListener("click", (event) => {
        buttonsWithIdA.forEach((e) => {
            body.removeChild(document.querySelector('button[data-id=A]'));
        });
    });
    const buttonA1 = document.querySelectorAll('button[data-id=A]')[1];
    buttonA1.addEventListener("click", (event) => {
        buttonsWithIdA.forEach((e) => {
            body.removeChild(document.querySelector('button[data-id=A]'));
        });
    });
    const buttonA2 = document.querySelectorAll('button[data-id=A]')[2];
    buttonA2.addEventListener("click", (event) => {
        buttonsWithIdA.forEach((e) => {
            body.removeChild(document.querySelector('button[data-id=A]'));
        });
    });
    const buttonB0 = document.querySelectorAll('button[data-id=B]')[0];
    buttonB0.addEventListener("click", (event) => {
        buttonsWithIdB.forEach((e) => {
            body.removeChild(document.querySelector('button[data-id=B]'));
        });
    });
    const buttonB1 = document.querySelectorAll('button[data-id=B]')[1];
    buttonB1.addEventListener("click", (event) => {
        buttonsWithIdB.forEach((e) => {
            body.removeChild(document.querySelector('button[data-id=B]'));
        });
    });
    const buttonB2 = document.querySelectorAll('button[data-id=B]')[2];
    buttonB2.addEventListener("click", (event) => {
        buttonsWithIdB.forEach((e) => {
            body.removeChild(document.querySelector('button[data-id=B]'));
        });
    });
    const buttonC0 = document.querySelectorAll('button[data-id=C]')[0];
    buttonC0.addEventListener("click", (event) => {
        buttonsWithIdC.forEach((e) => {
            body.removeChild(document.querySelector('button[data-id=C]'));
        });
    });
    const buttonC1 = document.querySelectorAll('button[data-id=C]')[1];
    buttonC1.addEventListener("click", (event) => {
        buttonsWithIdC.forEach((e) => {
            body.removeChild(document.querySelector('button[data-id=C]'));
        });
    });
    const buttonC2 = document.querySelectorAll('button[data-id=C]')[2];
    buttonC2.addEventListener("click", (event) => {
        buttonsWithIdC.forEach((e) => {
            body.removeChild(document.querySelector('button[data-id=C]'));
        });
    });
}

// B.4 - po kliknieciu w przycisk o id = add dodac nowy div z tekstem wpisanym w input

const addNewDiv = () => {
    const add = document.querySelector('#add');
    const input = document.querySelector('input');
    const body = document.querySelector('body');
    add.addEventListener('click', (event) => {
        body.appendChild(document.createElement('div'));
        body.lastElementChild.innerText = input.value;
    });
}

// B.5 - rozszerzenie B.4 - czysicic inputa po kazdym przycisnieciu przycisku

const addNewDivAndClearInput = () => {
    const add = document.querySelector('#add');
    const input = document.querySelector('input');
    const body = document.querySelector('body');
    add.addEventListener('click', (event) => {
        body.appendChild(document.createElement('div'));
        body.lastElementChild.innerText = input.value;
        input.value = '';
    });
}

// B.6 - po kliknieciu w dowolny przycisk A, B, C ma pojawic sie nowy przycisk i ma rowniez obslugiwac kliniecia
// np. klikamy w przycisk C - pojawia sie nowy przycisk C, po kliknieciu w niego znowu pojawia sie przycisk C

let A = 0;
const addAnotherButtonA = () => {
    const body = document.querySelector('body');
    body.appendChild(document.createElement('button'));
    body.lastElementChild.setAttribute("id", ("A" + A));
    body.lastElementChild.innerText = "A";
    document.getElementById('A' + A).addEventListener('click', (event) => {
        A++
        return addAnotherButtonA();
    });
}

let B = 0;
const addAnotherButtonB = () => {
    const body = document.querySelector('body');
    body.appendChild(document.createElement('button'));
    body.lastElementChild.setAttribute("id", ("B" + B));
    body.lastElementChild.innerText = "B";
    document.getElementById('B' + B).addEventListener('click', (event) => {
        B++
        return addAnotherButtonB();
    });
}

let C = 0;
const addAnotherButtonC = () => {
    const body = document.querySelector('body');
    body.appendChild(document.createElement('button'));
    body.lastElementChild.setAttribute("id", ("C" + C));
    body.lastElementChild.innerText = "C";
    document.getElementById('C' + C).addEventListener('click', (event) => {
        C++
        return addAnotherButtonC();
    });
}

const buttonCeption = () => {
    const buttonA = document.querySelector('button[data-id=A]');
    const buttonB = document.querySelector('button[data-id=B]');
    const buttonC = document.querySelector('button[data-id=C]');
    buttonA.addEventListener('click', (event) => {
        A++;
        return addAnotherButtonA();
    });
    buttonB.addEventListener('click', (event) => {
        B++;
        return addAnotherButtonB();
    });
    buttonC.addEventListener('click', (event) => {
        C++;
        return addAnotherButtonC();
    });
}
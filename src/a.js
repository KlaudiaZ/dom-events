console.log('I am a.js!');

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded. Ready to go!");
    countEverySecond();
    //clock();
    //clockSpedUp(5);
    //clockSpedUpAndLocked(1, 1);
    //clockSpedUpAndLocked2(10, 1);
    button();
    stopTimer(clock());
});

// A.1 - Stworz licznik ktory nalicza numery co 1 sekunde i wstawia liczbe to html

const countEverySecond = () => {
    const counter = document.querySelector('#counter');
    let i = 0;
    const countSeconds = setInterval(() => {
        i++;
        counter.innerText = i;
    }, 1000);
}

// A.2 - Stworz minutnik ktory posiada strukture 00:00 - inkrementuje sekundy, pokazuje ile uplynelo minut i sekund

const clock = () => {
    const timer = document.querySelector('#timer');
    let s = 0;
    let m = 0;
    let s0 = 0;
    let m0 = 0;
    return setInterval(() => {
            s++;
            if (s >= 10) {
                s0 = '';
            } else {
                s0 = 0;
            }
            if (m >= 10) {
                m0 = '';
            } else {
                m0 = 0;
            }
            if (s === 60) {
                m++;
                s = 0;
            }
            timer.innerText = ' ' + m0 + m + ':' + s0 + s;
        },
        100)
}

// A.3 - Stworz funkcje ktora na wejsciu dostaje co ile minutnik ma sie inkrementowac - po wywolaniu

const clockSpedUp = (multiplier) => {
    document.querySelector('section').appendChild(document.createElement('span'));
    document.querySelector('section').lastElementChild.setAttribute("id", "timer2");
    const timer = document.querySelector('#timer2');
    let s = 0;
    let m = 0;
    let s0 = 0;
    let m0 = 0;
    const countSeconds = setInterval(() => {
        s++;
        if (s >= 10) {
            s0 = '';
        } else {
            s0 = 0;
        }
        if (m >= 10) {
            m0 = '';
        } else {
            m0 = 0;
        }
        if (s === 60) {
            m++;
            s = 0;
        }
        timer.innerText = ' ' + m0 + m + ':' + s0 + s;
    }, 1000 / multiplier)
}

// ma dodac do strony kolejny minutnik ktory inkrementuje zgodnie z zadanym argumentem
// A.4 - Dodaj mozliwość ustawienia maksymalnej liczby minutnika po ktorej minutnik ma sie zatrzymac

const clockSpedUpAndLocked = (multiplier, maxMinutes) => {
    document.querySelector('section').appendChild(document.createElement('span'));
    document.querySelector('section').lastElementChild.setAttribute("id", "timer3");
    const timer = document.querySelector('#timer3');
    let s = 0;
    let m = 0;
    let s0 = 0;
    let m0 = 0;
    const countSeconds = setInterval(() => {
        s++;
        if (s >= 10) {
            s0 = '';
        } else {
            s0 = 0;
        }
        if (m >= 10) {
            m0 = '';
        } else {
            m0 = 0;
        }
        if (s === 60) {
            m++;
            s = 0;
        }
        timer.innerText = ' ' + m0 + m + ':' + s0 + s;
    }, 1000 / multiplier);
    setTimeout(() => {
        clearInterval(countSeconds);
    }, (maxMinutes * 60000));
}

// A.5 - Dodaj mozliwosc ustawienia czasu dzialania minutnika po ktorym minutnik stanie

const clockSpedUpAndLocked2 = (multiplier, maxMinutes) => {
    document.querySelector('section').appendChild(document.createElement('span'));
    document.querySelector('section').lastElementChild.setAttribute("id", "timer4");
    const timer = document.querySelector('#timer4');
    let s = 0;
    let m = 0;
    let s0 = 0;
    let m0 = 0;
    const countSeconds = setInterval(() => {
        s++;
        if (s >= 10) {
            s0 = '';
        } else {
            s0 = 0;
        }
        if (m >= 10) {
            m0 = '';
        } else {
            m0 = 0;
        }
        if (s === 60) {
            m++;
            s = 0;
        }
        timer.innerText = ' ' + m0 + m + ':' + s0 + s;
    }, 1000 / multiplier);
    setTimeout(() => {
        clearInterval(countSeconds);
    }, (maxMinutes * 60000 / multiplier));
}

// A.6 - Dodaj przycisk zatrzymujacy i uruchamiajacy minutnik

const button = () => {
    const timer = document.querySelector('#timer');
    timer.parentElement.appendChild(document.createElement('button'));
    document.querySelector('button').setAttribute("id", "button");
    const button = document.querySelector('#button');
    button.innerText = "Stop timer";
}

const stopTimer = (interval) => {
    const button = document.querySelector('#button');
    button.addEventListener('click', () => {
        clearInterval(interval);
    });
}
console.log('I am c.js!');

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded. Ready to go!");
    deleteItemFromListwithWindow();
    //deleteItemFromListV3()
    resetList();
});
// C.1 - obsluz klikniecie w przycisk Delete - usun element z listy

const deleteItemFromList = () => {
    const list = document.querySelectorAll('li');
    const buttons = document.querySelectorAll('a');
    list.forEach((e, index) => {
        e.firstElementChild.setAttribute("id", index);
    });
    buttons.forEach((e) => {
        e.addEventListener('click', (event) => {
            document.querySelector('ul').removeChild(e.parentElement);
        });
    });
}

// C.2 - obsluz przycisk reset - ma wstawic ponownie wszystkie elementy jak bylo na poczatku

const resetList = () => {
    const reset = document.querySelector('button');
    const newList = document.querySelector('ul').cloneNode(true);
    reset.addEventListener('click', (event) => {
        document.querySelector('ul').innerHTML = newList.innerHTML;
    });
}

// C.3 - wykonaj zadanie C.1 ale naloz event handler na li

const deleteItemFromListV2 = () => {
    const list = document.querySelectorAll('li');
    list.forEach((element) => {
        element.addEventListener('click', (event) => {
            if (event.target === element.lastElementChild) {
                element.parentElement.removeChild(element);
            }
        });
    })
}

// C.4 - wykonaj zadanie z C.3 ale naloz handler na body

const deleteItemFromListV3 = () => {
    const body = document.querySelector('body');
    body.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            body.firstElementChild.removeChild(event.target.parentElement);
        }
    });
}

// C.5 - przed usunieciem pokaz okienko dialogowe z id modal, zeby je pokazac ustaw je jako widoczne
// czyli uzyj style.display = 'block', zeby schowac style.display = 'none'
// dodaj w okienku 2 przyciski jeden z Yes - po ktorym element jest usuniety a okienko schowane
// i No - po ktorym tylko okienko sie chowa

const deleteItemFromListwithWindow = () => { //fix
    const ul = document.querySelector('ul');
    let sportToDelete;
    ul.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            modal.style.display = "block";
            sportToDelete = e.target;
            removeOrNot();
        }
    });

    const removeOrNot = () => {
        const windowPopUp = document.getElementById("modal");
        windowPopUp.addEventListener('click', (e) => {
            e.target.dataset.decision === "yes" ?
                ul.removeChild(sportToDelete.parentElement) :
                modal.style.display = "none";
        });
    }
}



// C.6 - po kliknieciu Delete naloz klase .fade-out na element li oraz usun element z opoznieniem 1 sekundy
// uzyj setTimeout
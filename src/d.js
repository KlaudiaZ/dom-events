console.log('I am d.js!');

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded. Ready to go!");
    main();
});

// D.1 - Obsluz przycisk dodawania zadania - wartosc wpisana w textarea ma byc dodana do listy

const main = () => {
    const addTaskButton = document.getElementById('add-task');
    const textArea = document.getElementById('new-task');
    const list = document.querySelector('#list ul');
    const noTasks = document.getElementById('no-tasks');
    let numberOfTasks = 0;
    let tasksDone = 0;
    let checkboxId = 0;

    const addNewElements = () => {
        checkboxId++;
        list.appendChild(document.createElement('li'));
        list.lastElementChild.innerText = textArea.value + '\n';
        list.lastElementChild.appendChild(document.createElement('a'));
        list.lastElementChild.lastElementChild.innerText = "Delete task";
        list.lastElementChild.appendChild(document.createElement('br'));
        list.lastElementChild.appendChild(document.createElement('input'));
        list.lastElementChild.lastElementChild.setAttribute("type", "checkbox");
        list.lastElementChild.lastElementChild.setAttribute("id", "checkbox" + checkboxId);
        list.lastElementChild.appendChild(document.createElement('a'));
        list.lastElementChild.lastElementChild.innerText = "^";
        list.lastElementChild.appendChild(document.createElement('br'));
        list.lastElementChild.appendChild(document.createElement('a'));
        list.lastElementChild.lastElementChild.innerText = "Edit";
    }


    const addNewTask = () => {
        addTaskButton.addEventListener('click', (e) => {
            if (document.getElementById('no-tasks')) {
                list.removeChild(list.firstElementChild);
            }
            numberOfTasks++;
            addNewElements();
            textArea.value = '';
            showTaskCount();
            crossCompletedTasks(checkboxId);
        });
    }

    const removeTask = () => {
        list.addEventListener('click', (e) => {
            if (e.target.innerText === 'Delete task') {
                list.removeChild(e.target.parentElement);
                numberOfTasks--;
                showTaskCount();
            }
            if (list.childElementCount === 0) {
                list.appendChild(noTasks);
            }
        });
    }

    const showTaskCount = () => {
        list.parentElement.querySelector('p').innerText = "Task count: " + tasksDone + '/' + numberOfTasks;
    }

    const crossCompletedTasks = (id) => {
        const checkboxes = document.getElementById('checkbox' + id);
        checkboxes.addEventListener('click', (e) => {
            if (e.target.checked) {
                e.target.parentElement.setAttribute("class", "task-done");
                tasksDone++;
                showTaskCount();
            } else {
                e.target.parentElement.removeAttribute('class');
                tasksDone--;
                showTaskCount();
            }
        });
    }

    const moveElementUp = () => {
        list.addEventListener('click', (e) => {
            if (e.target.innerText === '^') {
                list.insertBefore(e.target.parentElement, list.firstElementChild);
            }
        });
    }

    const editElement = () => {
        let cache;
        let listLine;

        const clickEdit = () => {
            list.addEventListener('click', (e) => {
                if (e.target.innerText === 'Edit') {
                    listLine = e.target.parentElement;
                    cache = listLine.firstChild.textContent;
                    listLine.firstChild.textContent = '';
                    createEditingField();
                    buttonsBehaviour();
                }
            })
        }

        const createEditingField = () => {
            listLine.appendChild(document.createElement('button'));
            listLine.insertBefore(listLine.lastElementChild, listLine.firstElementChild);
            listLine.firstElementChild.setAttribute("id", "edit-cancel");
            document.getElementById('edit-cancel').innerText = "Cancel"
            listLine.appendChild(document.createElement('button'));
            listLine.insertBefore(listLine.lastElementChild, listLine.firstElementChild);
            listLine.firstElementChild.setAttribute("id", "edit-save");
            document.getElementById('edit-save').innerText = "Save"
            listLine.appendChild(document.createElement('textarea'));
            listLine.insertBefore(listLine.lastElementChild, listLine.firstElementChild);
            listLine.firstElementChild.setAttribute("id", "edit-input");
            listLine.appendChild(document.createElement('br'));
            listLine.insertBefore(listLine.lastElementChild, document.getElementById('edit-save'))
        }

        const removeEditingField = () => {
            listLine.removeChild(listLine.firstElementChild);
            listLine.removeChild(listLine.firstElementChild);
            listLine.removeChild(listLine.firstElementChild);
            listLine.removeChild(listLine.firstElementChild);
        }

        const buttonsBehaviour = () => {
            const clickCancel = () => {
                const cancelEdit = document.getElementById('edit-cancel');
                cancelEdit.addEventListener('click', (e) => {
                    removeEditingField();
                    listLine.firstChild.textContent = cache;
                });
            }

            const clickSave = () => {
                const saveEdit = document.getElementById('edit-save');
                const inputEdit = document.getElementById('edit-input');
                let editCache;
                saveEdit.addEventListener('click', (e) => {
                    editCache = inputEdit.value;
                    listLine.firstChild.textContent = editCache;
                    removeEditingField();
                });
            }

            clickCancel();
            clickSave();
        }

        clickEdit();
    }

    addNewTask();
    removeTask();
    moveElementUp();
    editElement();
}

// D.2 - Element li o id = no-task powinien zniknac jak zadanie zostaje dodane

//Already done

// D.3 - Textarea new-task powinien miec czyszczona zawartosc po dodaniu zadania

//Also done

// D.4 - Dodaj link (znacznik a) do zadania na liscie i usun zadanie z listy po jego kliknieciu

//Done

// D.5 - Pokaz w aplikacji licznik zadań

//Done

// D.6 - Dodaj do zadania na liście znacznik checkbox (input o type checkbox) - po kliknieciu
// w checkbox zadanie ma otrzymac atrybut class = task-done (powinno byc przekreslone)
// po odliknieciu zadanie powinno znowu nie byc przekreslone

//Done

// D.7 - W liczniku zadań uwzglednij zadania zrobione, pokaż licznik w postaci {zrobione}/{wszystkie}

//Done

// D.8 - po usunięciu wszystkich zadań id=no-task powinien pojawić się ponownie na stronie z informacją, że nie ma zadan

//Done

// D.9 - dodaj link ^ ktory pozwala na przesuniecie zadania w gore listy

//Done

// D.10 - dodaj link Edit - pozwala edytowac istniejace zadanie - w miejscu tekstu zadania pojawia sie textarea i pzycisk 
// zapisz i anuluj
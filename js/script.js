// lista de tareas
let input = document.getElementById("input");
let div = document.getElementById("div");

function addTarea() {
    let ul = document.getElementById("lista");
    let li = document.createElement('li');
    let btn = document.createElement('button');
    let newUl = document.createElement('ul');
    let child = "";

    if (input.value != "") {

        if (ul == null) {
            newUl.setAttribute("id", "lista");
            div.appendChild(newUl);
            newUl.appendChild(li);
            child = newUl.children;
        } else {
            ul.appendChild(li);
            child = ul.children;
        }

        li.textContent = input.value;
        li.appendChild(btn);
        btn.setAttribute("class", "delete");
        btn.textContent = "Eliminar";
        input.value = "";
    } else {
        alert("Introduce algún valor en el input.")
    }

    let btnDel = document.getElementsByClassName("delete");
    btnDel = Array.from(btnDel);

    btnDel.forEach((button, index) => {
        button.addEventListener('click', () => {
            button.parentElement.remove();
            btnDel.splice(index, 1);
        });
    });
}
const inputbox = document.querySelector(".inputfield input");
const addbtn = document.querySelector(".inputfield button");
const todolist = document.querySelector(".todolist");
const deleteallbtn = document.querySelector(".footer button");


inputbox.onkeyup = () => {
    let userdata = inputbox.value;
    if (userdata.trim() != 0) {
        addbtn.classList.add("active");
    } else {
        addbtn.classList.remove("active");

    }
}

showtasks();



addbtn.onclick = () => {
    let userdata = inputbox.value;

    let getlocalstorage = localStorage.getItem("NEW TODO");

    if (getlocalstorage == null) {
        listarr = [];

    } else {
        listarr = JSON.parse(getlocalstorage);
    }

    listarr.push(userdata);
    localStorage.setItem("NEW TODO", JSON.stringify(listarr));

    showtasks();
    addbtn.classList.remove("active");

}



function showtasks() {
    let getlocalstorage = localStorage.getItem("NEW TODO");

    if (getlocalstorage == null) {
        listarr = [];

    } else {
        listarr = JSON.parse(getlocalstorage);
    }

    let newLitag = "";
    listarr.forEach((element, index) => {
        newLitag += `<li> ${element} <span onclick = "deletetask(${index})"> <i class="fa-solid fa-trash"></i> </span> </li>`;

    });

    todolist.innerHTML = newLitag;
}




function deletetask(index) {
    let getlocalstorage = localStorage.getItem("NEW TODO");
    listarr = JSON.parse(getlocalstorage);
    listarr.splice(index, 1);

    localStorage.setItem("NEW TODO", JSON.stringify(listarr));
    showtasks();

}






deleteallbtn.onclick = () => {
    listarr = [];
    localStorage.setItem("NEW TODO", JSON.stringify(listarr));
    showtasks();
}
"use strict";
const animalCollection = [
    { name: "Малпа", sound: "./sounds/m.mp3" },
    { name: "Чыюк", sound: "./sounds/p.mp3" },
];
const dog = { name: "Сабака", sound: "./sounds/s.mp3" };
// const dog: any = { biy: "ff", sound: "any_link" };
function checkAnimal(obj) {
    return "name" in obj && "sound" in obj;
}
const container = document.querySelector("#animCont");
//==> Вывод животных + добавление нового
const addAnimal = (animColletion, newAnimal) => {
    if (checkAnimal(newAnimal)) {
        animColletion.push(newAnimal);
        animColletion.forEach((el, i) => {
            const block = `<p class='p${i + 1}'>${el.name}</p> <div class='buttons'> <div class='sound sound${i + 1}'> </div> <div class='edit edit${i + 1}'> </div> <div class='delete delete${i + 1}'> </div> </div>`;
            const newAnm = document.createElement("div");
            newAnm.classList.add(`anim${i + 1}`);
            newAnm.innerHTML = block;
            if (typeof container != null)
                container === null || container === void 0 ? void 0 : container.append(newAnm);
            const sd = document.querySelector(`.sound${i + 1}`);
            sd.addEventListener("click", () => {
                makeSound(el);
            });
            const ed = document.querySelector(`.edit${i + 1}`);
            ed.addEventListener("click", () => {
                editAnimal(el);
            });
            const de = document.querySelector(`.delete${i + 1}`);
            de.addEventListener("click", () => {
                deleteAnimal(el);
            });
        });
    }
    else {
        console.error("Жывёла не адпавядае патрабаванай структуры!");
    }
};
//==> Вызов функции вывода животных по нажатию
const addAnimals = document.querySelector(".addAnim");
addAnimals.addEventListener("click", () => {
    addAnimal(animalCollection, dog);
});
//==> Функция запуска звука
const makeSound = (animal) => {
    if (checkAnimal(animal)) {
        animal = animal;
        const audioAn = new Audio(animal.sound);
        audioAn.play();
    }
    else {
        console.error("Жывёла не адпавядае патрабаванай структуры!");
    }
};
//==> Функция редактирования животного
const editAnimal = (animal) => {
    if (checkAnimal(animal)) {
        animal = animal;
        if (animal.name === "Сабака") {
            const an3 = document.querySelector(".p3");
            const anim3 = document.querySelector(".anim3");
            const newName = prompt("Увядзіце новую назву жывёлы: ");
            if (typeof newName == "string" && newName.length >= 0) {
                an3.remove();
                const a = document.createElement("p");
                a.innerText = newName;
                a.classList.add("s");
                anim3.prepend(a);
                animalCollection[2].name = a.innerText;
            }
            else {
                alert("Вы нічога не ўвялі, таму жывёла застаецца");
            }
        }
        if (animal.name === "Малпа") {
            const an3 = document.querySelector(".p1");
            const anim3 = document.querySelector(".anim1");
            const newName = prompt("Увядзіце новую назву жывёлы: ");
            if (typeof newName == "string" && newName.length >= 0) {
                an3.remove();
                const a = document.createElement("p");
                a.innerText = newName;
                a.classList.add("m");
                anim3.prepend(a);
                animalCollection[0].name = a.innerText;
            }
            else {
                alert("Вы нічога не ўвялі, таму жывёла застаецца");
            }
        }
        if (animal.name === "Чыюк") {
            const an3 = document.querySelector(".p2");
            const anim3 = document.querySelector(".anim2");
            const newName = prompt("Увядзіце новую назву жывёлы: ");
            if (typeof newName == "string" && newName.length >= 0) {
                an3.remove();
                const a = document.createElement("p");
                a.innerText = newName;
                a.classList.add("p");
                anim3.prepend(a);
            }
            else {
                alert("Вы нічога не ўвялі, таму жывёла застаецца");
            }
        }
    }
    else {
        console.error("Жывёла не адпавядае патрабаванай структуры!");
    }
};
//==> Функция удаления животного
const deleteAnimal = (animal) => {
    if (checkAnimal(animal)) {
        animal = animal;
        const num = animalCollection.indexOf(animal);
        console.log(num);
        const anim3 = document.querySelector(`.anim${num + 1}`);
        anim3.remove();
    }
    else {
        console.error("Жывёла не адпавядае патрабаванай структуры!");
    }
};

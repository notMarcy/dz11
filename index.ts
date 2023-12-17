interface Animal {
  name: string;
  sound: string;
}
const animalCollection: Animal[] = [
  { name: "Малпа", sound: "./sounds/m.mp3" },
  { name: "Чыюк", sound: "./sounds/p.mp3" },
];

const dog: Animal = { name: "Сабака", sound: "./sounds/s.mp3" };
// const dog: any = { biy: "ff", sound: "any_link" };

function checkAnimal(obj: any): boolean {
  return "name" in obj && "sound" in obj;
}
const container = document.querySelector("#animCont") as HTMLElement;

//==> Вывод животных + добавление нового

const addAnimal = (animColletion: Animal[], newAnimal: any): void | never => {
  if (checkAnimal(newAnimal)) {
    animColletion.push(newAnimal);
    animColletion.forEach((el: Animal, i: number) => {
      const block: string = `<p class='p${i + 1}'>${
        el.name
      }</p> <div class='buttons'> <div class='sound sound${
        i + 1
      }'> </div> <div class='edit edit${
        i + 1
      }'> </div> <div class='delete delete${i + 1}'> </div> </div>`;
      const newAnm: HTMLElement = document.createElement("div");
      newAnm.classList.add(`anim${i + 1}`);
      newAnm.innerHTML = block;
      if (typeof container != null) container?.append(newAnm);
      const sd = document.querySelector(`.sound${i + 1}`) as HTMLElement;
      sd.addEventListener("click", () => {
        makeSound(el);
      });
      const ed = document.querySelector(`.edit${i + 1}`) as HTMLElement;
      ed.addEventListener("click", () => {
        editAnimal(el);
      });
      const de = document.querySelector(`.delete${i + 1}`) as HTMLElement;
      de.addEventListener("click", () => {
        deleteAnimal(el);
      });
    });
  } else {
    console.error("Жывёла не адпавядае патрабаванай структуры!");
  }
};

//==> Вызов функции вывода животных по нажатию

const addAnimals = document.querySelector(".addAnim") as HTMLElement;

addAnimals.addEventListener("click", (): void => {
  addAnimal(animalCollection, dog);
});

//==> Функция запуска звука

const makeSound = (animal: any): void | never => {
  if (checkAnimal(animal)) {
    animal = animal as Animal;
    const audioAn: HTMLAudioElement = new Audio(animal.sound);
    audioAn.play();
  } else {
    console.error("Жывёла не адпавядае патрабаванай структуры!");
  }
};

//==> Функция редактирования животного

const editAnimal = (animal: any): void | never => {
  if (checkAnimal(animal)) {
    animal = animal as Animal;
    if (animal.name === "Сабака") {
      const an3 = document.querySelector(".p3") as HTMLElement;
      const anim3 = document.querySelector(".anim3") as HTMLElement;
      const newName: any = prompt("Увядзіце новую назву жывёлы: ");
      if (typeof newName == "string" && newName.length >= 0) {
        an3.remove();
        const a: HTMLElement = document.createElement("p");
        a.innerText = newName;
        a.classList.add("s");
        anim3.prepend(a);
        animalCollection[2].name = a.innerText;
      } else {
        alert("Вы нічога не ўвялі, таму жывёла застаецца");
      }
    }
    if (animal.name === "Малпа") {
      const an3 = document.querySelector(".p1") as HTMLElement;
      const anim3 = document.querySelector(".anim1") as HTMLElement;
      const newName: any = prompt("Увядзіце новую назву жывёлы: ");
      if (typeof newName == "string" && newName.length >= 0) {
        an3.remove();
        const a: HTMLElement = document.createElement("p");
        a.innerText = newName;
        a.classList.add("m");
        anim3.prepend(a);
        animalCollection[0].name = a.innerText;
      } else {
        alert("Вы нічога не ўвялі, таму жывёла застаецца");
      }
    }
    if (animal.name === "Чыюк") {
      const an3 = document.querySelector(".p2") as HTMLElement;
      const anim3 = document.querySelector(".anim2") as HTMLElement;
      const newName: any = prompt("Увядзіце новую назву жывёлы: ");
      if (typeof newName == "string" && newName.length >= 0) {
        an3.remove();
        const a: HTMLElement = document.createElement("p");
        a.innerText = newName;
        a.classList.add("p");
        anim3.prepend(a);
      } else {
        alert("Вы нічога не ўвялі, таму жывёла застаецца");
      }
    }
  } else {
    console.error("Жывёла не адпавядае патрабаванай структуры!");
  }
};

//==> Функция удаления животного

const deleteAnimal = (animal: any): void | never => {
  if (checkAnimal(animal)) {
    animal = animal as Animal;
    const num: number = animalCollection.indexOf(animal);
    const anim3 = document.querySelector(`.anim${num + 1}`) as HTMLElement;
    anim3.remove();
  } else {
    console.error("Жывёла не адпавядае патрабаванай структуры!");
  }
};

const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  let pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play");
        this.sleep();
      } else {
        console.log(`YAY! ${name} is so excited to play`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
const tink = createPet("Tink", "cat");
const mooncake = createPet("Mooncake", "dog");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");

//console.log(sora, tink, mooncake, baxter, cleo);

//tink.sleep();
//baxter.play();
//console.log(tink, baxter);
tink.isTired = 8;
mooncake.isTired = 9;

const allPets = [sora, tink, mooncake, baxter, cleo];
//console.log(allPets);

const showPets = function (petArray) {
  pets.innerHTML = "";
  for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};
statusButton.addEventListener("click", function () {
  showPets(allPets);
});

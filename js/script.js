const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");
//Create a Factory Function & Add Properties
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    //Create a Method for Sleep
    sleep: function () {
      this.isSleep = 1;
      console.log(`${this.name}, needs a nap Zzz...`);
    },
    //Create a Method for Playtime
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay!, ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

//Create 5 New Objects
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);

//Verify Objects & Methods
//clover.sleep();
//baxter.play();

//console.log(clover, baxter);

//Create a Factory Function & Add Properties
clover.isTired = 8;
francine.isTired = 9;

//// Create array of our pet objects
const allPets = [sora, clover, baxter, cleo, francine];

//Verify
//console.log(allPets);

//Display Pets in the Browser
const showPets = function (petArray) {
  pets.innerHTML = "";

  for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping";
    }

    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name} the ${pet.species} is ${status}.`;
    pets.append(li);
  }
};

//Add Click Event
statusButton.addEventListener("click", function () {
  showPets(allPets);
});

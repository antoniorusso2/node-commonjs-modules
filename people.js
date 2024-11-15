// console.log("test");
const getName = require("./names");
const getHobbies = require("./hobbies");

// console.log(getName, getHobbies);
const userData = getName("Antonio", "Russo");

const userHobbies = getHobbies("Musica", "Videogame", "Coding");
// console.log(userHobbies);

function person() {
  // const name = getName('Antonio', 'Russo');
  // const hobby = getHobbies('Musica', 'Videogame', 'Coding');
  const { firstName, lastName } = userData;
  const { hobbies } = userHobbies;

  return {
    firstName,
    lastName,
    hobbies
  };
}

const myData = person();
console.log(myData);

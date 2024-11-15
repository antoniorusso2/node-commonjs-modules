// console.log("test");
const getName = require("./names");
const getHobbies = require("./hobbies");

function person() {
  const userData = getName("Antonio", "Russo");

  const userHobbies = getHobbies("Musica", "Videogame", "Coding");

  // console.log(userHobbies);
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

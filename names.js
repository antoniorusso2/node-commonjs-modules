// Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
function getName(firstName, lastName) {
  // const result = {
  //   firstName,
  //   lastName,
  // };

  // return result;

  return {
    firstName,
    lastName,
  };
}

// Esporta la funzione dal file.
module.exports = getName;
// const test = getName("Antonio", "Russo");
// console.log(test);

// const removeFromArray = function (...args) {
//     // the very first item in our list of arguments is the array, we pull it out with args[0]
//     const array = args[0];
//     // create a new empty array
//     const newArray = [];
//     // use forEach to go through the array
//     array.forEach((item) => {
//       // push every element into the new array
//       // UNLESS it is included in the function arguments
//       // so we create a new array with every item, except those that should be removed
//       if (!args.includes(item)) {
//         newArray.push(item);
//       }
//       return newArray; 
//     });
    // and return that array
const removeFromArray = function (pets, ...dumbAnimals) {
    let badArray = []; 
  for (i=0; i<pets.length; i++) {
let goodArray = pets; 
let item = pets[i];
    if(!dumbAnimals.includes(item)) {
        badArray.push(item); 
    }
  }
  return badArray; 
}
// Do not edit below this line
module.exports = removeFromArray;

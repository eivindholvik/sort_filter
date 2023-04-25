// console.log("hei");

const myUnsortedArray = [1, 3, 5, 2, 4, 6, 7, 34, 5, 6, 7, 9, 43, 2, 5, 6, 4];

// function sortByNumber(a, b) {
//   return b - a;
// }

// console.log(myUnsortedArray.sort(sortByNumber));


const sorted = myUnsortedArray.sort((a, b) => b - a);

const betterExample = [
  {
    name: "John",
    age: 12
  },
  {
    name: "Elizabeth",
    age: 13
  },
  {
    name: "Bob",
    age: 18
  },
  {
    name: "Timmothy",
    age: 19
  },
  {
    name: "Sarah",
    age: 11
  }
];
// const sortedByAge = betterExample.sort((a, b) => a.age - b.age)
const sortedByAge = betterExample.sort(({ age: a }, { age: b }) => a - b)
console.log(sortedByAge);

const sortedByName = betterExample.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
});

console.log(sortedByName);


// if(nameA < nameB) {
//   return -1;
// } else {
//   if(nameA > nameB){
//     return 1;
//   } else {
//     return 0
//   }
// } 

// Eivind -- EIVIND

// console.log(sortedByName);
// console.log(betterExample);


// // Jeg vil kun ha med folk over 14 år på karusellen

const fileteredBetter = betterExample.filter((ele, index) => ele.age > 14);

const fileteredBetter2 = betterExample.filter((ele) => {
  if (ele.age > 14) {
    return true;
  }
  return false;
});

console.log(fileteredBetter);

// const names = ["Harald", "Peter", "Andreas"];

// console.log(names.sort());

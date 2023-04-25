// console.log("hei");

// const myUnsortedArray = [1, 3, 5, 2, 4, 6, 7, 34, 5, 6, 7, 9, 43, 2, 5, 6, 4];

// console.log(myUnsortedArray.sort((a, b) => b - a));

// const betterExample = [
//   {
//     name: "John",
//     age: 12
//   },
//   {
//     name: "Elizabeth",
//     age: 13
//   },
//   {
//     name: "Bob",
//     age: 18
//   },
//   {
//     name: "Timmothy",
//     age: 19
//   },
//   {
//     name: "Sarah",
//     age: 11
//   }
// ]
// const sortedByAge = betterExample.sort((a, b) => a.age - b.age)
// // const sortedByAge = betterExample.sort(({ age: a }, { age: b }) => a - b)
// console.log(sortedByAge);

// const sortedByName = betterExample.sort(({ name: a }, { name: b }) => {
//   const nameA = a.toUpperCase();
//   const nameB = b.toUpperCase();
//   return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
// });


// console.log(sortedByName);
// console.log(betterExample);

// // Jeg vil kun ha med folk over 14 år på karusellen

// const fileteredBetter = betterExample.filter((ele) => ele.age > 14);
// console.log(fileteredBetter);

// let VS const VS var

// let myName = "Mansoor";
// console.log(myName);
// myName = "Rehman";
// console.log(myName);

// var myName = "Mansoor";
// console.log(myName);
// myName = "Rehman";
// console.log(myName);

// {
//   const myName = "Mansoor";
//   console.log(myName);
//   myName = "Rehman";
//   console.log(myName);
// }

// var a=1;
// const b=2;
// let c=3;

// {
//     var d=4;
//     const e=5;
//     let f=6;
//     {
//         console.log(e,f)
//     }
// }

// console.log(a,b,c,d,f);

// Template strings

// for (let num = 1 ; num<=10; num++){
// let tableOf = 12;
// // console.log(tableOf + "*" + num + "=" + tableOf * num);
// console.log(`${tableOf} * ${num} = ${tableOf * num}`);
// }

//  function mult(a,b=5) {
//     return a*b;

//  }
//  console.log(mult(4));

// console.log(sum());

// function sum() {
// let a = 4 ; b = 4 ;
// let sum = a+b;
// return `the sum of two values is ${sum}`
// }

// const sum = () => {
//   let a = 4;
//   b = 4;
//   let sum = a + b;
//   return `the sum of two values is ${(a=3)+(b=4) }`;
// };
// console.log(sum());

// const sum = () => `the sum of two values is ${(a=3) + (b=5)}`
// console.log(sum());

// var friends = ['aman' , "ahmed" , 5 , true]
// console.log(friends);

//var cannot store multiples names without array

// var friends = new Array();
// var friends = [
//   "aman",
//   "ahmed",
//   5,
//   true,
//   undefined,
//   "",
//   [2, "munsif", [["asif"]], ["ayaz"]],
// ];
// console.log(friends[6][2][0][0] ,friends [6][3][0]);

// var totals = [
//   "ahmed",
//   234,
//   "undefined",
//   344,
//   "asif",
//   [[[[[["ahmed"]]]]], 
//   [
//     [["shan"]]
// ]],
// ];
// console.log(totals[5][0][0][0][0][0][0]);



var friends = ['aman' , "ahmed" , 5 , true , "ahmed"]
console.log(friends[friends.length - 5]);
console.log(friends.length);
// var friends = ["ahmed","nazim","nazir","shahid","ahmed"]
// console.log(friends.indexOf("Ahmed",3));

// var friends = ["ahmed","nazim","nazir","shahid","ahmed"]
// console.log(friends.lastIndexOf("ahmed"));

// var friends = ["ahmed","nazim","nazir","shahid","ahmed"]
// console.log(friends.includes("ahmed"));

// const rates = [300,456,345,645,345]

// const price = rates.find((no) =>{
//     return no > 200
// })
// console.log(price);

// const rates = [300,456,345,645,345]

// console.log(rates.find((no) => no > 200));

// const rates = [300,456,345,645,345]

// console.log(rates.findIndex((no) => no > 400));

// const rates = [300,456,345,645,345];
// const newRates = rates.filter((element,index)=>{

// return element > 600
// })
// console.log(newRates)

// const months = ["dec","sep",'nov',]
// console.log(months.sort());

// const months = ['june','july','aug','sep'];
// const Months = months.splice(months.length,0,"dec");
// console.log(months);
// console.log(Months);

// const months = ['june','july','aug','sep'];
// const monthsindexOf = months.indexOf("aug")
// if (monthsindexOf !== -1 ) {
//     const Months = months.splice(monthsindexOf,1)
//   console.log();
// }
// console.log(months);

// const array = [1, 3, 4, 56, 78, 568];
// let a = 0;
// let newarray = array.map((v) => {
//     console.log("array element ", v);
//     // <h1> v</h1>
//     return a = a + v;
// });
// let newarray = array.map((currentElm , index , array)=>{
// return currentElm >= 78

// })
// console.log(array);
// console.log(newarray);

// let array = [1,2,3,4, 1000];
// for (let i = 0; i <= array.length - 1; i++) {
//     console.log(array[i]);
// }
// console.log(array);

// var totals = [
//       "ahmed",
//       234,
//       "undefined",
//       344,
//       "asif",
//       [[[[[["ahmed"]]]]],
//       [
//         [["shan"]]
//     ]],
//     ];
//     console.log(totals[5][0][0][0][0][0][0]);

// const a=[1,2,3,4,[5,6,7,8]];
// for (let i = 0 ; i <= a.length - 1 ; i++) {
//     console.log(i);

// }
// console.log(a[4].length);
// for ( let i = 0; i<= a[4].length - 1; i++ ) {
//     console.log(a[4][i]);
// }

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum); // Output: 15

// let num = [2,5,23,45,567];
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

// let num = [2,5,23,45,567];
// num.forEach((element )=> {
//     console.log(element*element);

// });

// num = [23,556,345 ,34554, 2 , 3, 4];
// num.forEach((element , index , array) => {
//    console.log(element*element);
// });

// for of loop
// let num = [2,5,23,45,567];
// for (element of num) {
//     console.log(element);

// }

// for in loop
// let num = [2,5,23,45,567];
// for (element in num) {
//     console.log(element);

// }

// array from in loop
// it creates the array from object
// let a = "Mansoor";
// let arr = Array.from(a);
// console.log(arr);


// let name = "ahmed"
// let name1 = "shahid"
// let arr = Array.from(name);
// let arr1 = Array.from(name1);
// console.log(arr1);
// console.log(arr);


//array map method

// let num = [12,23,345]
// let no = num.map((element , index , array)=>{
// console.log(element , index , array);
// return element + 1
// })
// console.log(no);

// filter method in loops

// let a = [12 ,23,3456,56,6578];
// let c = a.filter((b)=>{
//     return b < 50
// })
// console.log(c);


 // reduce method in loops

//  let a = [2,3,4,5,6];
//  let b = a.reduce((h) => {
//     return h + h;
//  })
// console.log(b);

let a = [2,3,4,5,6];
let b = a.map((element , index , array)=>{
    console.log(element*element);

})
let c = a.filter((element)=>{
    return element*element < 5
   
})
console.log(c);
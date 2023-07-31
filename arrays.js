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

// let a = [2,3,4,5,6];
// let b = a.map((element , index , array)=>{
//     console.log(element*element);

// })
// let c = a.filter((element)=>{
//     return element*element < 5

// })
// console.log(c);

// let names = [12,23,4];
// names.includes(12);
// let a = names.find;

// const names = ["aman" , "khan" , "shahid" , "shahji"];
// const name1 = ["gul" , "sher" , "asif"];

// console.log(names.concat(name1));

// const names = ["aman" , "khan" , "shahid" , "shahji"];
// for (let i = 0; i < names.length - 1; i++) {
//     console.log(names[i]); ;

// }

// let names = ["gul" , "khan" , "sher" , "shahid"];
// for (element of names) {
//    console.log(element);
//     }

// let a = [12,122,24,3435,343];
// a.forEach((values , index , arrays) =>{
//     console.log(values*index);
// })

// let names = [23,4 , 12 , 123];
// let num = names.map((element , index , array)=>{
//     if (element==12) {
//         return element;
//        }

//     return false;

// })
// console.log(num);

// const a = [1,2,3,4,5,6,7,8,9,10];
// const b = a.map((num)=>(num+10)).map((num)=>(num > 5))
// console.log(b);

// const a = [1,2,3,4,5,6,7,8,9,10];
// let b = a.forEach((element)=>{
// console.log(element+10);
// })

// const a=0;
// if(a){
//     console.log("i am a value")
// }
// else{
//     console.log("i am a false value")
// }

// const a  = [0,"" ,null,undefined,1,2,34,"helo","munsif"," ",null]
// let b = a.filter((element)=>{
//     return element;
// })
// console.log(b);

// const companies  = [
//     {Companyname : "google" , online: "yes" , year: 1996},
//     {Companyname : "facebook" , online: "no" , year: 2004},
//     {Companyname : "youtube" , online: "yes" , year: 1990},
// ]
// let details = companies.filter((comp)=>{
//     return comp.year > 2000
// })

// console.log(details);

// const companies  = [
//     {Companyname : "google" , online: "yes" , year: 1996},
//     {Companyname : "facebook" , online: "no" , year: 2004},
//     {Companyname : "youtube" , online: "yes" , year: 1990},
// ]
// let details = companies.filter((comp) => console.log( comp.year > 2000));
// console.log(details);

// const a=[1,2,3,3,4,4];
// const b = a.filter((num,index)=>{
//     return a.indexOf(num) == index
// })
// console.log(b);

// const a=[1,2,3,3,4,4];
// let b = a.forEach((num,index,array)=>{
//     if () {

//     }
// })
// console.log(b);

// const nums = [1];
// let array = [];
// let a = nums.push((num)=>{
//     return array
// })
// console.log(a);

// const nums = [1];
// const a = [nums];

// console.log(a);

// const nums = [0,1]
// Output: [[0,1],[1,0]]
// const a = [nums, [1,0]]
// console.log(a);

// const a = [8,1,30,1,2,7,3,4];
// const b = a.filter((num,index)=>{
// return a.indexOf(num) == index ;
//  })
//  b.sort((a,b)=> a-b)
// console.log(b);

// const a = [8,1,30,2,7,3,4];
// [1,8,2,7,3,4,30]
// [1,2,8,3,4,7,30]
// [1,2,3,4,7,8,30]

// const a = [1, 2, 3, 4, 7, 8, 15,2, 23, 455, 30 ,45];
// let b = a.filter((num,index)=>{
//     return num >=7 && num <=30
// })
// console.log(b);

// const a = [1, 2, 3, 4, 7, 8, 15,2, 23, 455, 30 ,45];
// let c = a.indexOf(30)
// let b = a.slice(4,11)
// console.log(b);
// console.log(c);


// const a = ["NY" , "LA" , "TX"]
// let b = a.map((elements , index , array)=>{
//     return elements.toLowerCase()
// })
// console.log(b);


// const num = [23,45,67,89,56,78,45]
// let b = num.filter((values)=>{
//     return values > 50+7
// })
// console.log(b);

// const a = ["ahmed","Shahid","raja","babar"]
// let b = a.map((elements)=>{
// return elements.length
// })
// console.log(b);

// const a = [1,3,45,7,234,4536,34]
// let b = a.reduce((num,acc)=>{
//     return num + acc
// })
// console.log(b);

// const input = [1, -4, 12, 0, -3, 29, -150];
// let a = input.filter((num)=>{
//     return num > 0
// })
// let b = a.reduce((currentValue,accumilator)=>{
//     return accumilator + currentValue 
// })
// console.log(b);

const input = [1, 2, 3, 4, 5];
let a = input.map((num)=>{
    return Math.pow(num ,3)
})
console.log(a);
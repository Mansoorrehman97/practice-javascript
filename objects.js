// Object Literal

// var book1 = {
//     name: "harry",
//     author:"Shuzi",
//     printDate : 1987,
//     greetMe: function(){
//     console.log("Hello How are you");
//     }

// }
// var book2 = {
//   name: "The Great",
//   author: "xdjhd",
//   printDate: 1909,
// };

// for (var key in book2) {
//  console.log(book2[key]);
// }

// console.log(book1.author);
// book2.name = "names"

// delete book2.author

// console.log(Object.keys(book2));

// console.log(Object.values(book2));

// Object.freeze(book2);                            // this will not allow to add key and values in object

// Object.seal(book2)

// book2.author = "Joseeph";
// book2.country = "Pakistan";
// console.log(book2);

// console.log(book1);

// Object using new keyword

// var myDetails = new Object();
// myDetails.name = "Mansoor",
// myDetails.title = "beginner",
// myDetails.hobbies = ["cricket" , "coding" , "reading"],
// myDetails.followers = 750

// console.log(myDetails);

// OBject using constructor method

// function Details(
//     name,
//     clas,
//     age,
//     location
// )
// {
//     this.name = name;
//     this.clas = clas;
//     this.age = age;
//     this.location = location;
// }

// var myDetails = new Details(
//     "Mansoor Rehman",
//     11,
//     19,
//     "islamabad"
// );
// console.log(myDetails);

// var person = {
//     fname : "Mansoor",
//     lname : "Rehman",
//     age : 20,
// }
// person.name = function () {
//     return this.fname + " " + this.lname;
//   }
// console.log((person.name()).toUpperCase());

// const products = {
//     itemname : "Lays",
//     price : 80,
//     discounts : "20%",
//     itemcode : "DGH33D3D335"
// }
// products.flavour = 'spicy'
// console.log(products);

// const products = new Object();
// products.itemname = "Lays",
// products.price = 80,
// products.discounts = "20%",
// products.itemcode = "GU7GHG";

// console.log(products);

// contructor method practice

// function Products(itemname, price, discounts, itemcode) {
//   this.itemname = itemname;
//   this.price = price;
//   this.discounts = discounts;
//   this.itemcode = itemcode;
// };

// var Product1 = new Products(

//     "Lays",
//     80,
//     20,
//     "ddhcsd",
// )

// var Product2 = new Products(
//     "Salanty",
//     50,
//     "zero",
//     "dhcf",
// )
// console.log(Product1);
// console.log(Product2);

// const o = [
//   {
//     name: "munsif",
//     marks: [55, 77, 90, 66, 72], // false
//   },
//   {
//     name: "mansoor",
//     marks: [45, 8, 90, 66, 72],
//   },
//   {
//     name: "umer",
//     marks: [34, 77, 90, 66, 72],
//   },
//   {
//     name: "abraz",
//     marks: [78, 88, 90, 66, 73],
//   },
// ];
// let result = []

// for (let i = 0; i < o.length; i++) {
// for (let j = 0; j < o[i].marks.length; j++) {
//   if (o[i].marks[j] < 50) {
//     result.push(o[i]);
//     break;
//   }
// }
// }
// console.log(result);

// const passedStudents=o.filter(({name,marks}) => {
//   const isUserPassed=marks.find((marks)=>marks<50)
//   if (!isUserPassed) {
//     return name;
//   }else{
//     return null;
//   }
// }).map((passedUsers)=>passedUsers.name)

// const passedStudents=o.filter((student)=>{
//   if(!student.marks.some((mark)=>mark<50)){
//     return student;
//   }else{
//     return null
//   }
// })

// console.log(passedStudents)

// let xz = []
// let res = []

// for (let i = 0; i < o.length; i++) {
// let m=true;
//   for (let j = 0; j <= 4;j++) {
//     if ((o[i].marks[j] < 50)) {
//       m = false;
//     }
//   }
//   if (m == true) {
//     res.push(o[i]);
//   }
// };
// console.log(res)
// let a = o.map((num) => {
//   return {
//     marks : num.marks.filter((num) => {
//       return  num < 50
//     })
//   }
// })
// console.log(a);

// debugger;
// let bob = { name: 'Bob', age: 22 };
// let studentBob = Object.create(bob);
// studentBob.year = 'Senior';

// console.log(studentBob.name); // => 'Bob'

// let fruits = { names : "Mango" , sour : "yes"}
// let person = { name: 'Bob', age: 30, height: '6ft' };
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person)); // => [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ]]
// console.log(Object.assign(person,fruits,));

// let person = {
//   name:       'Bob',
//   occupation: 'web developer',
//   hobbies:    'painting',
// };
// console.log(person.name);

// let myArray = {
//    0 : "mansoor",
//    1 : 20,
//    2 : "yes",
//    length:3
//   };

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// let myArray = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3,
// };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };
// let objKeys = Object.keys(obj)
// let upperCase = objKeys.map((key) =>{
//   return key.toUpperCase()
// });
// console.log(upperCase);

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// let myObj = Object.create(myProtoObj);

// console.log(myObj);

// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
// };

// obj.bar[3].xyz = 606

// console.log(obj);

// const array = [1, 2, 3, [4, 5, 6, [7, 8, 9], [10, 11, 12]]];

// const a = "munsiff" ;
// for (let i = 0; i < a.length; i++) {
// if (a[i]=="f") {
//    let b = a[i]+a[i]
//     console.log(b.length);
//     break;
// }
// }

// const a = "munsifffff" ;
// let b = 0
// for (let i = 0; i < a.length; i++) {
// if (a[i]=="f") {
//    b++;
// }
// }
// console.log(b);

// let a = array.flatMap((num) => {
//   return num;
// }).flatMap((num)=> num)
// console.log(a);

// let txt = "dsakdhdas";
// let pos = txt.indexOf("h");
// console.log(pos);

// debugger;
// let txt = "I eat apples the whole day";
// let x = txt.slice(6, 12);
// console.log(x);

// let txt = "Hello World";
// txt = txt.replace("Hello", "Hi");

// console.log(txt);


// const num = (a,b) => a===100||b===100||(a+b)===100

// console.log(num(100,0));
// console.log(num(0,100));
// console.log(num(70,10));

// let firstName = 'lata'
// console.log(firstName);

// function hello() {
//     return 'Hello World!'
// }
// console.log(hello());

// function a() {
//     return "Hello a!"
// }
// function b() {
//     return "Hello b!"
// }
// console.log(a(),b());

// function greet() {
//     return "Haydo!"
// }
// let salutation = greet()
// console.log(salutation);

// function echo(sound) {
//     return sound;
//   }
//   console.log(echo("echo"));

// function greet(name) {
//     return "hello "+ name +"!"
// }
// console.log(greet("raza"));

// function log() {
//     console.log('Hello Console');
//   }
// log()
// function log(value) {
//     console.log(value);
//   }
//   log('Ken Thompson')

// function shout(word) {
//     let r = word+word;
//    console.log(r);
//    return r;
//    }
//    shout('run');

// function length(word) {
//     return word.length
   
// }
// console.log(length("sun"))


// function toCase(word) {
//     return word.toLowerCase() + "-" + word.toUpperCase()
// }
// console.log(toCase("Mthatha"));


// function shortcut(words,text){
//     return words.charAt(0) + text.charAt(0)
// }
// console.log(shortcut("a1","a2"));

// function  firstChar(word) {
//     let a = word.trim();
//     return a.charAt(0);
//  }
// function firstChar(word) {
//     let a = word.trim();
//     return a.charAt(0);
//   }
// console.log(firstChar(' Rosa Parks '));

// let n1 = 'bit'.indexOf('js');
// console.log(n1);

// function indexOfIgnoreCase(word,text) {
//     // let a = word.toLowerCase();
//     let b = text.toLowerCase();
//     return word.indexOf(b)
// }
// console.log(indexOfIgnoreCase("bit","IT"));


// function firstWord(s) {
//     let a = s.indexOf(" ")
//     return s.substr(0,a)
// }
// console.log(firstWord("see ans stop"));

// function normalize(date) {
//     let a = date.replace('-' , '/')
//     return a.replace('-','/');
// }
// console.log(normalize("2-3-2020"));


// function add(num1,num2) {
//     return num1+num2;
// }
// console.log(add(1,3));

// for (let a = 1; a<=10; a++){
//     tableOf = 23
// console.log(tableOf + " * " + a + " = " + tableOf*a);
// }

// function toFahrenheit(celsius){
//     return F = 1.8 * celsius + 32
// }
// console.log(toFahrenheit(10));

// function onesDigit(num) {
//     return num % 10
// }
// console.log(onesDigit(2676));

// function mean(n1,n2) {
//     return (n1+n2)/2
// }
// console.log(mean(1,3));

function hypotenuse(n1,n2) {
    let n3 = Math.pow(n1,2) + Math.pow(n2,2)
    return Math.sqrt(n3)
}
console.log(hypotenuse(3,4));
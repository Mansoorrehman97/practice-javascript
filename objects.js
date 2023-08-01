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

const o = [
  {
    name: "munsif",
    marks: [55, 77, 90, 66, 72], // false
  },
  {
    name: "mansoor",
    marks: [45, 8, 90, 66, 72],
  },
  {
    name: "umer",
    marks: [34, 77, 90, 66, 72],
  },
  {
    name: "abraz",
    marks: [78, 88, 90, 66, 72],
  },
];


const passedStudents=o.filter((student)=>{
  if(!student.marks.some((mark)=>mark<50)){
    return student;
  }else{
    return null
  }
})

console.log(passedStudents)




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


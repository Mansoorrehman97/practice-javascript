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




var person = {
    fname : "Mansoor",
    lname : "Rehman",
    age : 20,
}
person.name = function () {
    return this.fname + " " + this.lname;
  }
console.log((person.name()).toUpperCase());
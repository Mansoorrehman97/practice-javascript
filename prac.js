const marks =[
  {
    name : "uzair",
    marks : [45, 8, 90, 66, 72]
  }
] 

// let a = marks.map((num) => {
//     return num.marks[0] > 50

//   })
//   console.log(a);


  let a = marks.map((num) => {
    return {
      marks: num.marks.filter((num) => num > 50)
    };
  });
  console.log(a);
// function sum(x, y) {
//   return x + y;
// }
// console.log(sum(3, 6));

const nameNod = document.createElement("h1");
nameNod.id = "name";

const bodyRef = document.querySelector("body");
bodyRef.prepend(nameNod);
// bodyRef.append(nameNod)

console.log(nameNod);

const nameMera = document.getElementById("name");
console.log(nameMera);

const descriptionEdit = document.getElementsByClassName("description")[0];
console.log(descriptionEdit[0]);

nameMera.innerHTML = "Mansoor RN";
descriptionEdit.innerHTML =
  "Only Descript is both & it features magical AI, so you can skip the hard part of editing. There are simple podcast & video editors and there are powerful ones. Get Pricing. Sign Up Online. Highlights: Webinars & Videos Available,";

//   bodyRef.removeChild(descriptionEdit)
// console.log(document.querySelector('ul li').textContent);
// descriptionEdit.classList.add("newDisk")
// descriptionEdit.classList.remove('description')
// descriptionEdit.style.fontSize = '30px'
descriptionEdit.style.color = "red";

const buttonNod = document.createElement("button");
buttonNod.innerHTML = "Want to eat mangoes";
buttonNod.addEventListener("click", function () {
  // alert('Thanks for eating mangoes')
  window.open(
    "https://www.google.com/search?rlz=1C1VDKB_enPK1063PK1063&q=eating+mangoes&tbm=isch&source=lnms&sa=X&ved=2ahUKEwj57fnp4MqAAxX6bKQEHe4dAZkQ0pQJegQICxAB&biw=508&bih=950&dpr=1",
    "_blank"
  );
});

bodyRef.append(buttonNod);

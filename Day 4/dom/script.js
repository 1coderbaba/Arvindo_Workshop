const h1= document.querySelector("h1")

h1.textContent ="this is modified"
let a="pepsi"
const div= document.querySelector("div")
// div.innerHTML=`
//             <ul>
//             <li>Coffee</li>
//             <li>${a}</li>
//             <li>Milk</li>
//             </ul>
//                 `
// styling using js

// h1.style.color="blue"
h1.style.backgroundColor="yellow"

// h1.classList.add("red")

// h1.classList.remove("red")

h1.classList.toggle("red")
h1.classList.toggle("red")
// h1.classList.toggle("red")

// -----------------------------

const ul = document.querySelector("ul")
//  ul.children[0].remove()
// console.log(ul.children)

//  ul.parentElement.remove()
// remove 2nd child of ul
// ul.nextElementSibling.children[1].remove()
// --------------------------------------

// create and inserting
const li=document.createElement("li")
li.textContent="pepsi"
// ul.prepend(li)
ul.append(li)

// ----------------------
// before after
const ol=document.querySelector("ol")
ol.before("this is just text")

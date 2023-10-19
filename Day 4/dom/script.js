const h1= document.querySelector("h1")

// h1.textContent ="this is modified"
// let a="pepsi"
// const div= document.querySelector("div")
// // div.innerHTML=`
// //             <ul>
// //             <li>Coffee</li>
// //             <li>${a}</li>
// //             <li>Milk</li>
// //             </ul>
// //                 `
// // styling using js

// // h1.style.color="blue"
// h1.style.backgroundColor="yellow"

// // h1.classList.add("red")

// // h1.classList.remove("red")

// h1.classList.toggle("red")
// h1.classList.toggle("red")
// // h1.classList.toggle("red")

// // -----------------------------

// const ul = document.querySelector("ul")
// //  ul.children[0].remove()
// // console.log(ul.children)

// //  ul.parentElement.remove()
// // remove 2nd child of ul
// // ul.nextElementSibling.children[1].remove()
// // --------------------------------------

// // create and inserting
// const li=document.createElement("li")
// li.textContent="pepsi"
// // ul.prepend(li)
// ul.append(li)

// // ----------------------
// // before after
// const ol=document.querySelector("ol")
// ol.before("this is just text")

// function  add(a,b) {
//     return a+b;
// }

// // click dblclick moseenter mouseleave scroll
// h1.addEventListener("mouseleave",function(e)
// {
//     console.log(e)
//     h1.style.backgroundColor="blue"
// }
// )

// const ip = document.querySelector("input")

// ip.addEventListener("focus",function (e) {
//     console.log(e)
// })

function toggleColor() {
    h1.classList.toggle("red")
}
toggleColor()

setInterval(toggleColor,100);

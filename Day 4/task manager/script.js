const add = document.querySelector(".add button")
const ip = document.querySelector(".add input")
const tasks = document.querySelector(".tasks");

add.addEventListener("click",function () {
    const value = ip.value;
    ip.value=""

    const div = document.createElement("div")
    div.classList.add("task")
    const ip2 = document.createElement("input")
    const editBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")

    editBtn.classList.add("edit")
    editBtn.textContent="edit"

    deleteBtn.classList.add("delete")
    deleteBtn.textContent="delete"
    ip2.value=value

    ip2.toggleAttribute("disabled")
    div.append(ip2)
    div.append(editBtn)
    div.append(deleteBtn)

    tasks.append(div)

    deleteBtn.addEventListener("click",function() {
        deleteBtn.parentElement.remove()
    })


    editBtn.addEventListener("click",function()
    {
        ip2.toggleAttribute("disabled")
        if(editBtn.textContent==="edit")
        editBtn.textContent="save"
        else
        editBtn.textContent="edit"
    })
})

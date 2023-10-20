const {readFileSync,writeFileSync}=require("fs")

let product= readFileSync("./product.json")
let user = readFileSync("./user.json")

product = JSON.parse(product).products
user = JSON.parse(user).users
function getProductByQuery(req,res) {
    const {brand}= req.query;
    let items = product.filter(u=>u.brand===brand)
    items = items.map(u=>`<img src=${u.thumbnail}>`)
    res.send(`${items}`)
}

function getUserByQuery(req,res) {
    const {eyeColor}= req.query;
    let items = user.filter(u=>u.eyeColor===eyeColor)
    items = items.map(u=>`<img src=${u.image}>`)
    res.send(`${items}`)
}
function getUserById(req,res) {
    const id =req.params.id
    res.send(user[id])
}


module.exports={getProductByQuery,getUserById,getUserByQuery}

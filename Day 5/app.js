// const {name1,name2} = require("./names.js")
// const greet = require("./functions.js")

// greet(name1)

// const {readFileSync,writeFileSync} = require("fs")

// writeFileSync("file1.txt","this is file1 text")
// writeFileSync("file2.txt","this is file2 text")

// const data1 = readFileSync("file1.txt",'utf-8')
// const data2 = readFileSync("file2.txt",'utf-8')

// writeFileSync("file3.txt",`${data1} ${data2}`)

const express = require("express");

const app =express()

app.get("/",function home(req,res) {
    const {name} = req.query
    res.send(`${name}`)
})

app.get("/:animal",function(req,res) {
    const name=req.params.animal
    res.send(`${name}`)
})

app.listen(3000,function(){
console.log("server is running")
})

// localhost:3000/dogs
// localhost:3000?name=jitendra

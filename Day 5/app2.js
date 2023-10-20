const express = require("express");
const app =express()
const {getProductByQuery,getUserById,getUserByQuery} = require("./controller.js")
app.get("/user/:id",getUserById)
app.get("/user",getUserByQuery)
app.get("/product",getProductByQuery)
app.listen(3000,()=>console.log("server runnig" ))

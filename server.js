require('dotenv').config()
const express = require("express");
const routers = require("./router/Routers");
const app = express();

const PORT = process.env.PORT || 5000
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.listen(PORT, () => {
    console.log(`listen serer on ${PORT} port`);
})

function server() {
    try {
        app.use("/", routers)
    } catch (error) {
        console.log(error + "");
    }
}

server()
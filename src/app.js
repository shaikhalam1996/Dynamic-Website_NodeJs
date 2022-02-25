const express = require("express");
const app = express();
require("./db/conn");
const path = require("path");
const hbs = require("hbs");
const Userdata = require("./models/user");
const port = 8000;


const bootstrapcss = path.join(__dirname,"../node_modules/bootstrap/dist/css")
const bootstrapjs = path.join(__dirname,"../node_modules/bootstrap/dist/js")
const bootstrapjq = path.join(__dirname,"../node_modules/bootstrap/dist")
const viewPath = path.join(__dirname,"../template/views")
const partialPath = path.join(__dirname,"../template/partials")
const f = path.join(__dirname,"../public")

app.use(express.urlencoded({extended:false}))
app.use(express.static(f))
app.use(express.static(bootstrapcss))
app.use(express.static(bootstrapjs))
app.use(express.static(bootstrapjq))

app.set("view engine","hbs")
app.set("views",viewPath)
hbs.registerPartials(partialPath)

app.get("/",(req,res) => {
    res.render("index");
})

app.get("/contact",(req,res) => {
    res.render("index");
})

app.post("/contact",async (req,res) => {
    try {
       //res.send(req.body)
       const data= new Userdata(req.body);
       await data.save(); 
       res.status(201).render("index")
    } catch (error) {
     res.status(500).send(error);
    }
})

app.listen(port,()=>{
    console.log("server listening at port no "+ port);
})

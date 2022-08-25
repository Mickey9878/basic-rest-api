const express = require("express");
// const bodyParser = require('body-parser');

const app =express();
const PORT = 4000;

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.post("/address", (req, res) => {
    console.log("hello express");
    res.header('Access-Control-Allow-Origin', '*')
    const address = req.body.address;
    console.log(req.body);
    return res.json({greet: 'hello'});
    
    //res.sendStatus(500);
});

app.get("/teststr/:str", async (req, res, next) => {
    const str = req.params["str"];
    console.log(`str ${str}`);
    return res.json(str);
  }); 
  
app.get("/address", (req, res) => {
    console.log("hello express");
    res.header('Access-Control-Allow-Origin', '*')
    const address = req.body.address;
    console.log(address);
    res.json({greet: 'hello'});
    
    //res.sendStatus(500);
});


app.listen(PORT, () => console.log("running server"));
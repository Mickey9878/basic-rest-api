const express = require("express");
const cors = require('cors')
// const bodyParser = require('body-parser');

const app =express();
const PORT = 4000;

app.use(cors({origin: true, credentials: true}))

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.post("/address", (req, res) => {
    // res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    console.log("hello express");
    console.log(req.body);
    return res.json({greet: 'hello'});
    
    //res.sendStatus(500);
});

app.listen(PORT, () => console.log("running server"));
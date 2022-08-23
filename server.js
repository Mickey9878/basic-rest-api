const express = require("express");
const app =express();
const PORT = 4000;
const userRouter =require("./routes/user")

app.get("/user", (req, res) => {
    console.log("hello express")
    res.json({greet: "hello"})
    //res.sendStatus(500);
})

//routing

app.listen(PORT, () => console.log("running server"));
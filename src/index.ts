import express from "express";
import "dotenv/config"

const app = express();
const port: number = 3000;
const secret = process.env.MY_GLOBAL_TEST_SECRET

app.get("/", (req, res) => {
    res.status(200).send("Hello world!!")
})

//Start server on port varible
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log(secret)
})
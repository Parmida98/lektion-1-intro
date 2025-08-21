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


import { closeDB, runDB } from "./db/database.js"
async function startServer() {
    try {
        await runDB()
        app.listen(port, () => {
            console.log(`Listening to port ${port}`)
            console.log(`Start the app: http://localhost:${port}`)
        })
        process.on("SIGINT", async () => {
            console.log("Cleaning up...")
            await closeDB()
            process.exit(0)
        })
    } catch (error) {
        console.log(error)
    }
}
startServer()
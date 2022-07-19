require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const router = require("./routes/index");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

const PORT = 8080;


app.get("/", function (req, res) {
    res.json({message: "Success!"});
});

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`)
        })
    } catch (e) {
        console.log(e);
    }
};

start();

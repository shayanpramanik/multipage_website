const express = require("express");
const app = express();

app.use(express.json());

let users = {};

app.post("/signup", (req, res) => {
    const { username, password } = req.body;
    users[username] = password;
    res.send("User created");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (users[username] === password) {
        res.send("Login successful");
    } else {
        res.status(401).send("Invalid credentials");
    }
});

app.listen(3000, () => console.log("Auth running"));

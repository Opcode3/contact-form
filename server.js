require('dotenv').config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 2000


app.use(express.json());

app.get('/', (req, res) => {
    res.json("Server is running")
});

app.listen(PORT, console.log(`Server is running on localhost:${PORT}`))



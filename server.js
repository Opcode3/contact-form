require('dotenv').config();

const express = require("express");
const mailRoutes = require('./routes/mailRoutes');
const app = express();

const PORT = process.env.PORT || 2000


app.use(express.json());
app.use("/api/mail", mailRoutes)

app.listen(PORT, console.log(`Server is running on localhost:${PORT}`))



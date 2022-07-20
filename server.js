require('dotenv').config();

const express = require("express");
const app = express();

const contactRouter = require('./routes/contactRoutes')

const PORT = process.env.PORT || 2000


app.use(express.json());
app.use("/api/contact", contactRouter)

app.listen(PORT, console.log(`Server is running on localhost:${PORT}`))



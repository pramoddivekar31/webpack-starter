const express = require("express");
const path = require('path')
const bookRoute = require('./routes/bookRoutes')
const morganLogger = require('./middlewares/morgan')
const corsMiddle = require('./middlewares/cors')


const app = express(); // create express app

app.get("/check", (req, res) => {
   res.send("This is from express.js");
});

app.use(corsMiddle)
app.use(morganLogger)
app.use(express.static("dist"))
app.use(bookRoute)

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'dist/index.html'))
})

app.listen(4000, () => {
  console.log("server started on port " + 4000);
});
const connectToMongo = require("./db");
const express = require('express')
const cors =require('cors');

connectToMongo();
const app = express();
const port = 5000

app.use(express.json())

// Available Routes
app.use("/api/auth",cors(), require("./routes/auth"))
//app.use("/api/passes", require("./routes/passes"))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

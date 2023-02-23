const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser')


const app = express();
const db = require("./models");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


var corsOptions = {
  origin: "http://localhost:8000"
};

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/domain.routes')(app);
require('./routes/mint.routes')(app);


app.use(cors(corsOptions));
//app.use(express.bodyParser());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


db.mongoose
  .connect(`mongodb+srv://Admin:bsHGtDvhYCzVwZYp@trueweb3.1u56fq7.mongodb.net/?retryWrites=true&w=majority `, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    // initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/server", (req, res) => {
  res.json({ message: "Server connected" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
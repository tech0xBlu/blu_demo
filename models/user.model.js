const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: String,
    password: String,

    domains : [{
        domain: String,
        addresses:{
                    Ethereum : String,
                    Polygon : String,
                    Binance: String,
                    Bitcoin: String
                }
            }]
            

  })
);

module.exports = User;


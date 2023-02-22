const mongoose = require("mongoose");

const Domains = mongoose.model(
  "Domain",
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

module.exports = Domains;


const mongoose = require("mongoose");

const ABI = mongoose.model(
  "ContractABI",
  new mongoose.Schema({
    ABI: String
  })
);

module.exports = ABI;


const mongoose = require("mongoose");
const { Schema } = mongoose;

const AddressSchema = new Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  postalCode: {
    type: Number,
    required: true,
  },
});

module.exports = AddressSchema;

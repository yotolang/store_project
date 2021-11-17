const Joi = require("joi");
const mongoose = require("mongoose");
const _ = require("lodash");

const productSchema = new mongoose.Schema({
  bizPrice: {
    type: Number,
    required: true,
    minlength: 1024,
  },
  bizCompany: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1024,
  },
  bizTitle: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 400,
  },
  bizImage: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 1024,
  },
  bizCount: {
    type: Number,
    minlength: 3,
    maxlength: 99999999999,
  },
  bizTotal: {
    type: Number,
    minlength: 3,
    maxlength: 99999999999,
  },
  bizinCart: {
    type: Boolean,
  },
  bizNumber: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 99999999999,
    unique: true,
  },

  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Product = mongoose.model("Product", productSchema);

function validateProduct(product) {
  const schema = Joi.object({
    bizPrice: Joi.number().min(1).required(),
    bizTitle: Joi.string().min(2).max(1024).required(),
    bizTotal: Joi.number().min(2).max(400),
    bizCompany: Joi.string().min(2).max(400).required(),
    bizCount: Joi.number().min(9).max(10),
    bizinCart: Joi.boolean(),
    bizImage: Joi.string().min(11).max(1024),
  });

  return schema.validate(product);
}

async function generateBizNumber(Product) {
  while (true) {
    let randomNumber = _.random(1000, 999999);
    let product = await Product.findOne({ bizNumber: randomNumber });
    if (!product) return String(randomNumber);
  }
}

exports.Product = Product;
exports.validateProduct = validateProduct;
exports.generateBizNumber = generateBizNumber;

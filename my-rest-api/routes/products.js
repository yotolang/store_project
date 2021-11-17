const express = require("express");
const _ = require("lodash");
const {
  Product,
  validateProduct,
  generateBizNumber,
} = require("../models/product");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/my-product", auth, async (req, res) => {
  if (!req.user.biz) return res.status(401).send("Access denied.");
  const products = await Product.find({ user_id: req.user._id });
  res.send(products);
});
router.get("/story", auth, async (req, res) => {
  try {
    const product = await Product.find({});
    res.send(product);
  } catch (error) {
    res.status(500).json({ message: "server erorre" });
  }
});

router.delete("/:id", auth, async (req, res) => {
  const product = await Product.findOneAndRemove({
    _id: req.params.id,
    user_id: req.user._id,
  });
  if (!product)
    return res.status(404).send("The product with the given ID was not found.");
  res.send(product);
});

router.put("/:id", auth, async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let product = await Product.findOneAndUpdate(
    { _id: req.params.id, user_id: req.user._id },
    req.body
  );
  if (!product)
    return res.status(404).send("The product with the given ID was not found.");

  product = await Product.findOne({
    _id: req.params.id,
    user_id: req.user._id,
  });
  res.send(product);
});

router.get("/:id", auth, async (req, res) => {
  const product = await Product.findOne({
    _id: req.params.id,
    user_id: req.user._id,
  });
  if (!product)
    return res.status(404).send("The product with the given ID was not found.");
  res.send(product);
});

router.post("/", auth, async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let product = new Product({
    bizPrice: req.body.bizPrice,
    bizTotal: req.body.bizTotal,
    bizTitle: req.body.bizTitle,
    bizCount: req.body.bizCount,
    bizCompany: req.body.bizCompany,
    bizinCart: req.body.bizinCart,
    bizImage: req.body.bizImage
      ? req.body.bizImage
      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    bizNumber: await generateBizNumber(Product),
    user_id: req.user._id,
  });

  post = await product.save();
  res.send(post);
});

module.exports = router;

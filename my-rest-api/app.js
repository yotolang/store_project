const users = require("./routes/users");
const auth = require("./routes/auth");
const cards = require("./routes/cards");
const products = require("./routes/products");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/my_rest_api_W170620E", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));
app.use(require("morgan")("dev"));
app.use(require("cors")());
app.use(express.json());

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/cards", cards);
app.use("/api/products", products);

const port = 3900;
http.listen(port, () => console.log(`Listening on port ${port}...`));

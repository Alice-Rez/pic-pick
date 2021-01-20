var express = require("express");
var router = express.Router();
const Axios = require("axios");
require("dotenv").config();

/* GET home page. */
router.get("/", (req, res, next) => {
  console.log(req.body);
  res.send("Hello World!");
});

router.post("/search", (req, res, next) => {
  console.log(req.body);
  const { query, page } = req.body;
  if (!query) {
    res.send({ total: 0, total_pages: 0, results: Array(0) });
  } else {
    console.log("calling Axios");
    Axios({
      method: "GET",
      url:
        "https://cors-anywhere.herokuapp.com/https://api.unsplash.com/search/collections",
      params: {
        client_id: process.env.API_KEY,
        query: query,
        page: page,
      },
    })
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => console.log(err));
  }
});

module.exports = router;

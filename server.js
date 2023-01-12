const express = require("express");
const request = require("request");
// const { default: app_constants } = require('../src/constants/app_constants');

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/getProducts", (req, res) => {
  request(
    {
      url: "https://dev-be.sulhuf.com:3000/itemsmaster/getall?page=1&itemStatus=Published&resultsPerPage=10",
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.get("/getProduct/:_id", (req, res) => {
  request(
    {
      url:
        "https://dev-be.sulhuf.com:3000/itemsmaster/getbyid/" + req.params._id,
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

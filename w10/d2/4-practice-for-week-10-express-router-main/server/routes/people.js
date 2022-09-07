const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  if (!req.body.banana) {
    throw new Error("Where is the banana")
  }
  next()
})

// /people/
router.get("/", (req, res) => {
  res.json("Number 1");
});

// /people/1/likes
router.post("/:personId/likes", (req, res) => {
  res.json("Number 2");
});

router.delete("/:personId", (req, res) => {
  res.json("Number 3");
});

router.get("/best-dressed/comments", (req, res) => {
  res.json("Number 4");
});

router.get("/people/:name/lookup", (req, res) => {
  res.json("Number 5");
});

module.exports = router;
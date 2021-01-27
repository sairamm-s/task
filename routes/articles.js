const express = require('express');
const router = express.Router();
const Articles = require('../models/articles');

router.post('/', (req, res) => {
  const newArticle = new Articles({
    name: req.body.name,
    desc: req.body.desc,
  });

  newArticle
    .save()
    .then(() => res.json('New article posted successfully'))
    .catch((err) => res.status(400).json(`Error : ${err}`));
});
router.get('/', (req, res) => {
  Articles.find()
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;

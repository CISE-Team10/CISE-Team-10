
const express = require('express');
const router = express.Router();
var cors = require('cors');


//Load Article model
const Article = require('../../models/Article');

router.get('/test', (req, res) => res.send('articles route testing!'));

router.get('/', (req, res) => {
  Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ nobooksfound: 'No articles found' }));
});


router.post('/addNewArticle', (req, res) => {
  Article.create(req.body)
    .then(article => res.json({ msg: 'Article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this article' }));
});


module.exports = router;

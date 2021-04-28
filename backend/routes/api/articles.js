
const express = require('express');
const router = express.Router();

//Load Article model
const Article = require('../../models/Article');

router.get('/test', (req, res) => res.send('articles route testing!'));

router.get('/:id', (req, res) => {
    Article.findById(req.params.id)
      .then(article => res.json(article))
      .catch(err => res.status(404).json({ noarticlefound: 'No Book found' }));
  });

  router.post('/', (req, res) => {
    Article.create(req.body)
      .then(book => res.json({ msg: 'Book added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
  });
  

module.exports = router;

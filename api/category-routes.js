const router = require('express').Router();
const { category, product } = require('../../models');



router.get('/', (req, res) => {
  category.findAll({
    include: [product],
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  category.findOne({
    where: {
      id: req.params.id,
    },
    include: [product],
  })
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json(err));
});

router.post('/', (req, res) => {
  category.create(req.body)
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
  category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
  category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;

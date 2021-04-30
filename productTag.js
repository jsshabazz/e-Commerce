const router = require('express').Router();
const sequelize = require('../../config/connection');
const { productTag, product, Tag } = require('../../models');

// Fetch all productTags
router.get('/', async (req, res) => {
	try {
		const productTag = await product.findAll();
		res.status(200).json(productTag);
	}
	catch (err) {
		res.status(500).json(err);
	}
});

// Fetch a lone productTags
router.get('/:id', async (req, res) => {
	try {
		const productTag = await product.findByPk(req.params.id, {
			include: [{model: Location}, {model: Trip}]
		});
		if (!tproductTags) {
			res.status(404).json({ message: 'productTag not found' });
			return;
		}
		res.status(200).json(productTag);
	}
	catch (err) {
		res.status(500).json(err);
	}
});

// Create a new productTag
router.post('/', async (req, res) => {
	try {
		const productTaga = await product.create(req.body);
		res.status(200).json(productTag);
	}
	catch (err) {
		res.status(500).json(err);
	}
});

// Delete a productTag
router.delete('/:id', async (req, res) => {
	try {
		const productTag = await product.destroy({
			where: {
				id: req.params.id
			}
		});
		if (!productTag) {
			res.status(404).json({ message: 'productTag not found' });
			return;
		}
	}
	catch (err) {
		res.status(500).json(err);
	}
});


module.exports = router;
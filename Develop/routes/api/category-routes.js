const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/Category/Product/models', (req, res) => {
  res.send('Catagories and Products!')
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id/Category/products', (req, res) => {
  res.send('Category found!')
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/Category2', (req, res) => {
  res.send('new category created!')
  // create a new category
});

router.put('/Category/:userID', (req, res) => {
  const user = getUser(req.params.userId)

  if (!user) return res.status(404).json({})
 
  user.name = req.body.name
  res.json(user)
 });

  // update a category by its `id` value


router.delete('/:Product', (req, res) => {
  req.services.Product.removeItem(req.params.Product, ajaxUtil.getResponseFn(res));
});
  // delete a category by its `id` value


module.exports = router;

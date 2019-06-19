const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const productsController = require('../controllers/products');

// /admin/add-product => GET
// router.get('/add-product', (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
// });

// uncomment for pug template
// /admin/add-product => GET
// router.get('/add-product', (req, res, next) => {
//   res.render('add-product', {
//     pageTitle: 'Add Product',
//     path: '/admin/add-product',
//   });
// });

//uncomment for handle bar template

router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;

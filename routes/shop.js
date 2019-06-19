const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const productsController = require('../controllers/products');

const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// });

//uncomment for handle bar template

router.get('/', productsController.getProducts);

// uncomment for pug template
// router.get('/', (req, res, next) => {
//   const products = adminData.products;
//   res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
// });

module.exports = router;

const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// });

//uncomment for handle bar template

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

// uncomment for pug template
// router.get('/', (req, res, next) => {
//   const products = adminData.products;
//   res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
// });

module.exports = router;

const express = require('express');

const adminData = require('./admin');

const router = express.Router();

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

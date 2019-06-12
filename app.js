const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

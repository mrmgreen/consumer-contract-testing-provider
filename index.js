const app = require('express')();
const bodyParser = require('body-parser');
const port = 1111;

const { createVoucher, getVoucher } = require('./controllers/vouchers');
const { product, products } = require('./controllers/product');
const { setup } = require('./controllers/setup');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/vouchers/:voucherId', getVoucher);
app.post('/vouchers', createVoucher);

app.get('/product/:productId', product);
app.get('/products', products);

app.post('/test/setup', setup);

app.listen(port, () => console.log(`you are live Johnny Five... on port ${port}`));  
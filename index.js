const app = require('express')();
const bodyParser = require('body-parser');
const port = 1111;

const { createVoucher, getVoucher } = require('./controllers/vouchers');
const { product, products } = require('./controllers/product');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/vouchers/:voucherId', getVoucher);

app.get('/product/:productId', product);
app.get('/products', products);

app.post('/vouchers', createVoucher);

app.post('/test/setup', (req,res) => {
  if(req.body.consumer === "MyConsumer") {
    if(req.body.state === 'i have a voucher with a matching id') {
    
    }
  }
});

app.listen(port, () => console.log(`you are live Johnny Five... on port ${port}`));  
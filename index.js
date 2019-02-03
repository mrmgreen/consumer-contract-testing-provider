const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/users', (req,res) => res.json(JSON.stringify({ name: 'Dave'})))
app.get('/vouchers/:voucherId', (req,res) => { 
  if (req.params.voucherId === '1234') {
    return res.json({ promotionId: 1234, primaryProductId: 9999 });
  }
  else {
    res.status(404).end();
  }
});

app.post('/vouchers', (req,res) => {
  const voucher = req.body;
  if (voucher.code === 'MYENTSVOUCHER' && voucher.action === "ADD") {
    return res.status(201).json({voucherId:6789}); 
  }
  res.status(400).end();
});

app.listen(1111, () => console.log('you are live Johnny Five'));  
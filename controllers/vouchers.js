const { vouchers } = require('../db/vouchers');

function getVoucher(req,res) {
  const voucherIndex = vouchers.findIndex(voucher => {
    return voucher.voucherId === req.params.voucherId
  });

  if (voucherIndex === -1) return res.status(404).end();
  const { promotionId, primaryProductId } = vouchers[voucherIndex];

  res.json({ promotionId, primaryProductId });
}

function createVoucher(req,res) {
  const voucher = req.body;
  if (voucher.code === 'MYENTSVOUCHER' && voucher.action === "ADD") {
    return res.status(201).json({voucherId:6789}); 
  }
  res.status(400).end();
}

module.exports = { createVoucher, getVoucher }
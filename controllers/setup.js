function setup (req, res) {
  if (req.body.consumer === 'MyConsumer') {
    if (req.body.state === 'I have a voucher with a matching id') {
      console.log('Expecting a matching voucherId')
      res.end()
    }
  }
  console.log('Setup state not recognised', req.body.state)
  res.end()
}

module.exports = { setup }

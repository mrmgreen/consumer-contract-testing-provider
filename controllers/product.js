const C_3P0 = {
  available: true,
  'business_id': 'C_3P0',
  category: 'ENTERTAINMENT',
  price: '15',
  'static_id': 'ENTERTAINMENT_SUBSCRIPTION'
}

function checkPPT (proposition, provider, territory) {
  if (proposition === 'tv' && provider === 'tv' && territory === 'gb') {
    return true
  }
  return false
}

function product (req, res) {
  const { 'x-proposition': proposition, 'x-provider': provider, 'x-territory': territory } = req.headers

  if (checkPPT(proposition, provider, territory) === false) return res.status(400).end()

  if (req.params.productId === 'C_3P0') {
    return res.json(C_3P0)
  } else {
    return res.status(404).end()
  }
}

function products (req, res) {
  const { 'x-proposition': proposition, 'x-provider': provider, 'x-territory': territory } = req.headers

  if (checkPPT(proposition, provider, territory) === false) return res.status(400).end()

  return res.json({ products: [C_3P0] })
}

module.exports = { product, products }

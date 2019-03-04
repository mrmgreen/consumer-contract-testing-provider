'use strict'

const { Verifier } = require('@pact-foundation/pact')

describe('Pact Verification for Products', () => {
  it('validates the expectations of Matching Service', () => {
    const opts = {
      stateHandlers: {
        'i have a product with the product id': () => {
          console.log('Add product id to db if using db')
          return Promise.resolve('Product added to db')
        }
      },
      providerBaseUrl: 'http://localhost:1111', // where your service will be running during the test, either staging or localhost on CI
      pactBrokerUrl: 'http://localhost',
      provider: 'ProductsManager',
      publishVerificationResult: true,
      providerVersion: '1.0.0',
      timeout: 10000
    }

    return new Verifier(opts).verifyProvider()
      .then(() => {
        console.log('success')
        process.exit(0)
      })
      .catch((error) => {
        console.log('failed', error)
        process.exit(1)
      })
  })
})

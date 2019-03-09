import { Verifier } from '@pact-foundation/pact'

describe('Pact Verification for Products', () => {
  it('validates the expectations of Matching Service', async () => {
    const opts = {
      stateHandlers: {
        'i have a product with the product id': () => {
          console.log('Add product id to db if using db')
          return Promise.resolve('Product added to db')
        }
      },
      providerBaseUrl: 'http://localhost:1111',
      pactBrokerUrl: 'http://localhost',
      provider: 'ProductsManager',
      publishVerificationResult: true,
      providerVersion: '1.0.0',
      timeout: 10000
    }

    try {
      await new Verifier(opts).verifyProvider()
      console.log('success')
      process.exit(0)
    } catch (e) {
      console.log('failed', e)
      process.exit(1)
    }
  })
})

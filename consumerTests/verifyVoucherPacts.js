'use strict'

const { Verifier } = require('@pact-foundation/pact')

describe('Pact Verification for Vouchers', () => {
  it('validates the expectations of Matching Service', () => {
    const opts = {
      stateHandlers: {
        'I have a voucher with a matching id': () => {
          console.log('Add voucher id to db if using db')
          return Promise.resolve('Voucher added to db')
        }
      },
      providerBaseUrl: 'http://localhost:1111',
      pactBrokerUrl: 'http://localhost',
      provider: 'VoucherManager',
      publishVerificationResult: true,
      providerVersion: '1.0.0',
      timeout: 10000
    }

    return new Verifier(opts).verifyProvider()
      .then(output => {
        console.log('success', output)
        process.exit(0)
      })
      .catch((error) => {
        console.log('failed', error)
        process.exit(1)
      })
  })
})

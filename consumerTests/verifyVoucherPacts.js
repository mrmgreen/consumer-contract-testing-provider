import { Verifier } from '@pact-foundation/pact'

describe('Pact Verification for Vouchers', () => {
  it('validates the expectations of Matching Service', async () => {
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

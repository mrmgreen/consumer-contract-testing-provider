'use strict'

const pact = require('@pact-foundation/pact-node')

const opts = {
  providerBaseUrl: 'http://localhost:1111', // where your service will be running during the test, either staging or localhost on CI
  providerStatesSetupUrl: 'http://localhost:1111/test/setup', // the url to call to set up states
  pactBrokerUrl: 'http://localhost',
  provider: 'VoucherManager',
  publishVerificationResult: true,
  providerVersion: '1.0.0',
  timeout: 10000
}

pact.verifyPacts(opts)
.then(() => {
  console.log('success')
  process.exit(0)
})
.catch((error) => {
  console.log('failed', error)
  process.exit(1)
});
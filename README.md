This repo is part of a proof of concept into Consumer Driven Contract Tests. The project consists of a javascript Consumer, a Node Provider and a Pact Broker.

The project uses Pact as the CDC framework.

The Consumer tests spin up a Pact stubbed Provider to interact with the Consumer. Interactions, between the Provider and Consumer, form the basis of the Pact file, which is a Json file created once the tests are complete. 

These Pacts, of which there will be one per provider are then published to the Broker.

When the Provider tests are run, they will pull the Pact files from the Broker and verify the contracts against the Provider application.

Once the Provider tests are complete, the Provider will update the Broker with the results.

Accompanying Consumer project: https://github.com/mrmgreen/consumer-contract-testing-consumer

# Provider of the API
POC Consumer driven contract testing - Provider/server implementation

## Pact Broker
For the Pact broker I am using the Pact docker image https://hub.docker.com/r/dius/pact-broker

The Pact broker depends on a Postgres instance. There is a docker compose within the Pact broker repo that spins up pact and Postgres: https://github.com/DiUS/pact_broker-docker#running-with-docker-compose.

After `docker-compose up` command. You can run curl localhost to interact with the broker.

## Is it safe to deploy
Used in CI/CD pipepline to safely deploy the Provider. The command below queries the Broker to see if the Provider has successfully verified the Consumer contract.

Run `yarn can-i-deploy:<service to deploy>`
Service to deploy could be voucher or products manager.

This will query the broker and exit 1 or 0 depending on the result. It also provides a table as std out with details from the broker.

## Setting up provider state
Provider states can be setup using stateHandlers which are objects passed into the options for the Verifier. 

Refer to verifyVoucherPacts.

They are run before the verification tests and exist so that the provider can setup any state that the Consumer expects. e.g. voucher 1234 exists. 
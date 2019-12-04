# AWS Serverless Node.js Boiler 🧡☁️

A Serverless starter that adds ES7 syntax, serverless-offline, linting, environment variables, and unit test support. Built from the [Serverless Stack](http://serverless-stack.com) guide.

## Setup ~ Config
+ `npm i`

## API endpoint tests
+ `sls invoke local --function create --path mocks/create-event.json`
+ `sls invoke local --function get --path mocks/get-event.json`
+ `sls invoke local --function update --path mocks/update-event.json`
+ `sls invoke local --function delete --path mocks/delete-event.json`
These are directly related to the HTTP methods you'd expect from a traditional backend API service that's _creating_, _retrieving_, _editing_, & _deleting_ records.

+ `sls invoke local --function list --path mocks/list-event.json`
List mocks the return of all of the user's records.

### Bootstrapped from This Project

- Open a [new issue](https://github.com/AnomalyInnovations/serverless-nodejs-starter/issues/new) if you've found a bug or have some suggestions.
- Or submit a pull request!
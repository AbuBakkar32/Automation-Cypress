# Cypress Automation Project
This project is a simple example of how to use Cypress for automation testing. The project is comprehensive application where i try to cover all things that we need to during Automation testing.

## Installation
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run cypress:open` to open the Cypress Test Runner
4. Click on the test file to run the tests
5. Run `npm run cypress:run` to run the tests in headless mode
6. Run `npm run cypress:report` to generate the mochawesome report
7. Run `npm run cypress:report:open` to open the mochawesome report
8. Run `npm run cypress:report:merge` to merge the mochawesome reports
9. Run `npm run cypress:report:generate` to generate the mochawesome report after merging the reports
10. Run `npm run cypress:report:open:merged` to open the merged mochawesome report
11. Run `npm run cypress:report:clean` to clean the mochawesome reports

## Test Cases
1. Login Test
2. Different type to API test (simple auth, token auth, auth2 etc)
3. UI Test
4. Performance Test
5. End-to-End Test
6. Jenkins Integration
7. Work with POM (Page Object Model)
8. Work with fixtures

## Folder Structure
1. fixtures: Contains the test data
2. e2e: Contains the test files
3. support: Contains the custom commands and other support files

## Cypress Dashboard
1. Create an account on the Cypress Dashboard
2. Run `npm run cypress:open` to open the Cypress Test Runner
3. Click on the test file to run the tests
4. Click on the Dashboard link to view the test results
5. Run `npm run cypress:run` to run the tests in headless mode

## Cypress CI
1. Create an account on the CI service (e.g. Jenkins)
2. Create a new job
3. Add the following commands to the job:
```
npm install
npm run cypress:run
```
4. Build the job
5. View the test results


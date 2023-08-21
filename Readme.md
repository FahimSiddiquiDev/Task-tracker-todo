# Task tracker todo
An RESTFul application allows other apps/front-end to consume REST APIs written to manage tasks ie: create Task, update Task, delete Task for a user and fetch all the tasks.

## How to run
- `yarn install`
- `yarn build`
- `yarn start`
- `yarn lint` (static code analysis)

## Tools/approaches selected:
- NodeJs & Typript
- sqlite3 for database
- jest for testing-framework
- REST apis to communicate to outside world
- express - webapp framework (app, routing)
- Clean code architecture ( https://mannhowie.com/clean-architecture-node )
- zod for schema validation
- bunyan as logging framework
- basic-auth for auth purpose, note: should never be used in production, instead use JWT based auth.
- eslint for static code analysis(at compile time).


## Identified major entities/domains for this application (could be two separate service)
- Task
- User


## Business Assumptions
- Front-end/other apps to provide basic-auth credentials to be able to consume API
- User entity was not created but kept in mind that each task operation will be associated with a user
- deadline is an string attribute but it could an object with more details

## Technical Assumptions
- Only a few(necessary) endpoints are created in REST (it could be GRAPHQL as well but it will take more time)
- Test cases were not covered till 100%, only shown the way to mock functionalities.
- Schema validation demostrated, could be improved
- Followed clean code architecture to make module as clear/separate/detachable as possible

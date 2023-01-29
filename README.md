# Personal Budget

## Table of contents

- [Personal Budget](#personal-budget)
  - [Table of contents](#table-of-contents)
  - [General Information](#general-information)
  - [Technologies](#technologies)
  - [Project Objectives](#project-objectives)
  - [Setup](#setup)
  - [Endpoints](#endpoints)
  - [UI/UX](#uiux)

## General Information

This is a practice Back-end Engineer project. For this project, I built an API that allows clients to create and manage a personal budget.

## Technologies

- JavaScript
- Node.js
- Express.js
- Mocha
- HTML & CSS
- PostgreSQL

## Project Objectives

- Build an API using Node.js and Express
- Test using Mocha
- Be able to create, read, update, and delete envelopes
- Create endpoint(s) to update envelope balances
- Use Git version control to keep track of works
- Use the command line to navigate your files and folders
- Use Postman to test API endpoints
- Use HTML and CSS to display user interface
- Use PostgreSQL and Postbird to set up and create databases and tables
- Use PostgreSQL queries to store, retrieve, update and delete users'data

## Setup

In order to run the program, you need to install Node.js and set up PostgreSQL database on your computer:

- Follow this post (<https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/>) to set up the environment
- Once installed, you have to set up the database follow the snippets `/app/database/database_snippets.sql`
- After that, you can then start the Express server by typing `node server.js`

## Endpoints

Once you have the server up and running, the following end points will be reachable in `http://localhost:4001/`:

GET

- `/api/users` - returns all users
- `/api/users/:id` - returns user by id
- `/api/envelope/:id` - returns envelope by id

POST

- `/api/users/new` - creates new user from the data in body of request

PUT

- `/api/users/info/:id` - updates user info
- `/api/envelope/update/:id` - updates envelope

DELETE

- `/api/users/delete/:id` - delete user's information and envelope

## UI/UX

The project's UI and UX are currently under development.

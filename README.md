# Personal Budget

## Table of contents

- [Personal Budget](#personal-budget)
  - [Table of contents](#table-of-contents)
  - [General Information](#general-information)
  - [Technologies](#technologies)
  - [Project Objectives](#project-objectives)
  - [Setup](#setup)
  - [Endpoints](#endpoints)
  - [Progress](#progress)

## General Information

This is a practice Back-end Engineer project. For this project, I built an API that allows clients to create and manage a personal budget.

## Technologies

- JavaScript
- Node.js
- Express.js
- HTML & CSS

## Project Objectives

- Build an API using Node.js and Express
- Be able to create, read, update, and delete envelopes
- Create endpoint(s) to update envelope balances
- Use Git version control to keep track of works
- Use the command line to navigate your files and folders
- Use Postman to test API endpoints
- Use HTML and CSS to display user interface

## Setup

In order to run the program, you need to install Node.js on your computer:

- [Download](https://nodejs.org/en/download/) the binaries
- Once installed, you can then start the Express server by typing `node server.js`

## Endpoints

Once you have the server up and running, the following end points will be reachable in `http://localhost:4001/`:

GET

- `/api/envelopes` - returns all envelopes
- `/api/envelopes?id={id}` - returns an envelope by id

POST

- `/api/envelopes/users?name={name}&salary={salary}` - creates a new user
- `/api/envelopes/categories?id={id}&category={category}&amount={amount}` - create or update a category

PUT

- `/api/envelopes/users?id={id}&name={name}` - updates user's name
- `/api/envelopes/users?id={id}&salary={salary}` - updates user's salary
- `/api/envelopes/users?id={id}` - calculates user's balance base on salary and expenses, then update the balance

DELETE

- `/api/envelopes/users/id={id}` - deletes an envelope by id
- `/api/envelopes/categories?id={id}&category={category}` - deletes a category

## Progress

The project's UI and UX is currently under development:

- Adding Front-end features
- Fixing bugs

The project's database is under development.

- Adding PostgreSQL database

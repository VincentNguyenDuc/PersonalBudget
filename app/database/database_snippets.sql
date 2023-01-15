CREATE TABLE users (
    id INTEGER SERIAL PRIMARY KEY,
    name varchar(50) NOT NULL,
    salary FLOAT NOTNULL,
    email varchar(50) NOT NULL,
    age INTEGER,
    jobs varchar(30),
    address varchar(70)
);
CREATE TABLE categories (
    user_id INTEGER REFERENCES users(id),
    housing FLOAT,
    groceries FLOAT,
    utilities FLOAT,
    transportation FLOAT,
    entertainment FLOAT,
    emergencies FLOAT,
    shopping FLOAT,
    saving FLOAT,
);
alter table categories
alter column housing
set default 0;
alter table categories
alter column groceries
set default 0;
alter table categories
alter column utilities
set default 0;
alter table categories
alter column transportation
set default 0;
alter table categories
alter column entertainment
set default 0;
alter table categories
alter column emergencies
set default 0;
alter table categories
alter column shopping
set default 0;
alter table categories
alter column saving
set default 0;
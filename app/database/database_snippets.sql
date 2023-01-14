CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name varchar(50) NOTNULL,
    salary FLOAT NOTNULL,
    email varchar(50) NOTNULL,
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
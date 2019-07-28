CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id SERIAL PRIMARY KEY,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false
);
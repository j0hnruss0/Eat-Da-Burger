USE jqkyi3w8mr9gwwmx;

CREATE TABLE burgers (
	id SERIAL PRIMARY KEY,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false
);
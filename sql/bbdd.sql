DROP DATABASE portfolio;
CREATE DATABASE portfolio;
USE portfolio;

CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25),
    phone_number VARCHAR(15),
    email VARCHAR(50),
    message TEXT
);
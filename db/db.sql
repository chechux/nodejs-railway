DROP DATABASE IF EXISTS usersdb;
CREATE DATABASE usersdb CHARSET utf8mb4;
USE usersdb;

CREATE table users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
)
CREATE DATABASE IF NOT EXISTS intern;

USE intern;

CREATE TABLE IF NOT EXISTS user(
    user_id int not null AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    email varchar(100),
    password varchar(100),
    cpassword varchar(100),
    PRIMARY KEY (user_id)
);
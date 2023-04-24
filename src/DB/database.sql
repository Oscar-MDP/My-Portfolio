CREATE DATABASE products;

USE products;
CREATE TABLE item(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(35) NOT NULL,
    description TEXT NOT NULL,
    mark varchar(25),
    price FLOAT,
    stock INT 
);

DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100),
    department_name VARCHAR(100),
    price DECIMAL(10, 4),
    stock_quantity INTEGER(10),
    product_sales INTEGER(100)
);

CREATE TABLE departments (
    department_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100),
    over_head_costs INTEGER(100)
)

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
	VALUES ("Earl Grey", "black tea", 10.00, 48, 820),
    ("Jasmine", "green tea", 10.00, 45, 950),
    ("Matcha", "green tea", 8.00, 70, 440),
    ("English Breakfast", "black tea", 9.00, 60, 40),
    ("Oolong", "other tea", 15.00, 15, 150),
    ("Chai", "black tea", 8.00, 75, 50),
    ("Longjing", "green tea", 15.00, 60, 88),
    ("Darjeeling", "other tea", 15.00, 88, 40),
    ("Ujeon", "green tea", 10.00, 95, 150),
    ("Assam", "black tea", 15.00, 15, 50);


SELECT * FROM departments;

INSERT INTO departments (department_name, over_head_costs)
    VALUES ("black tea", 10),
    ("green tea", 30),
    ("other tea", 40);


    
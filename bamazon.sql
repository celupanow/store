
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100),
    department_name VARCHAR(100),
    price DECIMAL(10, 4),
    stock_quantity INTEGER(10)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("Assam", "tea", 15.00, 20);
    
ALTER TABLE products
	MODIFY COLUMN price DECIMAL(10,2);

UPDATE products
	SET department_name = "black tea"
    WHERE item_id = 10;
    
SELECT * FROM products;


    
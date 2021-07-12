-- Create database sales_morning
CREATE DATABASE sales_morning;

-- Go to sales_morning database, so all code will be in the sales morning_database
USE sales_morning;

-- Create table suppliers 
CREATE TABLE suppliers (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL
);

-- Create table goods 
CREATE TABLE goods (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     price DECIMAL NOT NULL,
     id_supplier BIGINT UNSIGNED NOT NULL,
     FOREIGN KEY (id_supplier) REFERENCES suppliers(id)
);

-- Create table customers 
CREATE TABLE customers (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL
);

-- Create table transactions 
CREATE TABLE transactions (
    id BIGINT UNSIGNED auto_increment NOT NULL PRIMARY KEY,
    id_good BIGINT UNSIGNED NOT NULL,
    id_customer BIGINT UNSIGNED NOT NULL,
    time DATETIME DEFAULT now() NOT NULL,
    quantity INT NOT NULL,
    total DECIMAL NOT NULL,
    FOREIGN KEY (id_good) REFERENCES goods(id),
    FOREIGN KEY (id_customer) REFERENCES customers(id)
)

-- Insert Data
insert into customers(name) values ('Gema'), ('Rezki'), ('David')
INSERT INTO customers(name) VALUES ('Fuad')

INSERT INTO suppliers(name) VALUES ("Khay"), ("Heru"), ("Siti")

INSERT INTO goods(name, price, id_supplier) VALUES 
	("Pepsodent", 14500, 1),
	("Lifeboy", 24600, 2),
	("Clear", 44500, 3)

INSERT INTO transactions(id_good, id_customer, quantity, total) VALUES 
	(1, 1, 1, 14500),
	(2, 2, 2, 49200),
	(3, 3, 3, 133500)
	
-- Select Data
SELECT * FROM customers
SELECT * FROM suppliers
SELECT * FROM goods
SELECT id, quantity, total FROM transactions

-- Select Data WHERE
SELECT * FROM goods WHERE price=14500
SELECT * FROM goods WHERE name LIKE '%pep%'

-- Order By
SELECT * FROM goods ORDER BY price DESC
SELECT * FROM goods ORDER BY price

-- Delete Data
DELETE FROM transactions WHERE id=1
DELETE FROM transactions WHERE id=1 OR id=2
DELETE from transactions WHERE `id` IN (1, 2 , 3);

-- Drop Table
DROP TABLE transactions

-- Update Data
UPDATE customers SET name="Kim" WHERE id=1
UPDATE goods SET name="Bayu", price=20000 WHERE id=1

-- Select Limit
SELECT * FROM goods LIMIT 1

-- JOIN
SELECT t.id, g.name as goodName, c.name as customer, s.name as supplier, t.time, t.quantity, t.total
FROM transactions t
JOIN goods g ON t.id_good = g.id
JOIN customers c ON c.id = t.id_customer
JOIN suppliers s ON s.id = g.id_supplier 
WHERE t.id=5

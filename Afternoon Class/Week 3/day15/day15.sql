-- Create Database
CREATE DATABASE sales_afternoon;

-- Go to sales_afternoon database
USE sales_afternoon;

-- Create suppliers table
CREATE TABLE suppliers (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL
);

-- Create goods table
CREATE TABLE goods (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     price DECIMAL NOT NULL,
     id_supplier BIGINT UNSIGNED NOT NULL,
     FOREIGN KEY (id_supplier) REFERENCES suppliers(id)
);

-- Create customers table
CREATE TABLE customers (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL
);

-- Create transactions table
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

-- Insert data
INSERT INTO customers(name) VALUES ('Gilang')
INSERT INTO customers(name) VALUES ('Freddy'), ('Rangga')

INSERT INTO suppliers(name) VALUES ('Amri'), ('Yhido'), ("Adib")

INSERT INTO goods(name, price, id_supplier) VALUES
	('Pepsodent', 14500, 1),
	("Lifeboy", 24600, 2),
	("Clear", 44500, 3)
	
INSERT INTO transactions(id_good, id_customer, quantity, total) VALUES 
	(4, 1, 1, 14500),
	(5, 2, 2, 49200),
	(6, 3, 3, 133500)

-- Select
SELECT * FROM customers
SELECT id, name, price FROM goods
SELECT * FROM suppliers
SELECT * FROM transactions
	
-- Select Where
SELECT * FROM goods WHERE id=5
SELECT * FROM goods WHERE name LIKE '%life%'
	
-- Select Order By
SELECT * FROM customers ORDER BY name
SELECT * FROM goods ORDER BY price DESC
	
-- Delete Data
DELETE FROM transactions WHERE id=10
DELETE FROM transactions WHERE id=11 OR id=12
DELETE FROM transactions WHERE id IN (11, 12)

-- Drop table
DROP TABLE goods
	
-- Update Data
UPDATE customers SET name="Gilang Farrasy" WHERE id=1
UPDATE goods SET name="Pepso", price=14500 WHERE id=4	

-- Select Limit
SELECT * FROM goods ORDER BY name DESC LIMIT 1

-- JOIN
SELECT t.id, g.name as goodName, c.name as customer, s.name as supplier, t.time, t.quantity, t.total
FROM transactions t 
JOIN goods g ON g.id = t.id_good 
JOIN customers c ON t.id_customer = c.id
JOIN suppliers s ON s.id = g.id_supplier 
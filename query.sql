DROP DATABASE IF EXISTS magazzino02;
CREATE DATABASE magazzino02;
USE magazzino02;

CREATE TABLE orders (
	id INT AUTO_INCREMENT PRIMARY KEY,
	cliente VARCHAR(255) NOT NULL,
	prodotto VARCHAR(255) NOT NULL,
	quantita INT NOT NULL,
	data_ordine DATE NOT NULL
);

INSERT INTO orders VALUES
(default, "Mirco Stefanelli", "avocado", 1, "2026-02-16"),
(default, "Luca Antonini", "pasta", 2, "2026-02-17"),
(default, "Marta Ghiriani", "pizza", 3, "2026-02-16"),
(default, "Giovanna Gnomi", "valigia", 1, "2026-02-18");

SELECT * FROM orders;
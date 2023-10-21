create database sakila_actors;

use sakila_actors;

CREATE TABLE `actor` (
  `actor_id` smallint(5) UNSIGNED NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `actor`
  ADD PRIMARY KEY (`actor_id`);
  
ALTER TABLE `actor`
  MODIFY `actor_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

drop database sakila_actors;

INSERT INTO actor (first_name, last_name) VALUES
('Oscar', 'Menacho'),
('Midory', 'Vacaflores'),
('John', 'Doe'),
('Jane', 'Smith'),
('Michael', 'Johnson'),
('Emily', 'Brown'),
('William', 'Jones'),
('Sarah', 'Wilson'),
('James', 'Davis'),
('Mary', 'Martinez'),
('David', 'Garcia'),
('Jennifer', 'Rodriguez'),
('Robert', 'Martinez'),
('Linda', 'Lopez'),
('Charles', 'Hernandez'),
('Patricia', 'Gonzalez'),
('Joseph', 'Perez'),
('Elizabeth', 'Sanchez'),
('Thomas', 'Torres'),
('Margaret', 'Rivera'),
('Daniel', 'Kim'),
('Susan', 'Wang'),
('Paul', 'Chen'),
('Jessica', 'Liu'),
('Donald', 'Park'),
('Karen', 'Lee'),
('George', 'Nguyen'),
('Betty', 'Tran'),
('Edward', 'Gomez'),
('Lisa', 'Johnson'),
('Richard', 'Brown'),
('Nancy', 'Davis'),
('Frank', 'Miller'),
('Karen', 'Moore'),
('Steven', 'Gonzalez'),
('Deborah', 'Clark'),
('Kenneth', 'Hall'),
('Lisa', 'Adams'),
('David', 'Wright'),
('Susan', 'Martin'),
('Joseph', 'Lewis'),
('Carol', 'Harris'),
('Mark', 'Walker'),
('Laura', 'Young'),
('Brian', 'Scott'),
('Kimberly', 'King'),
('Scott', 'Hall'),
('Donna', 'Mitchell'),
('Eric', 'Green'),
('Michelle', 'White'),
('Ronald', 'Turner'),
('Sharon', 'Baker');
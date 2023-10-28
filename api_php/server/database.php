<?php

$host = "localhost";
$username = "root";
$password = "";
$database = "sakila_actors";
$port = 3310;

$connection = new mysqli($host, $username, $password, $database, $port);

if ($connection->connect_error) {
    die("Database connection error: ". $connection->connect_error);
}


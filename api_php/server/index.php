<?php

require('./database.php');
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
ini_set('display_errors', 1);
error_reporting(E_ALL);

$request = $_SERVER['REQUEST_URI'];

if (strpos($request, '/api/') === 0) {
    include('api_php' . $request);
}

$connection->close();

?>
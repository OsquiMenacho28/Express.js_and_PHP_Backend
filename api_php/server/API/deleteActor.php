<?php

include_once('../database.php');
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $actor_id = $_GET['id'];
    // echo "actor_id: " . $actor_id;
    if (is_numeric($actor_id)) {
        $stmt = $connection->prepare("DELETE FROM actor WHERE actor_id = ?");
        $stmt->bind_param('i', $actor_id);
        if ($stmt->execute()) {
            echo json_encode(
                ["message" => "Actor with ID: '$actor_id' successfully removed."]
            );
        } else {
            echo json_encode(
                ["message" => "Error removing actor with ID: '$actor_id'."]
            );
        }
    } else {
        echo json_encode(
            ["message" => "Error, invalid actor ID."]
        );
    }
} else {
    echo json_encode(
        ["message" => "Method not allowed. A DELETE request is required."]
    );
}

?>
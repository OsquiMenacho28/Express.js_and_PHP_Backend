<?php

include_once('../database.php');
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
ini_set('display_errors', 1);
error_reporting(E_ALL);

/**
 * @OA\Get(
 * path="/api_php/server/API/getActorById.php",
 * summary="Get an actor by ID",
 * tags={"Actors"},
 * @OA\Parameter(
 *     name="id",
 *     in="query",
 *     required=true,
 *     description="ID of the actor to retrieve",
 *     @OA\Schema(type="integer"),
 * ),
 * @OA\Response(response="200", description="Actor retrieved successfully"),
 * @OA\Response(response="404", description="Actor not found"),
 * )
 */

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $actor_id = $_GET['id'];
    // echo "actor_id: " . $actor_id;
    if (is_numeric($actor_id)) {
        $stmt = $connection->prepare("SELECT * FROM actor WHERE actor_id = ?");
        $stmt->bind_param('i', $actor_id);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $actor = $result->fetch_assoc();
            echo json_encode($actor);
        } else {
            echo json_encode(
                ["message" => "Actor with ID: '$actor_id' doesn't exist."]
            );
        }
    } else {
        echo json_encode(
            ["message" => "Error, invalid actor ID."]
        );
    }
} else {
    echo json_encode(
        ["message" => "Method not allowed. A GET request is required."]
    );
}

?>
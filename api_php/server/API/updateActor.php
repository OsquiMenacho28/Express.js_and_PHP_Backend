<?php

include_once('../database.php');
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
ini_set('display_errors', 1);
error_reporting(E_ALL);

/**
 * @OA\Put(
 * path="/api_php/server/API/updateActor.php",
 * summary="Update an existing actor",
 * tags={"Actors"},
 * @OA\RequestBody(
 *     required=true,
 *     @OA\JsonContent(ref="#/components/schemas/Actor"),
 * ),
 * @OA\Response(response="200", description="Actor updated successfully"),
 * @OA\Response(response="400", description="Invalid data provided"),
 * @OA\Response(response="500", description="Error updating actor"),
 * )
 */

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $actor_id = (int)$_GET['id'];
    $data = json_decode(file_get_contents("php://input"));
    // echo json_encode($data);
    // echo json_encode($actor_id);
    if (is_numeric($actor_id) && isset($data->first_name) && isset($data->last_name)) {
        $stmt = $connection->prepare("UPDATE actor SET first_name = ?, last_name = ? WHERE actor_id = ?");
        $stmt->bind_param('ssi', $data->first_name, $data->last_name, $actor_id);
        if ($stmt->execute()) {
            echo json_encode(
                ["message" => "Actor with ID: '$actor_id' updated successfully."]
            );
        } else {
            echo json_encode(
                ["message" => "Error updating actor with ID: '$actor_id'."]
            );
        }
     } else {
        echo json_encode(
            ["message" => "Incomplete data. actor_id, first_name and last_name are required."]
        );
    }
}  else {
    echo json_encode(
        ["message" => "Method not allowed. A PUT request is required."]
    );
}

?>
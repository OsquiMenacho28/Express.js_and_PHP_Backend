<?php

include_once('../database.php');
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
ini_set('display_errors', 1);
error_reporting(E_ALL);

/**
 * @OA\Post(
 * path="/api_php/server/API/createActor.php",
 * summary="Create a new actor",
 * tags={"Actors"},
 * @OA\RequestBody(
 *     required=true,
 *     @OA\JsonContent(ref="#/components/schemas/Actor"),
 * ),
 * @OA\Response(response="200", description="Actor created successfully"),
 * @OA\Response(response="400", description="Invalid data provided"),
 * @OA\Response(response="500", description="Error creating actor"),
 * )
 */

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    // echo json_encode($data);
    if (isset($data->first_name) && isset($data->last_name)) {
        $stmt = $connection->prepare("INSERT INTO actor (first_name, last_name) VALUES (?, ?)");
        $stmt->bind_param('ss', $data->first_name, $data->last_name);
        if ($stmt->execute()) {
            echo json_encode(
                ["message" => "Actor '$data->first_name $data->last_name' was created successfully."]
            );
        } else {
            echo json_encode(
                ["message" => "Error creating actor '$data->first_name $data->last_name'"]
            );
        }
    } else {
        echo json_encode(
            ["message" => "Incomplete data. first_name and last_name are required."]
        );
    }
} else {
     echo json_encode(
        ["message" => "Method not allowed. A POST request is required."]
    );
}

?>
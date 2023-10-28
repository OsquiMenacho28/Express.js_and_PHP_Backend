<?php

include_once('../database.php');
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
ini_set('display_errors', 1);
error_reporting(E_ALL);

// $sql = "SELECT * FROM actor";
// $result = $connection->query($sql);
// $actors = array();

/**
 * @OA\Get(
 *     path="/api_php/server/API/getActors.php",
 *     summary="Get a list of actors",
 *     tags={"Actors"},
 *     @OA\Response(
 *         response="200",
 *         description="Success"
 *     ),
 *     @OA\Response(
 *         response="404",
 *         description="Not found"
 *     )
 * )
 */

// Pagination
$items_per_page = 10;
$current_page = isset($_GET['page']) ? $_GET['page'] : 1;

$offset = ($current_page - 1) * $items_per_page; // Calculate the offset

$sql = "SELECT * FROM actor LIMIT $offset, $items_per_page";
$result = $connection->query($sql);
$actors = array();

$total_items = $connection->query("SELECT COUNT(*) as total FROM actor")->fetch_assoc()['total'];

$total_pages = ceil($total_items / $items_per_page); // Total number of pages

// Display the results
// while ($row = $result->fetch_assoc()) {
//     echo $row['actor_id'] . ' - ' . $row['first_name'] . ' - ' . $row['last_name'] . ' - ' . $row['last_update'] . '<br>';
// }

// Generate pagination links
// for ($i = 1; $i <= $total_pages; $i++) {
//     echo "<a href='?page=$i'>$i</a> ";
// }

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $actors[] = $row;
    }
    echo json_encode(array($actors, 'currentPage'=> $current_page, 'totalPages'=> $total_pages,'totalActors'=> $total_items));
} else {
    echo "No actors found.";
}

?>
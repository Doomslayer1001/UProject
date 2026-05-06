<?php

header('Content-Type: application/json');
include '../config/db.php';

$sql = "SELECT * FROM courses ORDER BY status ASC";  // FIXED HERE

$result = $conn->query($sql);

if (!$result) {
    echo json_encode(["error" => $conn->error]);
    exit;
}

$courses = [];

while ($row = $result->fetch_assoc()) {
    $courses[] = $row;
}

echo json_encode($courses);

?>
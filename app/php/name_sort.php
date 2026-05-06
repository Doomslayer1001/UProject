<?php

header('Content-Type: application/json');
include '../config/db.php';

$order = $_GET['order'] ?? 'asc';

if ($order === "desc") {
    $sql = "SELECT * FROM courses ORDER BY course_name DESC";
} else {
    $sql = "SELECT * FROM courses ORDER BY course_name ASC";
}

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
<?php
include '../config/db.php';

$sql = "SELECT * FROM courses";
$result = $conn->query($sql);

$courses = [];

while ($row = $result->fetch_assoc()) {
    $courses[] = $row;
}

echo json_encode($courses);
?>
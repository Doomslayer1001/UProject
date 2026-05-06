<?php
    header('Content-Type: application/json');

    include '../config/db.php';

    $data = json_decode(file_get_contents("php://input"));

    $course_id = $data->course_id;

    $sql = "INSERT INTO enrollments (course_id) VALUES ($course_id)";

    if (conn->query($sql) === true) {
        echo json_encode(["status" => "enrolled"]);
    } else {
        echo json_encode(["status" => "error"]);
    }
?>
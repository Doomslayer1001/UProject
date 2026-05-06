<?php
    header('Content-Type: application/json');

    include '../config/db.php';

    $data = json_decode(file_get_contents("php://input"));

    $course_id = $data->course_id;

    $sql = "DELETE FROM enrollments WHERE course_id = $course_id";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error"]);
    }
?>
<?php
    header('Content-Type: application/json');
    include '../config/db.php';
    include 'cache_helper.php';

    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['course_id'])) {
        echo json_encode(["status" => "error"]);
        exit;
    }

    $course_id = intval($data['course_id']);

    $stmt = $conn->prepare("INSERT INTO enrollments (course_id) VALUES (?)");
    $stmt->bind_param("i", $course_id);

    if ($stmt->execute()) {
        clearCache(); 
        echo json_encode(["status" => "enrolled"]);
    } else {
        echo json_encode(["status" => "error"]);
    }
?>
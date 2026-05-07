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

    $stmt = $conn->prepare("DELETE FROM enrollments WHERE course_id = ?");
    $stmt->bind_param("i", $course_id);

    if ($stmt->execute()) {
        clearCache(); // clear Redis
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error"]);
    }
?>
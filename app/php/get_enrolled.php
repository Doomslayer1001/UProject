<?php
    header('Content-Type: application/json');
    include '../config/db.php';
    include 'cache_helper.php';

    $cacheFile = "../cache/enrolled.json";

    if ($data = getCache($cacheFile)) {
        echo json_encode($data);
        exit;
    }

    $sql = "
    SELECT c.course_id, c.course_name, c.instructor_name, c.credits
    FROM enrollments e
    JOIN courses c ON e.course_id = c.course_id
    ";

    $result = $conn->query($sql);

    $enrolled = [];

    while ($row = $result->fetch_assoc()) {
        $enrolled[] = $row;
    }

    setCache($cacheFile, $enrolled);

    echo json_encode($enrolled, JSON_PRETTY_PRINT);
?>
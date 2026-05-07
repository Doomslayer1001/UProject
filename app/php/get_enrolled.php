<?php
    header('Content-Type: application/json');

    include '../config/db.php';
    include 'cache_helper.php';

    $cacheKey = 'enrolled_courses';

    if ($data = getCache($cacheKey)) {
        echo json_encode($data, JSON_PRETTY_PRINT);
        exit;
    }

    $sql = "
    SELECT 
    c.course_id,
    c.course_name
    FROM enrollments e
    JOIN courses c ON e.course_id = c.course_id
    ";

    $result = $conn->query($sql);

    $enrolled = [];

    if ($result) {
        while ($row = $result->fetch_assoc()) {
            $enrolled[] = $row;
        }
    }

    setCache($cacheKey, $enrolled);

    echo json_encode($enrolled, JSON_PRETTY_PRINT);
?>
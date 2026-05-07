<?php
    header('Content-Type: application/json');

    include '../config/db.php';
    include 'cache_helper.php';

    $cacheKey = 'all_courses';

    if ($data = getCache($cacheKey)) {
        echo json_encode($data, JSON_PRETTY_PRINT);
        exit;
    }

    $sql = "SELECT * FROM courses";
    $result = $conn->query($sql);

    $courses = [];

    if ($result) {
        while ($row = $result->fetch_assoc()) {
            $courses[] = $row;
        }
    }

    setCache($cacheKey, $courses);

    echo json_encode($courses, JSON_PRETTY_PRINT);
?>
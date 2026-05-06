<?php
    header('Content-Type: application/json');
    include '../config/db.php';
    include 'cache_helper.php';

    $cacheFile = "../cache/all_courses.json";

    if ($data = getCache($cacheFile)) {
        echo json_encode($data);
        exit;
    }

    $sql = "SELECT * FROM courses";
    $result = $conn->query($sql);

    $courses = [];

    while ($row = $result->fetch_assoc()) {
        $courses[] = $row;
    }

    setCache($cacheFile, $courses);

    echo json_encode($courses, JSON_PRETTY_PRINT);
?>
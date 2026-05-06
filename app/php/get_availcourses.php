<?php
    header('Content-Type: application/json');
    include '../config/db.php';
    include 'cache_helper.php';

    $cacheFile = "../cache/avail_courses.json";

    if ($data = getCache($cacheFile)) {
        echo json_encode($data);
        exit;
    }

    $sql = "SELECT * FROM courses WHERE status = 'Open'";
    $result = $conn->query($sql);

    $courses = [];

    while ($row = $result->fetch_assoc()) {
        $courses[] = $row;
    }

    setCache($cacheFile, $courses);

    echo json_encode($courses, JSON_PRETTY_PRINT);
?>
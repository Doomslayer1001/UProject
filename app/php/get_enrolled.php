<?php
    include '../config/db.php';

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

    echo json_encode($enrolled);
?>
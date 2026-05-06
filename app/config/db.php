<?php
$conn = new mysqli("db", "root", "root", "course_manager");

if ($conn->connect_error) {
    die("DB ERROR: " . $conn->connect_error);
}
?>
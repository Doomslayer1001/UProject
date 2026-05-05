<?php
$host = "db";              
$user = "student_user";    
$password = "password123";
$database = "course_manager";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
CREATE DATABASE IF NOT EXISTS course_manager;

USE course_manager;

CREATE TABLE courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(255),
    instructor_name VARCHAR(255),
    credits INT,
    Status VARCHAR(255)
);

INSERT INTO courses
(course_name, instructor_name, credits, Status)
VALUES
('Web Development', 'Dr. Smith', 3, 'Open'),
('Database Systems', 'Prof. Johnson', 4, 'Closed');

CREATE TABLE enrollments (
    enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT,

    FOREIGN KEY (course_id)
    REFERENCES courses(course_id)
);
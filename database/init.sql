CREATE DATABASE IF NOT EXISTS course_manager;
USE course_manager;

CREATE TABLE courses (
  course_id INT AUTO_INCREMENT PRIMARY KEY,
  course_name VARCHAR(255),
  instructor_name VARCHAR(255),
  credits INT
);

INSERT INTO courses (course_name, instructor_name, credits) VALUES
('Web Development', 'Dr. Smith', 3),
('Database Systems', 'Prof. Johnson', 4);

CREATE TABLE enrollments (
  enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
  course_id INT
);

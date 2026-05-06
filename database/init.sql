-- Create database
CREATE DATABASE IF NOT EXISTS course_manager;
USE course_manager;

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(255) NOT NULL,
    instructor_name VARCHAR(255) NOT NULL,
    credits INT NOT NULL,
    status VARCHAR(50) NOT NULL
);

INSERT INTO courses (course_name, instructor_name, credits, status) VALUES
('Web Development', 'Dr. Smith', 3, 'Open'),
('Database Systems', 'Prof. Johnson', 4, 'Closed'),
('Data Structures', 'Dr. Lee', 3, 'Open'),
('Operating Systems', 'Dr. Brown', 4, 'Open'),
('Computer Networks', 'Prof. Davis', 3, 'Closed'),
('Software Engineering', 'Dr. Wilson', 3, 'Open'),
('Artificial Intelligence', 'Dr. Taylor', 4, 'Open'),
('Machine Learning', 'Dr. Anderson', 4, 'Closed'),
('Cyber Security', 'Prof. Thomas', 3, 'Open'),
('Mobile App Development', 'Dr. Jackson', 3, 'Open'),
('Cloud Computing', 'Dr. White', 3, 'Closed'),
('Human Computer Interaction', 'Prof. Harris', 3, 'Open'),
('Game Development', 'Dr. Martin', 3, 'Open'),
('Data Analytics', 'Dr. Thompson', 4, 'Closed'),
('Discrete Mathematics', 'Prof. Garcia', 3, 'Open'),
('Linear Algebra', 'Dr. Martinez', 3, 'Open'),
('Computer Graphics', 'Dr. Robinson', 3, 'Closed');

-- Enrollments table
CREATE TABLE IF NOT EXISTS enrollments (
    enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

-- Sample enrolled courses
INSERT INTO enrollments (course_id) VALUES
(1),
(3),
(6),
(9),
(12);
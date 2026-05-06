$(document).ready(function () {

    let courses = [];

    function displayCourses(courseList) {

        $("#myCourses tr:gt(0)").remove();

        courseList.forEach(course => {

            $("#myCourses").append(`
                <tr>
                    <td>${course.course_name}</td>
                    <td>${course.instructor_name}</td>
                    <td>${course.credits}</td>
                    <td>${course.status}</td>
                </tr>
            `);

        });

    }

    $.ajax({

        url: "../php/get_courses.php",
        method: "GET",

        success: function (data) {

            courses = data;

            displayCourses(courses);

        },

        error: function (xhr, status, error) {

            console.log(error);

        }

    });

    $("#sort").change(function () {

        let value = $(this).val();

        if (value === "az") {

            courses.sort((a, b) =>
                a.course_name.localeCompare(b.course_name)
            );

        } else {

            courses.sort((a, b) =>
                b.course_name.localeCompare(a.course_name)
            );

        }

        displayCourses(courses);

    });

});
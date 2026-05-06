$(document).ready(function () {

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

    function loadCourses(url) {

        $.ajax({
            url: url,
            method: "GET",
            cache: false,
            success: function (data) {
                displayCourses(data);
            },
            error: function (xhr, status, error) {
                console.log(error);
            }
        });

    }

    // default load
    loadCourses("../php/get_allcourses.php");

    $("#sort").change(function () {

        let value = $(this).val();

        if (value === "az") {
            loadCourses("../php/name_sort.php?order=asc");
        }

        else if (value === "za") {
            loadCourses("../php/name_sort.php?order=desc");
        }

        else if (value === "status") {
            loadCourses("../php/status_sort.php");
        }

    });

});
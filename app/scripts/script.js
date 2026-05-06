$(document).ready(function () {

    let enrolledIds = [];

    // Load enrolled courses
    $.get('/php/get_enrolled.php', function (enrolled) {

        enrolled.forEach(c => {
            $('#myCourses').append(`
                <tr>
                    <td>${c.course_id}</td>
                    <td>${c.course_name}</td>
                    <td><button onclick="dropCourse(${c.course_id})">Drop</button></td>
                </tr>
            `);

            enrolledIds.push(c.course_id);
        });

        // Load all courses (that the student is not enrolled in -> prevent dupes)
        $.get('/php/get_courses.php', function (courses) {

            courses.forEach(c => {
                if (!enrolledIds.includes(c.course_id)) {

                    $('#availableCourses').append(`
                        <tr>
                            <td>${c.course_id}</td>
                            <td>${c.course_name}</td>
                            <td><button onclick="enrollCourse(${c.course_id})">Enroll</button></td>
                        </tr>
                    `);
                }
            });

        });

    });

});


// Enroll
function enrollCourse(id) {
    $.ajax({
        url: '/php/enroll.php',
        method: 'POST',
        data: JSON.stringify({ course_id: id }),
        success: function () {
            alert("Enrolled!");
            location.reload();
        }
    });
}


// Drop
function dropCourse(id) {
    $.ajax({
        url: '/php/drop.php',
        method: 'POST',
        data: JSON.stringify({ course_id: id }),
        success: function () {
            alert("Dropped!");
            location.reload();
        }
    });
}
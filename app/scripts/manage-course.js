console.log("JS loaded");

$(document).ready(function () {
    loadCourses();
});

function loadCourses() {
    let enrolledIds = [];

    // Clear tables
    $('#myCourses tbody').empty();
    $('#availableCourses tbody').empty();

    // Load enrolled
    $.get('/php/get_enrolled.php', function (enrolled) {

        enrolled.forEach(c => {
            $('#myCourses tbody').append(`
                <tr>
                    <td>${c.course_id}</td>
                    <td>${c.course_name}</td>
                    <td>
                        <button class="remove-btn" onclick="dropCourse(${c.course_id})">
                            Drop
                        </button>
                    </td>
                </tr>
            `);

            enrolledIds.push(c.course_id);
        });

        // Load available
        $.get('/php/get_availcourses.php', function (courses) {

            courses.forEach(c => {
                if (!enrolledIds.includes(c.course_id)) {
                    $('#availableCourses tbody').append(`
                        <tr>
                            <td>${c.course_id}</td>
                            <td>${c.course_name}</td>
                            <td>
                                <button class="enroll-btn" onclick="enrollCourse(${c.course_id})">
                                    Enroll
                                </button>
                            </td>
                        </tr>
                    `);
                }
            });

        });

    });
}


// Enroll
function enrollCourse(id) {
    $.ajax({
        url: '/php/enroll.php',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ course_id: id }),
        cache: false,
        success: function () {
            loadCourses(); // no reload
        },
        error: function () {
            alert("Enroll failed");
        }
    });
}


// Drop
function dropCourse(id) {
    $.ajax({
        url: '/php/drop.php',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ course_id: id }),
        cache: false,
        success: function () {
            loadCourses(); // no reload
        },
        error: function () {
            alert("Drop failed");
        }
    });
}
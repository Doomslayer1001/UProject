console.log("JS loaded");

$(document).ready(function () {
  loadCourses();
});

function loadCourses() {
  let enrolledIds = [];

  // Clear tables
  $('#myCourses tbody').empty();
  $('#availableCourses tbody').empty();

  // Load enrolled courses
  $.ajax({
    url: '/php/get_enrolled.php',
    method: 'GET',
    cache: false,
    success: function (enrolled) {

      if (enrolled.length === 0) {
        $('#myCourses tbody').append(`
          <tr><td colspan="3">No enrolled courses</td></tr>
        `);
      }

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

        enrolledIds.push(Number(c.course_id));
      });

      // Load available courses AFTER enrolled
      $.ajax({
        url: '/php/get_availcourses.php',
        method: 'GET',
        cache: false,
        success: function (courses) {

          if (courses.length === 0) {
            $('#availableCourses tbody').append(`
              <tr><td colspan="3">No available courses</td></tr>
            `);
          }

          courses.forEach(c => {
            if (!enrolledIds.includes(Number(c.course_id))) {
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
        },
        error: function () {
          console.log("Error loading available courses");
        }
      });

    },
    error: function () {
      console.log("Error loading enrolled courses");
    }
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
      loadCourses();
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
      loadCourses();
    },
    error: function () {
      alert("Drop failed");
    }
  });
}
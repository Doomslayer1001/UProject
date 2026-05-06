console.log("JS loaded");

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

    // Load available courses
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


// Enroll course
function enrollCourse(id) {
  $.ajax({
    url: '/php/enroll.php',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ course_id: id }),
    success: function (res) {
      console.log(res);
      alert("Enrolled!");
      location.reload();
    },
    error: function (err) {
      console.error(err);
      alert("Enroll failed");
    }
  });
}


// Drop course
function dropCourse(id) {
  $.ajax({
    url: '/php/drop.php',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ course_id: id }),
    success: function (res) {
      console.log(res);
      alert("Dropped!");
      location.reload();
    },
    error: function (err) {
      console.error(err);
      alert("Drop failed");
    }
  });
}
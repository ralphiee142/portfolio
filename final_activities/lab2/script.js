const message = document.getElementById("message");
const message1 = document.getElementById("message1");
const button = document.getElementById("loadbtn");
const button1 = document.getElementById("loadbtn1");
const profile = document.getElementById("profile");
const grades = document.getElementById("grades");
const schedules = document.getElementById("schedules");
message1.style.color = "red";

button.addEventListener("click", function () {
  button.style.backgroundColor = "pink";
  button1.style.backgroundColor = "pink";
  message.innerHTML = "Loading Dashboard...";

  profile.innerHTML = "Profile Waiting...";
  grades.innerHTML = "Grades Waiting...";
  schedules.innerHTML = "Schedules Waiting...";

  const profilePromise = new Promise(function (resolve) {
    setTimeout(function () {
      profile.innerHTML = "Profile: Loaded!";

      resolve();
    }, 1000);
  });
  const gradesPromise = new Promise(function (resolve) {
    setTimeout(function () {
      grades.innerHTML = "Grades: Loaded!";

      resolve();
    }, 2000);
  });

  const schedulesPromise = new Promise(function (resolve) {
    setTimeout(function () {
      schedules.innerHTML = "Schedules: Loaded!";
      resolve();
    }, 3000);
  });

  Promise.all([profilePromise, gradesPromise, schedulesPromise])

    .then(function () {
      message.innerHTML = "Dashboard Ready!";
    });
});

function showMessage() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Loading Image...");
    }, 2000);
  });
}
button1.addEventListener("click", function () {
  message1.innerHTML = "Loading...";
  showMessage().then(function (result) {
    message1.innerHTML = result;
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve("Loading Assets...");
      }, 2000);
    }).then(function (result) {
      message1.innerHTML = result;

      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve("Welcome!");
        }, 3000);
      }).then(function (result) {
        message1.innerHTML = result;
      });
    });
  });
});

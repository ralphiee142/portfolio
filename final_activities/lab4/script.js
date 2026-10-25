const button = document.getElementById("loadbtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  let request = new XMLHttpRequest(); //messenger

  request.open("GET", "https://jsonplaceholder.typicode.com/users/1", true); //kukuha ng specific data or info, tinawag yung variable na request,-
  //bubuksan yung kinuhanan ng data

  request.onload = function () {
    //ito yung maghahandle ng request
    result.innerHTML = request.responseText;
  };

  request.onreadystatechange = function () {
    console.log(request.readyState);
  };

  request.send(); //isesend na yung data
});

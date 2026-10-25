$(document).ready(function () {
  $("*").css("font-family", "Times New Roman");

  $("#btn").click(function () {
    $(this).css("background", "red");
    $(this).css("color", "white");
  });

  $("#btn").click(function () {
    $("#title").text("This is my Student Profile");
  });

  $("#btn").mousedown(function () {
    $(this).css("background", "yellow");
  });

  $("#btn").mouseup(function () {
    $(this).css("background", "green");
  });
  $("#btn").dblclick(function () {
    $("#title").text("You double click the button");
    $(this).css("background", "gold");
  });

  $("#btn").mouseenter(function () {
    $("#mouse").text("Your mouse click the change title button");
  });

  $("#btn").mouseleave(function () {
    $("#mouse").text("Mouse left the change profile button");
  });

  $("#btn2").mouseenter(function () {
    $("#mouse").text("Your mouse click the hide profile button");
  });

  $("#btn2").mouseleave(function () {
    $("#mouse").text("Mouse left the hide profile button");
  });
  $("#btn3").mouseenter(function () {
    $("#mouse").text("Your mouse click the show profile button");
  });

  $("#btn3").mouseleave(function () {
    $("#mouse").text("Mouse left the show profile button");
  });

  $("th").css("background", "black");
  $("th").css("color", "white");

  $("#applyodd").click(function () {
    $("tr:odd").css("background", "red");
    $("tr:even").css("background", "");
  });
  $("#applyeven").click(function () {
    $("tr:even").css("background", "yellow");
    $("tr:odd").css("background", "");
  });

  $("#btn2").click(function () {
    $(".info").hide("slow");
  });

  $("#btn3").click(function () {
    $(".info").show("2000");
  });

  $("#course").change(function () {
    $(".courses").text($(this).val());
    $("#sele").text($(this).val());
  });

  $("#btnhide").click(function () {
    $("#table").hide("slow");
  });

  $("#btnshow").click(function () {
    $("#table").show("2000");
  });

  $("#applyodd").click(function () {
    $("#ca").text("Your mouse click the apply odd color");
  });

  $("#applyeven").click(function () {
    $("#ca").text("Your mouse click the apply even color");
  });
  $("#btnhide").click(function () {
    $("#ca").text("Your mouse click the hide button");
  });

  $("#btnshow").click(function () {
    $("#ca").text("Your mouse click the show button");
  });
  $("#applyodd").mouseleave(function () {
    $("#ca").text("Your mouse left the apply odd color button");
  });
  $("#applyeven").mouseleave(function () {
    $("#ca").text("Your mouse left the apply even color button");
  });
  $("#btnhide").mouseleave(function () {
    $("#ca").text("Your mouse left the hide table button");
  });
  $("##btnshow").mouseenter(function () {
    $("#ca").text("Your mouse click the show table button");
  });
});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Maintains the current date
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMM D"));

  // Stores each hour into an array
  var hours = [
    $("#hour-9"),
    $("#hour-10"),
    $("#hour-11"),
    $("#hour-12"),
    $("#hour-13"),
    $("#hour-14"),
    $("#hour-15"),
    $("#hour-16"),
    $("#hour-17"),
  ]

  
  for (var i = 0; i < hours.length; i++) {

    // Displays all saved content if applicable to hour blocks
    var getSavedInput = localStorage.getItem($(hours[i]).attr("id"));
    if (getSavedInput === null) {
      $(hours[i]).children("textarea").text("");
    } else {
      $(hours[i]).children("textarea").text(getSavedInput);
    }

     // Sets all timeblocks to an integer in military time for comparison with dayJS
    var currentHour = parseInt($(hours[i]).text())
    if (currentHour < 9) {
      currentHour += 12;
    }

      // Updates and color codes time blocks depending on the hour
    if (currentHour < dayjs().hour()) {
      $(hours[i]).children("textarea").addClass("past");
    } else if (currentHour === dayjs().hour()) {
      $(hours[i]).children("textarea").addClass("present");
    } else {
      $(hours[i]).children("textarea").addClass("future");
    }
  }

  // Uses event delegation to listen for the save button being clicked and saving content
  var timeBlockEl = $(".time-block");
  timeBlockEl.on("click", ".saveBtn", function(event) {
    localStorage.setItem($(event.target).parent().attr("id"), $(event.target).siblings("textarea").val())
  })
});

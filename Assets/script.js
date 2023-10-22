// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Maintains the current date
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMM D"));


  // Stores each hour into an array
  var hours = [
    $("hour-9"),
    $("hour-10"),
    $("hour-11"),
    $("hour-12"),
    $("hour-13"),
    $("hour-14"),
    $("hour-15"),
    $("hour-16"),
    $("hour-17"),
  ]

  // Updates and color codes time blocks depending on the hour
  for (each of hours) {
  currentHour = parseInt($(".time-block").text())
  if (currentHour < dayjs().hour()) {
    $("textarea").addClass("past");
  } else if (currentHour === dayjs().hour()) {
    $("textarea").addClass("present");
  } else {
    $("textarea").addClass("future");
  }
}
  
  // function saveInput(event) {
  //   inputField = $(event.target).parent().children("textarea");
  //   console.log(inputField)
  //   saveHour = $(event.target).parent();
  //   console.log(saveHour)
  //   localStorage.setItem("save-input", JSON.stringify(inputField));
  // }



  // var saveButton = $(".saveBtn")
  // saveButton.on("click", saveInput);

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});

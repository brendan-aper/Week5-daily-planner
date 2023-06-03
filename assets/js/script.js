$(document).ready(function() {
  // event listener | save feature
    $('.saveBtn').click(function() {
        var userInputValue = $(this).siblings(".description").val();
          console.log(userInputValue)
        var timeRow = $(this).parent().attr("id")
        localStorage.setItem(timeRow, userInputValue)
    });

    // looping over every time-block to pull data
    for (let index = 9; index < 18; index++){
      $("#hour-" + index + " .description").val(localStorage.getItem("hour-" + index))
    }

    // Conditionals to color code time blocks based on hour
    var currentHour = dayjs().hour()
    $(".time-block").each(function(){
      var rowHour = parseInt($(this).attr("id").split("-")[1])
      if (rowHour < currentHour) {
        $(this).addClass("past")
      } else if (rowHour === currentHour) {
        $(this).addClass("present")
      } else {
        $(this).addClass("future")
      }

    })
    // display date
    var currentDay = dayjs().format('dddd, MMMM D');
    $('#currentDay').text(currentDay)

  });
  
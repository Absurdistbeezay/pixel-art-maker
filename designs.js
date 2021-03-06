// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//Global variable
const canvas = $("#pixelCanvas");
function makeGrid(height, width) {
  // Your code goes here!
  clearGrid();


  for (let i = 0; i < height; i++) {
    const row = $("<tr></tr>");
    for (let j = 0; j < width; j++) {
      row.append("<td></td");
    }
    canvas.append(row);
  }
}

//clear grid
function clearGrid() {
  while (canvas.children().length > 0) {
    canvas.empty();
  }
}

$(document).ready(function() {
  //handle submit and get user input height and weight
  $("#submit").click(function(e) {
    e.preventDefault();
    const height = $("#inputHeight").val();
    const width = $("#inputWeight").val();

    makeGrid(height, width);
  });

  //color target per user's click
  canvas.click(function(e) {
    const pickedColor = $("#colorPicker").val();
    $(e.target).css("background", pickedColor);
  });
});

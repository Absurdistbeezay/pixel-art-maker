// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(width, height) {

// Your code goes here!
const canvas = $('#pixelCanvas');

for(let i = 0; i<height; i++){
    const tr = $('<tr></tr>');

    for(let j = 0; j<width; j++){
        tr.append('<td></td>');
    }
  canvas.append(tr);
}

}

$(document).ready(function(){

    $('#submit').click(function(e){
     
        const height = $('#inputHeight').val();
        const width =$('#inputWeight').val();
        e.preventDefault();

        makeGrid(width, height);

    });

   $('#pixelCanvas').click(function (e) {
      const getColor = $('#colorPicker').val();
     $(e.target).css('background', getColor);
   });




});

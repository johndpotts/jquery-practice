
function validateForm() {
if($('[name="fname"]').val() == ""){
        alert("Name must be filled out");
        return false;
      }

}



//-------------------------------------------------------

function validateNumber() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("js-number-check").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Not happenin, captain.";
    } else {
        text = "Aye, aye";
    }
    document.getElementById("js-number-check-result").innerHTML = text;
}

//-----------------------------------------------
/* #4- event listener */


/* function */
$('#listener').on('input',  function() {
$('#listener-result').html($("#listener").val());
});

//----------------------------------
/*#5- event delegation in vanilla js*/
$('ul').on('click','li',function(){
  alert($(this).text())
}
);

//---------------------------------
/*#6- add an element dynamically*/
function addElement(){
var $div=$('<div>', {'style':' background-color:green; color:white; font-size:20px; text-align:center; margin:15px;height:40px; width: 100px; cursor:pointer; font-family: sans-serif; line-height:40px;'});
$div.html('bonjour')
$('#make-a-div').before($div);
}

//---------------------------------
/*#7- delete an element dynamically*/
function deleteMe(){
$('#red-box').remove()
}

function resizeMe(){
$('blue-box').css('height:100px;width:300px;')
}

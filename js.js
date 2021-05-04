var fruit = "apple";
// alert("fruit = " + fruit);

// var fields = document.querySelectorAll('#gameboard button');
// alert("fields.length =" + fields.length);

// declare variable player/
var player;

// set player to "X"
player = "x";

// or combined: declare variable player and set player to "X"
var player = "x";

// life sign
// alert(player);

// alert value of variable player
// alert(player);

// alert "Hello" plus value of player

// alert("Hello " + player);

// declare variable hint and set it to element object with
// id "hint", using document.querySelector()
var hint = document.querySelector("#hint");

// set inner HTML text of hint to "Hello" plus value
// of player plus " - select a field!" at the end
hint.innerHTML = "Hello " + player + " - select a field!";

// declare in HTML the onclick function to trigger when
// the user clicks onto a child button
// <div id="gameboard" onclick="markField(event)";>

function markField(mouseEvent) {

    // dev only: alert target object of mouse event
    // alert(mouseEvent.target);

    // declare variable field and set to target object of mouse event
    var field = mouseEvent.target;
    
    // label the field with the player's name:
    // set aria-label attribute to set background-image
    field.setAttribute("aria-label", player);

    // disable field against further mouse clicks (set disabled attribute)
    field.setAttribute("disabled", "disabled");

    // change name of player
    if (player == "x") player = "o";
    else player = "x";

    // set inner HTML text of hint to "Next player is "
    // plus value of player plus "!"
    hint.innerHTML = "Next player is " + player + "!";
    allFieldsAreSelected();

    // if all fields were selected, using allFieldsAreSelected(),
    // set hint, indicating the end of the game
    if (allFieldsAreSelected()) hint.innerHTML = "Game over!";

    // call function allFieldsAreSelected
    function allFieldsAreSelected() {
        // alert("here we go");
    
    }

    function allFieldsAreSelected() {
        // declare the various fields and set it to the list of field objects
        // using document.querySelectorAll()
        var fields = document.querySelectorAll("#gameboard button");

        // alert(fields.length);

        var len = fields.length; // "len" for length

        // "c" for counter
        // "c++" is same as "c = c + 1"
        for (var c = 0; c < len; c++) {
            // alert("c=" + c);

            var f = fields [ c ]; // get field item from the list fields
            
            // if there is an empty label, return false (exist function)
            if ( f.getAttribute("aria-label")== "") {
            // alert("BIngo");
            return false;
            }
        }

        // alert("Bongo");
        return true;

    }


}
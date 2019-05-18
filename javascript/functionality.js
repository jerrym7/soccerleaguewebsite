/*Here is the code to make the page more interactive*/

//this showModal() function is when the user clicks, show the modal form for log in
function showModal() {
    //set modal as a block
    document.getElementById('modal-01').style.display= "block";
    //gray out all the screen for modal
    document.getElementById('loginlist').style.width =  "auto";
    // Get the modal
    var modal = document.getElementById('modal-01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

function fuck() {
    alert();
}
//this function uses jQuery, it is designed to make the 'shop' gallery
//move from a page to another
//for the image slider
var slideIndex = [1,1];
var slideId = ["mySlides1","mySlides2"];
showDivs(1, 0);
showDivs(1, 1);

function plusDivs(n, no) {
    showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no]-1].style.display = "block";
}
//-------------------------------------------
// Get the modal\
// Get the modal
    jQuery('#log-in-btn').click(function () {
        document.getElementById('modal-01').style.display= "block";
        //gray out all the screen for modal
        document.getElementById('loginlist').style.width =  "auto";
        // Get the modal
    });
    jQuery(document).click(function(event) {
        var modal  = document.getElementById('modal-01');
        if(event.target == modal){
            modal.style.display = "none";
        }
    });
function hideModal() {
    /* Add event listeners to all elements by hand */
    document.getElementById('modal-01').style.display = "none";
}

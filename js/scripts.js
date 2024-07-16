function newItem(){
//1. Adding a new item to the list of items:
//to store an <li> element as well as using:
    let li = $('<li></li>');
    //To store the value into a variable use:
    let inputValue = $('#input').val(); 
    let text = inputValue;
    //To append the value to another element: 
    li.append(text);   

    if (inputValue === '') {
        alert("You must write something!");
    }   else {
    //To assign the selected list to a variable use:
        let list = $('#list');
    }

//to select a list item on an ordered list with 
//HTML ID of <ol id="list></ol>  use:
$('#list');
//If it's a class (<ol class="list"></ol>) use:
//$('.list');

//to select and item in a class use:
$('.container')
//to append something to the list use:
$('#list').append("<li>Strawberries</li>");
//to use the variable "list" created earier write:
list.append("<li>Dog food</li>");

//to append the li vairiable to the list variable using:
list.append(li);
//To create a new DOM element:
let newElement = $('<div class="new-class">Do not forget milk!</div>');
$('body').append(newElement);
//To add a strike through to a list item 
li.addClass("strike");
//to get input values from the index page: 
$('#input').val("Dog food");
//To append the value to another element: 
li.append(inputValue);
//to hide an element:
li.addClass('delete');
//crossing out list items with event handling
li.on("click", function() {
    li.addClass("strike");
  });

// to use Ajax to fetch with jQuery asynchronous requests:
//$.ajax('https://yesno.wtf/api', { dtataType: 'json'}).then(function (responseJSON) {
    //console.log(responseJSON); //parsed JSOn response
//});
//catch handle to chain handle errors:
//$.ajax('[URL]', {
  //  method: 'POST',
   // dataType: 'json',
   // timeout: 5000
//}).then(function (responseJSON) {
    //console.log(responseJSON);
//}).catch(function(err) {
    //console.log('Caught and error:" + err.statusText');
//});

//Event handling adding and removing
//$('input').on('click', function (event) {
    // Do something
//});
//$('input').off('click'); //remove all "click" listeners

//To execute a function on an indivdual element:
//$('input').each(function (i) {
   // let inputValue = $(this).val();
   // let inputName = $(this).attr('name');
   // if(inputValue().length < 1){
   //   console.//log('Please fill out the ' + inputName + ' field')
   // }
 // });  

//DOM manipulation chaining to add flashing colors:
//$('notification')
//.addClass('red') 
//.delay(300)
//.removeClass('red');

//to transverse the DOM elelemts: 
//let input= $('input');
//input.parent(); //get parent element
//input.children(); //get all children
//input.closest('.container'); //go up hierarchy of parents until selector matches
//input.siblings(); //get all siblings

//To show or hide HTML elements:
//let inputs= $('input');
//inputs.show(); //make them visible
//inputs.hide(); //hide the inputs

//inputs.fadeOut(); //fade the elements in and out and then hide them
//inputs.fadeIn(1000); //fade the elementand them show them
//inputs.fadeToggle(); //fade the elelemts in/out depending on their visibility

//inputs.slideDown(); //slide out of view and hide elements
//inputs.slideUp(); //slide elelemtns into view and show
//inputs.slideToggle(); //slide elements in and out

//to create, remove and append empty elements:
//input.remove(); //delete the element
//$('body').append(input); //similar to appendChild
//$('body').empty(); // removes element children



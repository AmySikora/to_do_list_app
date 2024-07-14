//to select a list item on an ordered list with 
//HTML ID of <ol id="list></ol>  use:
$('#list');
//If it's a class (<ol class="list"></ol>) use:
$('.list');
//To assign the selected list to a variable use:
let list = $('#list');
//to append something to the list use:
$('#list').append("<li>Strawberries</li>");
//to use the variable "list" created earier write:
list.append("<li>Milk</li>");
//to store an <li> element as well as using:
let li = $('<li></li>');
//to append the li vairiable to the list variable using:
list.append(li);
//to transverse the DOM elelemts: 
let input= $('input');
input.parent(); //get parent element
input.children(); //get all children
input.closest('.container'); //go up hierarchy of parents until selector matches
input.siblings(); //get all siblings
//to get input values from the index page: 
$('#input').val();
//To store the value into a variable use:
let inputValue = $('#input').val();
//To append the value to another element: 
li.append(inputValue);
//DOM manipulation chaining to add flashing colors:
$('notification')
.addClass('red')
.delay(300)
.removeClass('red');
//To create a new DOM element:
let newElement = $('<div class="new-class">Do not forget milk!</div>');
$('body').append(newElement);
//To add a strike through to a list item 
li.addClass("strike");

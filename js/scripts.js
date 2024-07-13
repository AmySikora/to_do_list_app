//to select a list item on an ordered list with 
//HTML ID of <ol id="list></ol>  use:
$('#list');
//If it's a class (<ol class="list"></ol>) use:
$('.list');
//To assign the selected list to a variable use:
let list = $('#list');
//to append something to the list use:
$('#list').append(<li>list somenthing</li>);
//to use the variable "list" created earier write:
list.append("<li>list something</li>");
//to store an <li> element as well as using:
let li = $('<li></li>');
//to append the li vairiable to the list variable using:
list.append(li);


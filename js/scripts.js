function newItem(){
//1. Adding a new item to the list of items:
    let li = $("<li></li>");
    let inputValue = $("#input").val(); 
    let text = inputValue;
    li.append(text);   

    if (inputValue === '') {
        alert("You must write something!");
    }   else {
        let list = $('#list');
        list.append(li);
        $('#input').val('');
    }

//2. Crossing out an item from the list of items:
    li.on("dblclick", function() {
        li.toggleClass('strike');
    });

//3(i). Adding the delete button "X": 
    let crossOutButton = $("<crossOutButton></crossOutButton>");
        crossOutButton.text('X');
        crossOutButton.addClass('crossOutButton');
        li.append(crossOutButton);

        crossOutButton.on("click", function() {
            li.addClass("delete");
        });

//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:

    function deleteListItem() {
        li.addClass("delete")
        }

 // 4. Reordering the items: 
        $('#list').sortable();
    }
            //to select a list item on an ordered list with 
//HTML ID of <ol id="list></ol>  use:
//$('#list');
//If it's a class (<ol class="list"></ol>) use:
//$('.list');

//to select and item in a class use:
//$('.container')
//to append something to the list use:
//$('#list').append("<li>Strawberries</li>");
//to use the variable "list" created earier write:
//list.append("<li>Dog food</li>");

//to append the li vairiable to the list variable using:
//list.append(li);
//To create a new DOM element:
//let newElement = $('<div class="new-class">Do not forget milk!</div>');
//$('body').append(newElement);

//to get input values from the index page: 
//$('#input').val("Dog food");
//To append the value to another element: 
//li.append(inputValue);
//to hide an element:
//li.addClass('delete');

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
//input.remove(); //delete the elem//$('body').append(input); //similar to appendChild

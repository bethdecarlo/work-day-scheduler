// displays date//
$("#currentDay").text(moment().format('dddd, MMMM Do'));

var saveBtn = $('button');
var timeBlock = $('textarea');
var currentTime = moment().format('H');
var textAreas = [
    $('#ta9'),
    $('#ta10'),
    $('#ta11'),
    $('#ta12'),
    $('#ta1'),
    $('#ta2'),
    $('#ta3'),
    $('#ta4'),
    $('#ta5'),
];

// creates a click event when a save button is clicked //
saveBtn.on('click', saveClicked);

// changes color of text areas to past, present, or future //
function color () {
    if (currentTime === '9') {
        textAreas[0].addClass('present');
        textAreas[1].addClass('future');  
        textAreas[2].addClass('future');  
        textAreas[3].addClass('future');  
        textAreas[4].addClass('future');  
        textAreas[5].addClass('future');  
        textAreas[6].addClass('future');  
        textAreas[7].addClass('future');  
        textAreas[8].addClass('future');   
    } else if (currentTime === '10') {
        textAreas[0].addClass('past'); 
        textAreas[1].addClass('present');  
        textAreas[2].addClass('future');  
        textAreas[3].addClass('future');  
        textAreas[4].addClass('future');  
        textAreas[5].addClass('future');  
        textAreas[6].addClass('future');  
        textAreas[7].addClass('future');  
        textAreas[8].addClass('future'); 
    } else if (currentTime === '11') {
        textAreas[0].addClass('past'); 
        textAreas[1].addClass('past');  
        textAreas[2].addClass('present');  
        textAreas[3].addClass('future');  
        textAreas[4].addClass('future');  
        textAreas[5].addClass('future');  
        textAreas[6].addClass('future');  
        textAreas[7].addClass('future');  
        textAreas[8].addClass('future'); 
    } else if (currentTime === '12') {
        textAreas[0].addClass('past'); 
        textAreas[1].addClass('past');  
        textAreas[2].addClass('past');  
        textAreas[3].addClass('present');  
        textAreas[4].addClass('future');  
        textAreas[5].addClass('future');  
        textAreas[6].addClass('future');  
        textAreas[7].addClass('future');  
        textAreas[8].addClass('future'); 
    } else if (currentTime === '13') {
        textAreas[0].addClass('past'); 
        textAreas[1].addClass('past');  
        textAreas[2].addClass('past');  
        textAreas[3].addClass('past');  
        textAreas[4].addClass('present');  
        textAreas[5].addClass('future');  
        textAreas[6].addClass('future');  
        textAreas[7].addClass('future');  
        textAreas[8].addClass('future'); 
    } else if (currentTime === '14') {
        textAreas[0].addClass('past'); 
        textAreas[1].addClass('past');  
        textAreas[2].addClass('past');  
        textAreas[3].addClass('past');  
        textAreas[4].addClass('past');  
        textAreas[5].addClass('present');  
        textAreas[6].addClass('future');  
        textAreas[7].addClass('future');  
        textAreas[8].addClass('future'); 
    } else if (currentTime === '15') {
        textAreas[0].addClass('past'); 
        textAreas[1].addClass('past');  
        textAreas[2].addClass('past');  
        textAreas[3].addClass('past');  
        textAreas[4].addClass('past');  
        textAreas[5].addClass('past');  
        textAreas[6].addClass('present');  
        textAreas[7].addClass('future');  
        textAreas[8].addClass('future'); 
    } else if (currentTime === '16') {
        textAreas[0].addClass('past'); 
        textAreas[1].addClass('past');  
        textAreas[2].addClass('past');  
        textAreas[3].addClass('past');  
        textAreas[4].addClass('past');  
        textAreas[5].addClass('past');  
        textAreas[6].addClass('past');  
        textAreas[7].addClass('present');  
        textAreas[8].addClass('future'); 
    } else if (currentTime === '17') {
        textAreas[0].addClass('past'); 
        textAreas[1].addClass('past');  
        textAreas[2].addClass('past');  
        textAreas[3].addClass('past');  
        textAreas[4].addClass('past');  
        textAreas[5].addClass('past');  
        textAreas[6].addClass('past');  
        textAreas[7].addClass('past');  
        textAreas[8].addClass('past'); 
    } else if (currentTime > '17') {
        textAreas[0].addClass('past'); 
        textAreas[1].addClass('past');  
        textAreas[2].addClass('past');  
        textAreas[3].addClass('past');  
        textAreas[4].addClass('past');  
        textAreas[5].addClass('past');  
        textAreas[6].addClass('past');  
        textAreas[7].addClass('past');  
        textAreas[8].addClass('past');
    } else if (currentTime < '9') {
        textAreas[0].addClass('future'); 
        textAreas[1].addClass('future');  
        textAreas[2].addClass('future');  
        textAreas[3].addClass('future');  
        textAreas[4].addClass('future');  
        textAreas[5].addClass('future');  
        textAreas[6].addClass('future');  
        textAreas[7].addClass('future');  
        textAreas[8].addClass('future');
    }
}

// saves text area to local storage when the corresponding button is clicked//
function saveClicked (event) {
    event.preventDefault();
    var buttonNum = $(this).attr('name');
    var textNum = $(this).parent().find('textarea').val();

        console.log('button clicked', buttonNum);
        console.log(textNum);

        localStorage.setItem(buttonNum, textNum);
        
    }

color();  
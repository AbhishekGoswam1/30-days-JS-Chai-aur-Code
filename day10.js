// This is day 10 of "30 days JavaScript challenge"
// and today's tasks/activities are on "Event Handling"


// Activity 1: Basic Event Handling

// 1. Add a click event to the button that changes the text content of a paragraph

/* HTML code
<button id="changeText">Change Text</button>
<p id="para">This is a paragraph</p>
*/

// JavaScript code
const changeText = document.getElementById('changeText');
const para = document.getElementById('para');

changeText.addEventListener('click', () => {
    para.textContent = 'This is a new paragraph';
} );


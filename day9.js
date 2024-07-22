// This is day 9 of "30 days JavaScript challenge"
// and today's tasks/activities are on "DOM Manipulation"


// Activity 1: Selecting and manipulating Elements

// we created an HTML file called day9.html and added some elements to it. we will select and manipulate those elements using JavaScript.

// 1. Select an HTML element with an ID and change its text content.

const heading = document.getElementById('heading');
heading.textContent = 'This is a new heading';      // this will change the text content of the heading element in day9.html file

// 2. Select an HTML element with a class and change its background color.

const paragraph = document.getElementsByClassName('para');
paragraph[0].style.backgroundColor = 'grey'; // this will change the background color of the paragraph

/*
const paragraph = document.querySelector('.para');
paragraph.style.backgroundColor = 'grey'; 
*/
// this is another way to select an element with a class and change its background color


// Activity 2: Creating and appending Elements

// 1. create a new 'div' with some text content and append it to the body.

const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div element';
document.body.appendChild(newDiv);  // this will append the new div element to the body of the HTML file


// 2. create a new 'li' element and add it to an existing 'ul' element.

const newLi = document.createElement('li');
newLi.textContent = 'Mango (newLi)';
document.querySelector('.fruits').appendChild(newLi); // this will append the new li element to the existing ul element with class fruits


// Activity 3: Removing Elements

// 1. select an HTML element and remove it from the DOM

const removeElement = document.querySelector('#h3');
removeElement.remove(); // this will remove the element with class/id remove from the DOM

// 2. remove the last child of a specific HTML element

const ul = document.querySelector('.list1');
ul.lastElementChild.remove(); // this will remove the last child of the ul element with class list1


// Activity 4: modifying attributes and classes

// 1. select an HTML element and change its attribute (for ex. src of an image)

const image = document.querySelector('img');
image.src = 'https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'; 
// this will change the src attribute of the image element

// 2. Add and remove a CSS class to/from an HTML element

const button = document.querySelector('button');
button.classList.add('btn'); // this will add a class btn to the button element 

button.classList.remove('button'); // this will remove the class btn from the button element


// Activity 5: Event Handling

// 1. add an event listener to a button that changes the text content of a pragraph

const changeText = document.querySelector('#changeText');
const para = document.querySelector('.para');
changeText.addEventListener('click', () => {
    para.textContent = 'This is a new text content';
});
// this will change the text content of the paragraph when the button is clicked

// 2. add a mouseover event to an element that changes its border color

const div = document.querySelector('.list1');
div.addEventListener('mouseover', () => {
    div.style.borderColor = 'red';
}); 
// this will change the border color of the list element when the mouse is over the element


// Feature request
// 1. write a script that selects an HTML element by its ID and changes its text content

const changeTextContent = (id, text) => {
    const element = document.getElementById(id);
    element.textContent = text;
}

changeTextContent('heading', 'Again, This is a new heading using script'); // this will change the text content of the element with id heading


// 2. write a script that demonstrates creating a new div element and appending it to the body

const createDiv = (text) => {
    const newDiv2 = document.createElement('div');
    newDiv2.textContent = text;
    document.body.appendChild(newDiv2);
}
createDiv('This is a new div element created using script'); // this will create a new div element with the given text content and append it to the body


// 3. write a script that removes an HTML element from the DOM

const removeElementById = (id) => {
    const element = document.getElementById(id);
    element.remove();
}
removeElementById('h3'); // this will remove the element with any id from the DOM


// 4. write a script that changes the attribute of an element 

const changeAttribute = (element, attribute, value) => {
    const elements = document.querySelector(element);
    elements[attribute] = value;
}

// changeAttribute('img' , 'src', 'https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
changeAttribute('p', 'textContent', 'This is a new text content using script'); 
// this will change the text content of the paragraph element


// 5. write a script that adds event listener to an element to change their content or style based on user interactions

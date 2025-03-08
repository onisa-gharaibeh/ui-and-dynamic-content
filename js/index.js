let form = document.querySelector('form');

// Save the reference to text-field into a variable. | <input type="text">
let input = document.getElementById('inpt');

// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
let btn = document.getElementById('btn');

// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
let list = document.querySelector('.items');

// Save the reference to paragraph for feedback | <p class="feedback"></p>
let feedback = document.querySelector('.errors');

// Start function addItem.
function addItem(event) {
   
   event.preventDefault();
   // Create list-item and store output in a variable.
   let item = document.createElement('li');

   // Check if user entered the value in input text-field.
   // If so:
   if (input.value) {

      // Use textContent property on created list-item
      // and assign it with the value of the text written in the text-field
      item.textContent = input.value.trim();

      // Append list item to unordered list.
      list.appendChild(item);

      // Clear a feedback-message.
      feedback.textContent = '';

      // Clear the text-field.
      input.value = '';

      // Put the cursor back to text-field
      input.focus();

      // End if.
   } else {
      // Otherwise:
      // Print the message nothing entered in the paragraph "feedback"
      feedback.textContent = 'Nothing has been entered!!';

      input.focus();
      // End otherwise.
   }

   item.addEventListener('click', function () {
      item.classList.add('animated');

      item.addEventListener('animationend', function () {
         list.removeChild(item);
     });

   });
   // End function addItem.
}
// Register your function addItem for click event on button.
form.addEventListener('submit', addItem);
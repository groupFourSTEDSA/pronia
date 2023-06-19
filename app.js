// Pseudo Code
// Create a new Firebase project
 // Create a firebase.js file to Import SDK
import {app} from './firebase.js';
import {getDatabase, ref, set, get} from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js'

const database = getDatabase(app);
const dbRef = ref(database);

 // Import Json into our Firebase
  // Link Firebase to apps.js in our code
  // Initialize the app for web usage and get the config info

  // Increase the cart count
  // Target the add to cart button using QuerySelector
  const cartIcons = document.querySelectorAll(".iconBox");
  // create an empty array for the cart
  let count = 0;
  // Attach a click event listener to each cart icon
  cartIcons.forEach((cartIcon) => {
      // create an EventListener to listen for when the add to cart button is clicked, the cart number increases on the page
  cartIcon.addEventListener("click", () => {
      // function to increase the cart count
      count++;
      // Target the empty cart button using querySelectorbyID
      // Update the cart number text
      const cartNumber = document.getElementById("cartNumber");
      // append the increased number to the page
      cartNumber.textContent = count;
      // Update the count in Firebase
      updateFirebaseCartCount(count);
    });
  });
     // Function to update the count in Firebase
     // use the button Id to create the reference in the database
      function updateFirebaseCartCount(count) {
     // Get a reference to the Firebase Realtime Database
      const database = getDatabase();

     // Set the count value in the "cart" node
      const cartRef = ref(database, "cart/cartNumber");
      set(cartRef, count)
        .then(() => {
        console.log("Cart count updated in Firebase");
      })
        .catch((error) => {
        console.error("Error updating cart count in Firebase:", error);
      });
  }
 
//  Implement a search bar that allows user to search for products by name 
// Create an input element for the search(searchInput) in the html
 // Create a search button (searchButton)
 // Create a result element for the html(searchResults)
// add an event listener for the search button for “click”
 // create a function to get the information from the search input element
 // create a function that filters and finds the selected searched item
 // create a variable to target the product array(json), where the Id = 1, name: “Product 1” // add styling to the result section where the resulted items will appear
// Add an event listener to the plantSelect dropdown menu
const plantSelect = document.getElementById('plantSelect');
plantSelect.addEventListener('change', () => {
  const selectedPlantId = plantSelect.value; // Retrieve the selected value
  
  // Fetch the plant data from Firebase
  const plantRef = ref(database, `plants/plant${selectedPlantId}`);
  get(plantRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const plantData = snapshot.val();
        
        // Open a new window with the plant data
        openPlantWindow(plantData);
      } else {
        console.log(`Plant ${selectedPlantId} does not exist in Firebase.`);
      }
    })
    .catch((error) => {
      console.error(`Error retrieving plant ${selectedPlantId} from Firebase:`, error);
    });
});

// Function to open a new window with the plant data
function openPlantWindow(plantData) {
  // Encode the plant data as query parameters
  const params = new URLSearchParams(plantData);
  const query = params.toString();
  
  // Create the URL with the encoded plant data
  const url = `plantDetails.html?${query}`;
  
  // Open the new window with the URL
  window.open(url, '_blank');
}


 //  Implement a ratings and review system that allows user to leave feedback and ratings on products
  // create a carousel to hold the ratings and comments
  // select all slides
 // loop through slides and set each slides translateX property to index * 100% // current slide counter
  // maximum number of slides
  // select next slide button
 // add an eventListener and next slide functionality
  // check if current slide is the last and reset the current slide // move slide by -100%
  // select previous slide button
  // add an EventListener and next slide functionality
  // check if current slide is the last an reset current slide
 // move slide by -100%
 // create HTML form to create a review and rating form // target the form with getElementById
  // target the submit button getElementById
  // event.preventDefault();
 // create a container through html to hold the review and ratings // style the container to that holds the reviews and ratings
  // style the rating bar?
  // target the container using querySelector
 // store the review and rating in the database on Firebase // append the review and rating to the page
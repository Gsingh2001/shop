// Initialize the Firebase app (if not already done in firebase.js)
// ...

// Get a reference to the Firestore database
const db = firebase.firestore();

// Function to add an item to the cart
function addToCart(itemId, itemName, itemPrice) {
  // Define the cart collection name (adjust to your needs)
  const cartCollection = 'userCarts';

  // Add the item to the cart collection with a unique document ID
  db.collection(cartCollection)
    .add({
      itemId: itemId,
      name: itemName,
      price: itemPrice,
    })
    .then((docRef) => {
      console.log('Item added to cart with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding item to cart: ', error);
    });
}

// Function to display the cart items
function displayCart() {
  const cartCollection = 'userCarts';

  // Retrieve and display cart items
  db.collection(cartCollection)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log('Item ID: ', data.itemId);
        console.log('Name: ', data.name);
        console.log('Price: ', data.price);
        // Display the item in your HTML (e.g., in a cart view)
      });
    })
    .catch((error) => {
      console.error('Error getting cart items: ', error);
    });
}

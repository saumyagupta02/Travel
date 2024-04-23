// Get form element
const form = document.querySelector('form');

// Listen for form submit event
form.addEventListener('submit', (e) => {
  // Prevent default form behavior
  e.preventDefault();

  // Get form values
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  // Validate form values
  if (name === '' || email === '' || message === '') {
    // Display error message
    alert('Please fill in all fields');
  } else {
    // Send form data to server
    const data = { name, email, message };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        // Display success message
        alert('Message sent successfully');
        // Reset form fields
        form.reset();
      })
      .catch((err) => {
        // Display error message
        alert('Error sending message');
      });
  }
});
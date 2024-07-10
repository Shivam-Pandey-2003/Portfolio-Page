// script.js

// Submit form function
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Fetch form data
    let formData = new FormData(this);
    // Display form data (for demonstration)
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
    // You can add further processing here, like sending the data to a server
    // using fetch or XMLHttpRequest
    // Example:
    /*
    fetch('your-server-endpoint', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    */
    // Clear the form after submission
    this.reset();
});

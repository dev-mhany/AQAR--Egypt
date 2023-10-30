//form checker
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Get the contact form by its ID
    var contactForm = document.getElementById('contact-form');
  
    // Add an event listener for the 'submit' event
    if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
        // Prevent the form from submitting
        event.preventDefault();
  
        // Get the form fields
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
  
        // Basic validation
        if (name && email && message) {
          // In a real world scenario, you would typically send the form data to a server here
  
          // Show an alert for demonstration purposes
          alert('We will open whatsapp for you and send the message!');
        } else {
          // Show an error message
          alert('Please fill out all fields.');
        }
      });
    }
  
  });
  ////////////////////////////////////////////
  //whatsapp link creator for contact form
  document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contact-form');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
  
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('message').value;
  
        if (name && email && phone && message) {
          var phoneNumber = '+201017260690';  // Replace with the phone number you want to send the message to
          var text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
          var encodedText = encodeURIComponent(text);
          var whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedText}`;
  
          window.open(whatsappLink, '_blank');
        } else {
          // Show an error message
          alert('Please fill out all fields.');
        }
      });
    }
  });
  
  
// Optional JS (interactive portfolio sections can go here)
console.log('Portfolio loaded');

window.onload = function() {
  emailjs.init('snKY5dHm9cA6QNvep'); // Replace with your EmailJS public key

  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('jatin_mobile', 'template_okjka8k', this)
      .then(function() {
        alert('Message sent successfully!');
        form.reset();
      }, function(error) {
        alert('Failed to send message. Please try again.');
        console.error(error);
      });
  });
};
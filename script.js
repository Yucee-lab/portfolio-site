// Simple contact form

document.querySelector("form").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thanks for contacting me!");

    this.reset();

});
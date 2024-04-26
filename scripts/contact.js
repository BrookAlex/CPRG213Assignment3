// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function(event) {
    event.preventDefault(); 

    let userName = document.getElementById('user-name').value;
    let userEmail = document.getElementById('user-email').value;
    let userMessage = document.getElementById('user-message').value;

    if (!userName || !userEmail || !userMessage) {
        alert('Please fill out all fields before submitting.');
        return;
    }

    let message = document.createElement('p');
    message.textContent = 'Thank you for your message';
    message.style.fontSize = '24px';

    let contactPage = document.getElementById('contact-page');
    contactPage.innerHTML = '';
    contactPage.appendChild(message);
});
// JavaScript code to toggle between themes
const themeSwitcher = document.getElementById('theme-switcher');
const linkElement = document.querySelector('link[href="new-theme.css"]');

themeSwitcher.addEventListener('click', () => {
    if (linkElement.getAttribute('href') === 'new-theme.css') {
        linkElement.setAttribute('href', 'styles.css'); // Switch back to the default theme
    } else {
        linkElement.setAttribute('href', 'new-theme.css'); // Switch to the new theme
    }
});


// Get all section elements
const sections = document.querySelectorAll('.section');

// Add click event listener to each section
sections.forEach(section => {
    section.addEventListener('click', () => {
        // Toggle the display of the associated info box
        const infoBox = section.querySelector('.section-info-box');
        if (infoBox.style.display === 'none' || infoBox.style.display === '') {
            infoBox.style.display = 'block';
        } else {
            infoBox.style.display = 'none';
        }
    });
});
// Get all section elements
// JavaScript for the image slideshow
/*let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("my-slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds (3000 milliseconds)
}*/

//showSlides(); // Start the slideshow
// Get references to the menu elements


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("my-slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds (adjust as needed)
}





// Loop through each menu link and add a click event listener

// Add click event listeners to the menu links for redirection
// Add click event listeners to the menu links for redirection
// Get references to the menu elements
const openMenuButton = document.getElementById('openMenu');
const closeMenuButton = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

// Add click event listeners to open and close the menu
openMenuButton.addEventListener('click', () => {
    menu.style.display = 'block';
});

closeMenuButton.addEventListener('click', () => {
    menu.style.display = 'none';
});

// Add click event listener for the "Contact" link
const contactLink = document.querySelector('.menu a[href="#contact-section"]');
if (contactLink) {
    contactLink.addEventListener('click', () => {
        // Close the menu when "Contact" is clicked (optional)
        menu.style.display = 'none';
    });
}
// Get a reference to the contact logo and contact information section
const contactLogo = document.getElementById('contact-logo');
const contactSection = document.getElementById('contact-section');

// Add a click event listener to the contact logo
contactLogo.addEventListener('click', () => {
    // Toggle the visibility of the contact information section
    if (contactSection.style.display === 'none' || contactSection.style.display === '') {
        contactSection.style.display = 'block';
    } else {
        contactSection.style.display = 'none';
    }
});

// Get references to the feedback logo, feedback form, and submit button
const feedbackLogo = document.getElementById('feedback-logo');
const feedbackForm = document.getElementById('feedback-form');
const submitButton = document.getElementById('submit-feedback');
const feedbackMessage = document.getElementById('feedback-message');

// Add a click event listener to the feedback logo
feedbackLogo.addEventListener('click', () => {
    // Toggle the visibility of the feedback form
    if (feedbackForm.style.display === 'none' || feedbackForm.style.display === '') {
        feedbackForm.style.display = 'block';
    } else {
        feedbackForm.style.display = 'none';
    }
});

// Add a click event listener to the submit button
submitButton.addEventListener('click', () => {
    const message = feedbackMessage.value;
    // You can now do something with the feedback message, e.g., send it to a server
    // For demonstration, we'll simply display an alert
    alert(`Feedback submitted: ${message}`);
    // Clear the text area
    feedbackMessage.value = '';
    // Hide the feedback form
    feedbackForm.style.display = 'none';
});
// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the feedback logo, feedback form, and submit button
    const feedbackLogo = document.getElementById('feedback-logo');
    const feedbackForm = document.getElementById('feedback-form');
    const submitButton = document.getElementById('submit-feedback');
    const feedbackMessage = document.getElementById('feedback-message');

    // Add a click event listener to the feedback logo
    feedbackLogo.addEventListener('click', () => {
        // Toggle the visibility of the feedback form
        if (feedbackForm.style.display === 'none' || feedbackForm.style.display === '') {
            feedbackForm.style.display = 'block';
        } else {
            feedbackForm.style.display = 'none';
        }
    });

    // Add a click event listener to the submit button
    submitButton.addEventListener('click', () => {
        const message = feedbackMessage.value;
        // You can now do something with the feedback message, e.g., send it to a server
        // For demonstration, we'll simply display an alert
        alert(`Feedback submitted: ${message}`);
        // Clear the text area
        feedbackMessage.value = '';
        // Hide the feedback form
        feedbackForm.style.display = 'none';
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById("chat-messages");
    const messageInput = document.getElementById("message");
    const sendButton = document.getElementById("send");

    // Function to add a message to the chat
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add(isUser ? "user-message" : "bot-message");
        messageDiv.innerText = message;
        chatMessages.appendChild(messageDiv);
        // Scroll to the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Event listener for sending messages
    sendButton.addEventListener("click", () => {
        const userMessage = messageInput.value;
        if (userMessage.trim() === "") return;
        addMessage(`You: ${userMessage}`, true);

        // Send the user message to the server for processing (not implemented here)
        // You would typically send this message to a server for chatbot logic and storage.

        // Clear the input field
        messageInput.value = "";
    });

    // Example: Simulate a bot response (replace with your actual chatbot logic)
    function simulateBotResponse(userMessage) {
        // Simulate a delayed response
        setTimeout(() => {
            const botResponse = `Bot: You said "${userMessage}". This is a sample response.`;
            addMessage(botResponse);
        }, 1000);
    }

    // Example: Simulate a bot greeting
    setTimeout(() => {
        const botGreeting = "Bot: Welcome to the live chat! How can I assist you?";
        addMessage(botGreeting);
    }, 1000);

    // Example: Simulate a bot response to user input
    sendButton.addEventListener("click", () => {
        const userMessage = messageInput.value;
        if (userMessage.trim() === "") return;
        simulateBotResponse(userMessage);
    });
});

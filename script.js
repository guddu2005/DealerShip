document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Optional: Close the menu when a link is clicked
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navLinks.classList.remove('show');
        }
    });
});

//popup section
document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var closeButton = document.getElementById('close-button');

    // Show the popup when the page loads
    popup.style.display = 'block';

    // Close the popup when the close button is clicked
    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Optionally close the popup if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});


//add more button
function toggleContent() {
    var content = document.getElementById('about-content');
    var button = document.querySelector('.read-more');

    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        button.textContent = 'Read More';
    } else {
        content.classList.add('expanded');
        button.textContent = 'Read Less';
    }
}


// Function to send Email
async function sendEmail(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("comments").value;
    var state = document.getElementById("state").value;
    var city = document.getElementById("city").value;
    var gender = document.getElementById("gender").value;
    var pincode = document.getElementById("pincode").value;
    var contact = document.getElementById("contact").value;
    var contact = document.getElementById("occupation").value;


    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            comments: message,
            state:state,
            city:city,
            gender:gender,
            pincode:pincode,
            contact:contact,
            occupation:occupation
        })
    };

    try {
        const response = await fetch('https://sendemail-4j5q.onrender.com/send', options);
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }
        const data = await response.json();
        console.log("Data: ", data);
        alert("Message sent successfully");
    } catch (err) {
        console.error("Error: ", err);
        alert("There was an error sending your message. Please try again later.");
    }
}

const formData = document.getElementById("contact-form");
formData.addEventListener('submit', sendEmail);


//form submitted popup
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact-form');
    var popup = document.getElementById('popupform');
    var closeButton = document.getElementById('close-button-form');

    // Show the popup
    function showPopup() {
        popup.style.display = 'block';
    }

    // Hide the popup
    function hidePopup() {
        popup.style.display = 'none';
    }

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        showPopup();
    });

    // Close the popup when clicking on the close button
    closeButton.addEventListener('click', function() {
        hidePopup();
    });

    // Close the popup if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            hidePopup();
        }
    });
});




































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

//Slider Section
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0; // Loop back to the first slide
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Loop to the last slide
    } else {
        slideIndex = index;
    }

    // Move the slides container
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function changeSlide(step) {
    showSlide(slideIndex + step);
}

// Automatically change slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Initialize the slider
showSlide(slideIndex);


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
        })
    };

    try {
        const response = await fetch('http://localhost:8080/send', options);
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






































// (function(){
    // emailjs.init({
        // publicKey: "uPZM0NCgypJR9DWbz",
    //   }); // Replace with your EmailJS user ID
// })();

// function sendEmail() {
    // const form = document.getElementById('contact-form');
    // const formData = {
        // name: form.name.value,
        // email: form.email.value,
        // contact: form.contact.value,
        // gender: form.gender.value,
        // state: form.state.value,
        // city: form.city.value,
        // pincode: form.pincode.value,
        // comments: form.comments.value,
    // };

    // emailjs.send("service_7anmyvl", "template_xfx64fp", formData)
        // .then(response => {
            // alert('Message sent successfully!');
        // })
        // .catch(error => {
            // alert('Failed to send message: ' + error);
        // });
// }
function filterSelection(category) {

    const cards = document.querySelectorAll(".activity-card");

    cards.forEach(card => {

        if (category === "all") {

            card.style.display = "block";

        } else if (card.classList.contains(category)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* Contact Form Validation */

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        let output = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "") {

            output.textContent = "Please complete all fields.";
            output.style.color = "red";

            return;
        }

        output.textContent = "Message submitted successfully.";
        output.style.color = "green";

    });

}
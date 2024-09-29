
document.getElementById('button').addEventListener('click', function() {
    // Get the input values
    const eidInput = document.getElementById('Eid').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    // Check if both fields are filled
    if (eidInput === "" || passwordInput === "") {
        // Change button color and disable pointer
        this.style.backgroundColor = "#f44336"; // Red color for error
        this.style.cursor = "not-allowed"; // Change cursor to not-allowed
        this.innerHTML = "Please fill in all fields"; // Change button text

        // Optionally, you can set a timeout to revert the button back to its original state
        setTimeout(() => {
            this.style.backgroundColor = "#4CAF50"; // Revert to original color
            this.style.cursor = "pointer"; // Change cursor back to pointer
            this.innerHTML = "Login"; // Reset button text
        }, 2000); // Reset after 2 seconds

        return; // Exit the function early
    }

    // Hide the form container
    document.getElementById('formContainer').style.width = "0";
    document.getElementById('formContainer').style.opacity = "0"; // Fade out the form

    // Expand the image section
    const backgroundImage = document.getElementById('backgroundImage');
    backgroundImage.classList.add('fullscreen-image'); // Add class for fullscreen styling

    // Move the logo to the center
    const logo = document.getElementById('logo');
    logo.classList.add('center'); // Add the class to center the logo
});

document.getElementById('nextbutton').addEventListener('click', function() {
    // Check if a radio button is selected
    if (document.querySelector('input[name="choice"]:checked')) {
        // Handle the next step or navigate to another page
        alert('You have completed the quiz.');
        // Optionally, navigate to the final page or perform another action
        // window.location.href = 'finalPage.html'; // Replace with the final page URL
    } else {
        alert('submit');
    }
});

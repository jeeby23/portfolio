document.querySelectorAll('input[name="choice"]').forEach(radio => {
    radio.addEventListener('change', function() {
        // Automatically navigate to the next page
        setTimeout(() => {
            window.location.href = 'next2.html'; // URL of the next page
        }, 500); // Optional delay for smooth transition
    });
});

document.getElementById('nextbutton').addEventListener('click', function() {
    // Check if a radio button is selected
    if (document.querySelector('input[name="choice"]:checked')) {
        // Navigate to the next page
        window.location.href = 'next2.html'; // URL of the next page
    } else {
        alert('scroll to the next page');
        
    }
});





















// document.getElementById('nextbutton').addEventListener('click', function() {
//     // Check if a radio button is selected
//     if (document.querySelector('input[name="choice"]:checked')) {
//         // Handle the next step or navigate to another page
//         alert('You have completed the quiz.');
//         // Optionally, navigate to the final page or perform another action
//         // window.location.href = 'finalPage.html'; // Replace with the final page URL
//     } else {
//         alert('scroll to the next page');
//     }
// });





































// document.getElementById('nextbutton').addEventListener('click', function() {
//             // Check if at least one radio button is selected
//             if (document.querySelector('input[name="choice"]:checked')) {
//                 // Navigate to the next page or perform any other action
//                 // For demonstration purposes, we'll just alert
//                 alert('scroll to the previous page');
//             } else {
//                 alert('scroll to the next page');
//             }
//         });

//         // Optional: Allow navigation on Enter key press
//         document.addEventListener('keydown', function(event) {
//             if (event.key === 'Enter' && document.querySelector('input[name="choice"]:checked')) {
//                 // Perform the next action or navigation
//                 alert('scroll to the next page');
//             }
//         });
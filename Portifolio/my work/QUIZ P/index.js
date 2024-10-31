
document.querySelectorAll('input[name="choice"]').forEach(radio => {
    radio.addEventListener('change', function() {
        // Automatically navigate to the next page
        setTimeout(() => {
            window.location.href = 'next.html'; // URL of the next page
        }, 500); // Optional delay for smooth transition
    });
});

document.getElementById('nextbutton').addEventListener('click', function() {
    // Check if a radio button is selected
    if (document.querySelector('input[name="choice"]:checked')) {
        // Navigate to the next page
        window.location.href = 'next.html'; // URL of the next page
    } else {
        alert('scroll to the next page');
        
    }
}); 



































// document.querySelectorAll('input[name="choice"]').forEach(radio => {
//     radio.addEventListener('change', function() {
//         // Find the container of the current question
//         let container = document.querySelector('.container');
//         // Scroll smoothly to the next question
//         setTimeout(() => {
//             container.scrollIntoView({ behavior: 'smooth', block: 'end' });
//         }, 500); // Optional delay for smooth transition
//     });
// });

// document.getElementById('nextbutton').addEventListener('click', function() {
//     // Check if a radio button is selected
//     if (document.querySelector('input[name="choice"]:checked')) {
//         // Navigate to the next page
//         window.location.href = 'next.html'; // URL of the next page
//     } else {
//         alert('Please select an option before proceeding.');
//     }
// });


















// document.getElementById('nextbutton').addEventListener('click', function() {
//             // Check if at least one radio button is selected
//             if (document.querySelector('input[name="choice"]:checked')) {
//                 // Navigate to the next page
//                 window.location.href = 'next.html'; // Replace with the path to your next page
//             } else {
//                 alert('scroll to the next page');
//             }
//         });

//         // Optional: Allow navigation on Enter key press
//         document.addEventListener('keydown', function(event) {
//             if (event.key === 'Enter' && document.querySelector('input[name="choice"]:checked')) {
//                 window.location.href = 'next.html'; // Replace with the path to your next page
//             }
//         });
document.querySelectorAll('input[name="choice"]').forEach(radio => {
    radio.addEventListener('change', function() {
        // Automatically navigate to the next page
        setTimeout(() => {
            window.location.href = 'next3.html'; // URL of the next page
        }, 500); // Optional delay for smooth transition
    });
});

document.getElementById('nextbutton').addEventListener('click', function() {
    // Check if a radio button is selected
    if (document.querySelector('input[name="choice"]:checked')) {
        // Navigate to the next page
        window.location.href = 'next3.html'; // URL of the next page
    } else {
        alert('scroll to the next page');
        
    }
});























// document.querySelectorAll('input[name="choice"]').forEach(radio => {
//     radio.addEventListener('change', function() {
//         // Automatically navigate to the next page
//         setTimeout(() => {
//             window.location.href = 'next.html'; // URL of the next page
//         }, 500); // Optional delay for smooth transition
//     });
// });

// document.getElementById('nextbutton').addEventListener('click', function() {
//     // Check if a radio button is selected
//     if (document.querySelector('input[name="choice"]:checked')) {
//         // Navigate to the next page
//         window.location.href = 'next.html'; // URL of the next page
//     } else {
//         alert('scroll to the next page');
        
//     }
// });
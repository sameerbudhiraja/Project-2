// smooth scrooling by using locomotive js 

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// auto text typing effect using typed js library 

document.addEventListener('DOMContentLoaded', function() {
    // Strings for both Typed instances
    var strings = [
        ['Make', 'Sense.'],
        ['Build', 'Digital.'],
        ['Create', 'Bridges.']
    ];

    // Initialize variables to keep track of typing progress
    var currentIndex = 0;
    var isTyping = false;

    // Function to type characters for both instances
    function typeCharacters() {
        // Check if both instances are not already typing
        if (!isTyping) {
            isTyping = true;

            // Clear the content of the HTML elements
            document.getElementById('auto-type-1').textContent = '';
            document.getElementById('auto-type-2').textContent = '';
            
            // Type the characters for both instances simultaneously
            typeCharactersForInstance("#auto-type-1", strings[currentIndex][0], function() {
                typeCharactersForInstance("#auto-type-2", strings[currentIndex][1], function() {
                    // Increment index and reset if reached the end of strings array
                    currentIndex = (currentIndex + 1) % strings.length;
                    isTyping = false;
                });
            });
        }
    }

    // Function to type characters for a single instance
    function typeCharactersForInstance(selector, string, callback) {
        var element = document.querySelector(selector);
        element.textContent = ''; // Clear the content before typing the new string
        var i = 0;
        var interval = setInterval(function() {
            if (i < string.length) {
                element.textContent += string.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                callback();
            }
        }, 50); // Typing speed
    }

    // Start typing characters initially
    typeCharacters();
    setInterval(function() {
        typeCharacters();
    }, 2000); // Repeat every 5 seconds
});










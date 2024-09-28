var resourceEvent = document.querySelector(".resource");
var resourceShow = document.querySelector(".resourcebox");
var hideTimeout;  // Variable to store the timeout

resourceEvent.addEventListener('mouseover', () => {
    clearTimeout(hideTimeout);
    resourceShow.style.display = 'block';
});

// Hide the dropdown after 3 seconds when moving the mouse away from the "Resource" element
resourceEvent.addEventListener('mouseout', () => {
    hideTimeout = setTimeout(() => {
        resourceShow.style.display = 'none';
    }, 1000);  // 3000ms = 3 seconds delay
});

// Keep the dropdown visible when hovering over the dropdown itself
resourceShow.addEventListener('mouseover', () => {
    clearTimeout(hideTimeout);  // Clear the timeout so the dropdown stays visible
    resourceShow.style.display = 'block';
});

resourceShow.addEventListener('mouseout', () => {
    resourceShow.style.display = 'none';
});

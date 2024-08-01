document.addEventListener('DOMContentLoaded', function() {
    const ticker = document.querySelector('.stock-ticker');
    const ulElements = ticker.querySelectorAll('ul');
    const spaceSlider = document.getElementById('space');
    const speedSlider = document.getElementById('speed');
    const bgColorPicker = document.getElementById('bgColor');
    const textColorPicker = document.getElementById('textColor');

    // Function to update space between list items
    function updateSpace() {
        const spaceValue = `${spaceSlider.value}px`;
        ulElements.forEach(ul => {
            ul.querySelectorAll('li').forEach(li => {
                li.style.marginRight = spaceValue;
            });
        });
    }

    // Function to update ticker speed
    function updateSpeed() {
        const speedValue = `${21 - speedSlider.value}s`;
        ulElements.forEach(ul => {
            ul.style.animationDuration = speedValue;
        });
    }

    // Function to update background color
    function updateBgColor() {
        ticker.style.backgroundColor = bgColorPicker.value;
    }

    // Function to update text color
    function updateTextColor() {
        ulElements.forEach(ul => {
            ul.querySelectorAll('li').forEach(li => {
                li.style.color = textColorPicker.value;
            });
        });
    }

    // Initial setup
    updateSpace();
    updateSpeed();
    updateBgColor();
    updateTextColor();

    // Event listeners for controls
    spaceSlider.addEventListener('input', updateSpace);
    speedSlider.addEventListener('input', updateSpeed);
    bgColorPicker.addEventListener('input', updateBgColor);
    textColorPicker.addEventListener('input', updateTextColor);
});

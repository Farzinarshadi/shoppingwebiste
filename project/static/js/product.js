// colors
document.addEventListener("DOMContentLoaded", function() {
    const colorOptions = document.querySelectorAll('.color-option');
    const selectedColorName = document.getElementById('selected-color-name');
    const defaultSelected = document.querySelector('.color-option.selected');
    if (defaultSelected) {
        const colorName = defaultSelected.getAttribute('data-name');
        selectedColorName.textContent = colorName;
    }
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            const colorName = this.getAttribute('data-name');
            selectedColorName.textContent = colorName;
        });
    });
});

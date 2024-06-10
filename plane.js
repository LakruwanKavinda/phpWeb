document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('myButton');
    var text = document.getElementById('displayText');

    button.addEventListener('click', function () {
        if (text.style.display === 'none') {
            text.style.display = 'block';
        } else {
            text.style.display = 'none';
        }
    });
});

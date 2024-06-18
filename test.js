document.getElementById('toggleButton').addEventListener('click', function() {
    var content = document.getElementById('content');
    if (content.classList.contains('show')) {
        content.classList.remove('show');
    } else {
        content.classList.add('show');
    }
});
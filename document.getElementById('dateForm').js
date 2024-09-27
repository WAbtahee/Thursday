document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value;

    alert(Name: ${name}\nDate: ${date}\nMessage: ${message});
});



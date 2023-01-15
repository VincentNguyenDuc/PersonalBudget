const submitButton = document.getElementById('submit-button');
const container = document.getElementById('form');


// * Render
const renderError = response => {
    container.innerHTML = `<p>Your request returned an error from the server: </p>
<p>Code: ${response.status}</p>
<p>${response.statusText}</p>`;
};

const renderWelcome = response => {
    container.innerHTML = `<p id="welcome">Hi ${response[0].name}, welcome back!</p>`;
};


// * Event Listener
submitButton.addEventListener('click', () => {
    const id = document.getElementById("user-number").value;
    fetch(`/api/users/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                renderError(response);
            }
        })
        .then(response => {
            renderWelcome(response);
        });
});




const submitButton = document.getElementById('submit-button');
const envelopeContainer = document.getElementById('form');

const renderError = response => {
    envelopeContainer.innerHTML = `<p>Your request returned an error from the server: </p>
<p>Code: ${response.status}</p>
<p>${response.statusText}</p>`;
};

const renderEnvelopeWelcome = response => {
    envelopeContainer.innerHTML = `<p id="welcome">Hi ${response.name}, welcome back!</p>`;
};


submitButton.addEventListener('click', () => {
    const id = document.getElementById("user-number").value;

    fetch(`/api/envelopes?id=${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                renderError(response);
            }
        })
        .then(response => {
            renderEnvelopeWelcome(response);
        });
});
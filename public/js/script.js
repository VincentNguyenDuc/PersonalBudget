const fetchEnvelopesButton = document.getElementById('user-id');
const envelopesContainer = document.getElementById('envelopes-container');

const renderError = response => {
    quoteContainer.innerHTML = `<p>Your request returned an error from the server: </p>
                                <p>Code: ${response.status}</p>
                                <p>${response.statusText}</p>`;
};

const resetEnvelopes = () => {
    envelopesContainer.innerHTML = '';
};

const renderEnvelopes = () => {

};





fetchEnvelopesButton.addEventListener('click', () => {
    fetch('/api/envelopes')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                renderError(response);
            }
        })
        .then(response => {
            
        });
});
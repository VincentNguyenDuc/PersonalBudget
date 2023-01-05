const renderError = response => {
    quoteContainer.innerHTML = `<p>Your request returned an error from the server: </p>
                                <p>Code: ${response.status}</p>
                                <p>${response.statusText}</p>`;
};
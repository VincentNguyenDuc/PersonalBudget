const submitButton = document.getElementById('submit-button');
const container = document.getElementById('form');


// * Render
const renderError = response => {
    container.innerHTML = `<p>Your request returned an error from the server: </p>
<p>Code: ${response.status}</p>
<p>${response.statusText}</p>`;
};

const renderWelcome = response => {
    container.innerHTML = `
    <p id="welcome">Hi ${response.name}, welcome back!</p>
    <button id="access">Access your wallet</button>
    <button id="update">Update your data</button>`;
};

const renderData = response => {
    container.innerHTML = `
    <div id="user-data">
        <h2 id="label">${response.name}'s Wallet</h2>
        <p id="information">
            Name: ${response.name}
            Salary: ${response.salary}
            Number of Categories: ${Object.keys(response.categories).length}
            Balance: ${response.balance}
        </p>
    </div>`;
};



// * Event Listener
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
            renderWelcome(response);
        });
});

const accessButton = document.getElementById("access");
const updateButton = document.getElementById("update");

accessButton.addEventListener('click', () => {
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
            renderData(response);
        });
});


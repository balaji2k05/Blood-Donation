function createHomePage() {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
        <h1>Welcome to Blood Donation App</h1>
        <button id="donateButton">Donate Now</button>
        <button id="logoutButton">Logout</button>
    `;

    const donateButton = container.querySelector('#donateButton');
    const logoutButton = container.querySelector('#logoutButton');

    donateButton.addEventListener('click', () => {
        app.showPage('donate');
    });

    logoutButton.addEventListener('click', () => {
        app.showPage('login');
    });

    return container;
}

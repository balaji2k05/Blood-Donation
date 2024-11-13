function createDonatePage() {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
        <h1>Schedule Blood Donation</h1>
        <form id="donateForm">
            <label for="donateName">Full Name:</label>
            <input type="text" id="donateName" required>
            <label for="bloodType">Blood Type:</label>
            <select id="bloodType" required>
                <option value="">Select blood type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>
            <label for="donationDate">Preferred Donation Date:</label>
            <input type="date" id="donationDate" required>
            <button type="submit">Schedule Donation</button>
        </form>
        <button id="backToHome">Back to Home</button>
    `;

    const donateForm = container.querySelector('#donateForm');
    const backToHomeButton = container.querySelector('#backToHome');

    donateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('donateName').value;
        const bloodType = document.getElementById('bloodType').value;
        const date = document.getElementById('donationDate').value;

        alert(`Donation scheduled for ${name} (${bloodType}) on ${date}`);
        donateForm.reset();
    });

    backToHomeButton.addEventListener('click', () => {
        app.showPage('home');
    });

    return container;
}

// Store DOM elements and state
let currentPage = 'login';
let users = [];

// Initialize the app
function initApp() {
    const root = document.getElementById('root');
    renderPage(root);
}

// Main render function
function renderPage(container) {
    container.innerHTML = '';
    
    switch(currentPage) {
        case 'login':
            container.appendChild(createLoginPage());
            break;
        case 'signup':
            container.appendChild(createSignupPage());
            break;
        case 'home':
            container.appendChild(createHomePage());
            break;
        case 'donate':
            container.appendChild(createDonatePage());
            break;
    }
}

// Login Page Component
function createLoginPage() {
    const loginDiv = document.createElement('div');
    loginDiv.className = 'min-h-screen bg-gray-100 flex items-center justify-center p-4';
    
    loginDiv.innerHTML = `
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 class="text-2xl font-bold text-center text-red-600 mb-6">Blood Donation App</h1>
            <form id="loginForm" class="space-y-4">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" required class="mt-1 block w-full rounded-md border border-gray-300 p-2">
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" required class="mt-1 block w-full rounded-md border border-gray-300 p-2">
                </div>
                <button type="submit" class="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700">Login</button>
            </form>
            <div class="mt-4 text-center">
                <button id="showSignup" class="text-red-600 hover:text-red-800">Don't have an account? Sign up</button>
            </div>
        </div>
    `;

    // Add event listeners
    const form = loginDiv.querySelector('#loginForm');
    const signupBtn = loginDiv.querySelector('#showSignup');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('#email').value;
        const password = form.querySelector('#password').value;
        
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            currentPage = 'home';
            renderPage(document.getElementById('root'));
        } else {
            alert('Invalid credentials. Please sign up if you don\'t have an account.');
        }
    });

    signupBtn.addEventListener('click', () => {
        currentPage = 'signup';
        renderPage(document.getElementById('root'));
    });

    return loginDiv;
}

// Signup Page Component
function createSignupPage() {
    const signupDiv = document.createElement('div');
    signupDiv.className = 'min-h-screen bg-gray-100 flex items-center justify-center p-4';
    
    signupDiv.innerHTML = `
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 class="text-2xl font-bold text-center text-red-600 mb-6">Sign Up</h1>
            <form id="signupForm" class="space-y-4">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" required class="mt-1 block w-full rounded-md border border-gray-300 p-2">
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" required class="mt-1 block w-full rounded-md border border-gray-300 p-2">
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" required class="mt-1 block w-full rounded-md border border-gray-300 p-2">
                </div>
                <button type="submit" class="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700">Sign Up</button>
            </form>
            <div class="mt-4 text-center">
                <button id="showLogin" class="text-red-600 hover:text-red-800">Already have an account? Login</button>
            </div>
        </div>
    `;

    // Add event listeners
    const form = signupDiv.querySelector('#signupForm');
    const loginBtn = signupDiv.querySelector('#showLogin');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const password = form.querySelector('#password').value;
        
        users.push({ name, email, password });
        alert('Sign up successful! Please login.');
        currentPage = 'login';
        renderPage(document.getElementById('root'));
    });

    loginBtn.addEventListener('click', () => {
        currentPage = 'login';
        renderPage(document.getElementById('root'));
    });

    return signupDiv;
}

// Home Page Component
function createHomePage() {
    const homeDiv = document.createElement('div');
    homeDiv.className = 'min-h-screen bg-gray-100 flex items-center justify-center p-4';
    
    homeDiv.innerHTML = `
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 class="text-2xl font-bold text-center text-red-600 mb-6">Welcome to Blood Donation App</h1>
            <div class="space-y-4">
                <button id="donateBtn" class="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700">Donate Now</button>
                <button id="logoutBtn" class="w-full bg-white text-red-600 p-2 rounded-md border border-red-600 hover:bg-red-50">Logout</button>
            </div>
        </div>
    `;

    // Add event listeners
    homeDiv.querySelector('#donateBtn').addEventListener('click', () => {
        currentPage = 'donate';
        renderPage(document.getElementById('root'));
    });

    homeDiv.querySelector('#logoutBtn').addEventListener('click', () => {
        currentPage = 'login';
        renderPage(document.getElementById('root'));
    });

    return homeDiv;
}

// Donate Page Component
function createDonatePage() {
    const donateDiv = document.createElement('div');
    donateDiv.className = 'min-h-screen bg-gray-100 flex items-center justify-center p-4';
    
    donateDiv.innerHTML = `
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 class="text-2xl font-bold text-center text-red-600 mb-6">Schedule Blood Donation</h1>
            <form id="donateForm" class="space-y-4">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="name" required class="mt-1 block w-full rounded-md border border-gray-300 p-2">
                </div>
                <div>
                    <label for="bloodType" class="block text-sm font-medium text-gray-700">Blood Type</label>
                    <select id="bloodType" required class="mt-1 block w-full rounded-md border border-gray-300 p-2">
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
                </div>
                <div>
                    <label for="date" class="block text-sm font-medium text-gray-700">Preferred Donation Date</label>
                    <input type="date" id="date" required class="mt-1 block w-full rounded-md border border-gray-300 p-2">
                </div>
                <button type="submit" class="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700">Schedule Donation</button>
            </form>
            <div class="mt-4">
                <button id="backBtn" class="w-full bg-white text-red-600 p-2 rounded-md border border-red-600 hover:bg-red-50">Back to Home</button>
            </div>
        </div>
    `;

    // Add event listeners
    const form = donateDiv.querySelector('#donateForm');
    const backBtn = donateDiv.querySelector('#backBtn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('#name').value;
        const bloodType = form.querySelector('#bloodType').value;
        const date = form.querySelector('#date').value;
        
        alert(`Donation scheduled successfully!\nName: ${name}\nBlood Type: ${bloodType}\nDate: ${date}`);
        currentPage = 'home';
        renderPage(document.getElementById('root'));
    });

    backBtn.addEventListener('click', () => {
        currentPage = 'home';
        renderPage(document.getElementById('root'));
    });

    return donateDiv;
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

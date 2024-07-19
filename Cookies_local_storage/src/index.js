// Function to set cookies
function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    document.cookie = `firstname=${firstname}; path=/`;
    document.cookie = `email=${email}; path=/`;

    alert('Cookies have been set!');
}

// Function to show cookies
function showCookies() {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        acc[name] = value;
        return acc;
    }, {});

    const p = document.createElement('p');
    p.innerHTML = `Cookies: ${document.cookie}`;

    const displayDiv = document.getElementById('cookieDisplay');
    displayDiv.innerHTML = ''; // Clear previous content
    displayDiv.appendChild(p);
}

// Export the functions to make them available in the HTML file
window.setCookies = setCookies;
window.showCookies = showCookies;

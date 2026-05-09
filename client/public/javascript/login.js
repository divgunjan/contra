
    function switchTab(clickedTab) {
        let tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => tab.classList.remove('active'));
        clickedTab.classList.add('active');

        const isSignup = clickedTab.innerText === "Sign Up";

        document.getElementById("nameField").style.display =
            isSignup ? "block" : "none";

        document.getElementById("confirmPasswordField").style.display =
            isSignup ? "block" : "none";

        document.querySelector(".btn-primary").innerText =
            isSignup ? "Create Account" : "Login";
    }

    function activateSignup() {
        const tabs = document.querySelectorAll('.tab');
        tabs[1].click();
    }

    // LOGIN REDIRECT
    function handleLogin(event) {
        event.preventDefault();

        const activeTab =
            document.querySelector(".tab.active").innerText;

        // Only redirect on Login
        if (activeTab === "Login") {
            window.location.href = "dashboard.html";
        } else {
            alert("Account created successfully!");
            window.location.href = "dashboard.html";
        }
    }

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
}

themeToggle.addEventListener('click', toggleTheme);


// Default users (you can add/remove as needed)
let users = JSON.parse(localStorage.getItem('users')) || [
    {
        id: 1,
        email: "test@example.com",
        password: "test1234",
        created_at: new Date().toISOString(),
        language: "az"
    },
    {
        id: 2,
        email: "admin@example.com",
        password: "admin456",
        created_at: new Date().toISOString(),
        language: "az"
    }
];

// Save users to localStorage
function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

// Language translations
const translations = {
    az: {
        title: "Test Sisteminə Giriş",
        subtitle: "Test və məsələlər üçün daxil olun",
        emailLabel: "Mail",
        emailPlaceholder: "Mail ünvanınızı daxil edin",
        passwordLabel: "Kod",
        passwordPlaceholder: "Kodunuzu daxil edin",
        remember: "Məlumatlarımı yadda saxla",
        loginBtn: "Daxil Ol",
        infoText: "Daxil olma məlumatları administrator tərəfindən təqdim olunur. Brauzerinizdə saxlayın.",
        success: "Uğurlu giriş! Yönləndirilir...",
        error: "Yanlış Mail və ya Kod. Zəhmət olmasa yoxlayın.",
        emptyFields: "Zəhmət olmasa hər iki xananı doldurun."
    },
    en: {
        title: "Test System Login",
        subtitle: "Login for tests and problems",
        emailLabel: "Mail",
        emailPlaceholder: "Enter your email address",
        passwordLabel: "Code",
        passwordPlaceholder: "Enter your code",
        remember: "Remember me",
        loginBtn: "Login",
        infoText: "Login credentials are provided by administrator. Save them in your browser.",
        success: "Login successful! Redirecting...",
        error: "Invalid Mail or Code. Please check your credentials.",
        emptyFields: "Please fill in both fields."
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'az';

// Update UI language
function updateLanguage() {
    const trans = translations[currentLang];
    
    // Update text content
    document.querySelector('.logo h1').textContent = trans.title;
    document.querySelector('.subtitle').textContent = trans.subtitle;
    
    const emailLabel = document.querySelector('label[for="email"]');
    emailLabel.innerHTML = `<i class="fas fa-envelope"></i> ${trans.emailLabel}`;
    document.getElementById('email').placeholder = trans.emailPlaceholder;
    
    const passwordLabel = document.querySelector('label[for="password"]');
    passwordLabel.innerHTML = `<i class="fas fa-key"></i> ${trans.passwordLabel}`;
    document.getElementById('password').placeholder = trans.passwordPlaceholder;
    
    document.querySelector('.checkbox span').textContent = trans.remember;
    document.querySelector('.login-btn').innerHTML = `<i class="fas fa-sign-in-alt"></i> ${trans.loginBtn}`;
    document.querySelector('.info-box p').textContent = trans.infoText;
    
    // Update language buttons
    document.getElementById('langAz').classList.toggle('active', currentLang === 'az');
    document.getElementById('langEn').classList.toggle('active', currentLang === 'en');
    
    // Save language preference
    localStorage.setItem('language', currentLang);
}

// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

// Show message function
function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = 'message ' + type;
    
    // Auto-hide success messages after 3 seconds
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    }
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const rememberMe = document.getElementById('remember').checked;
    
    const trans = translations[currentLang];
    
    // Validate inputs
    if (!email || !password) {
        showMessage(trans.emptyFields, 'error');
        return;
    }
    
    // Check if user exists
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Save to session
        sessionStorage.setItem('loggedInUser', JSON.stringify({
            email: user.email,
            language: currentLang,
            loginTime: new Date().toISOString()
        }));
        
        // Save to localStorage if "Remember me" is checked
        if (rememberMe) {
            localStorage.setItem('rememberedEmail', email);
        } else {
            localStorage.removeItem('rememberedEmail');
        }
        
        // Show success message and redirect
        showMessage(trans.success, 'success');
        
        // Redirect to index1.html after 1.5 seconds
        setTimeout(() => {
            window.location.href = 'index1.html';
        }, 1500);
    } else {
        showMessage(trans.error, 'error');
    }
});

// Language switchers
document.getElementById('langAz').addEventListener('click', function() {
    currentLang = 'az';
    updateLanguage();
});

document.getElementById('langEn').addEventListener('click', function() {
    currentLang = 'en';
    updateLanguage();
});

// Check for remembered email on page load
window.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    updateLanguage();
    
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        document.getElementById('email').value = rememberedEmail;
        document.getElementById('remember').checked = true;
    }
});

// Function to add new user (for admin use)
function addUser(email, password, language = 'az') {
    const newUser = {
        id: users.length + 1,
        email: email,
        password: password,
        language: language,
        created_at: new Date().toISOString()
    };
    
    users.push(newUser);
    saveUsers();
    console.log('New user added:', newUser);
    return newUser;
}

// Function to list all users
function listUsers() {
    console.log('Current users:', users);
    return users;
}

// Function to check if user is logged in (for index1.html)
function checkLogin() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (!loggedInUser && !window.location.href.includes('index.html')) {
        window.location.href = 'index.html';
    }
}

// Example: To add a new user, run in browser console:
// addUser("newuser@example.com", "password123");
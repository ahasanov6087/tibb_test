// Safari-safe localStorage function
function safeLocalStorage() {
    try {
        // Test if localStorage is available and working
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return localStorage;
    } catch (e) {
        // Fallback to in-memory storage
        console.warn('localStorage not available, using fallback storage');
        return {
            _data: {},
            setItem: function(key, value) {
                this._data[key] = String(value);
                // Also try to set a cookie as backup
                document.cookie = key + "=" + encodeURIComponent(value) + "; path=/; max-age=31536000; SameSite=Lax";
            },
            getItem: function(key) {
                if (this._data.hasOwnProperty(key)) {
                    return this._data[key];
                }
                // Try to get from cookie
                var name = key + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for(var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) === ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) === 0) {
                        return decodeURIComponent(c.substring(name.length, c.length));
                    }
                }
                return null;
            },
            removeItem: function(key) {
                delete this._data[key];
                document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            },
            clear: function() {
                this._data = {};
                // Clear all cookies for this domain
                var cookies = document.cookie.split(";");
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    var eqPos = cookie.indexOf("=");
                    var name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
                    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
                }
            }
        };
    }
}

// Use safe localStorage
const storage = safeLocalStorage();

// Detect Safari
function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || 
           /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

// Show Safari warning if needed
if (isSafari()) {
    // Check if localStorage works
    try {
        storage.setItem('safari_test', 'test');
        if (storage.getItem('safari_test') !== 'test') {
            throw new Error('localStorage test failed');
        }
        storage.removeItem('safari_test');
    } catch (e) {
        // Show warning
        const warning = document.getElementById('safariWarning');
        if (warning) {
            warning.classList.add('show');
        }
    }
}

// Default users - using fallback if localStorage fails
let users = [];
try {
    const storedUsers = storage.getItem('users');
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    } else {
        // Initial users
        users = [
            {
                id: 1,
                email: "test@example.com",
                password: "test123",
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
        storage.setItem('users', JSON.stringify(users));
    }
} catch (e) {
    console.error('Error loading users:', e);
    users = [
        {
            id: 1,
            email: "test@example.com",
            password: "test123",
            created_at: new Date().toISOString(),
            language: "az"
        }
    ];
}

// Save users function
function saveUsers() {
    try {
        storage.setItem('users', JSON.stringify(users));
    } catch (e) {
        console.error('Error saving users:', e);
    }
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
let currentLang = storage.getItem('language') || 'az';

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
    try {
        storage.setItem('language', currentLang);
    } catch (e) {
        console.error('Error saving language:', e);
    }
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
        // Save to sessionStorage (works better in Safari)
        try {
            sessionStorage.setItem('loggedInUser', JSON.stringify({
                email: user.email,
                language: currentLang,
                loginTime: new Date().toISOString()
            }));
        } catch (e) {
            // Fallback to in-memory
            window._loggedInUser = {
                email: user.email,
                language: currentLang,
                loginTime: new Date().toISOString()
            };
        }
        
        // Save to storage if "Remember me" is checked
        if (rememberMe) {
            try {
                storage.setItem('rememberedEmail', email);
            } catch (e) {
                console.error('Error saving remembered email:', e);
            }
        } else {
            try {
                storage.removeItem('rememberedEmail');
            } catch (e) {
                console.error('Error removing remembered email:', e);
            }
        }
        
        // Show success message and redirect
        showMessage(trans.success, 'success');
        
        // Safari-safe redirect
        setTimeout(() => {
            // Use location.assign for better Safari compatibility
            window.location.assign('index1.html');
        }, 1500);
    } else {
        showMessage(trans.error, 'error');
    }
});

// Language switchers
document.getElementById('langAz').addEventListener('click', function(e) {
    e.preventDefault();
    currentLang = 'az';
    updateLanguage();
});

document.getElementById('langEn').addEventListener('click', function(e) {
    e.preventDefault();
    currentLang = 'en';
    updateLanguage();
});

// Check for remembered email on page load
window.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    updateLanguage();
    
    try {
        const rememberedEmail = storage.getItem('rememberedEmail');
        if (rememberedEmail) {
            document.getElementById('email').value = rememberedEmail;
            document.getElementById('remember').checked = true;
        }
    } catch (e) {
        console.error('Error loading remembered email:', e);
    }
    
    // Safari: prevent form zoom on focus
    if (isSafari()) {
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', function() {
                window.scrollTo(0, 0);
                document.body.scrollTop = 0;
            });
        });
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
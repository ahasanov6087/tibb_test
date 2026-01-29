/* ===============================
   INITIALIZE USERS (ONLY ONCE)
================================ */
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([
        { id: 1, email: "test@example.com", password: "test1234" },
        { id: 2, email: "admin@example.com", password: "admin456" },
        { id: 3, email: "intaynur@mail.ru", password: "hasanova" },
        { id: 4, email: "lemanamrahova@mail.ru", password: "amrahova" },
        { id: 5, email: "revanibrahimli121618@gmail.com", password: "ruhiyye0101" },
        { id: 6, email: "anarismoyilov791@gmail.com", password: "1981" },
        { id: 7, email: "arzu1973", password: "arzu1973" },
        { id: 8, email: "memmedovakemale", password: "kemale2026" },
        { id: 9, email: "məmmədəliyevagulsən", password: "gulsən2026" },
        { id: 10, email: "Leylaleyla", password: "leyla2026" },
        { id: 11, email: "Səidə2026", password: "səidə2026" },
    ]));
}

const users = JSON.parse(localStorage.getItem('users'));


/* ===============================
   PASSWORD TOGGLE
================================ */
document.getElementById("togglePassword").addEventListener("click", () => {
    const input = document.getElementById("password");
    input.type = input.type === "password" ? "text" : "password";
});


/* ===============================
   LOGIN HANDLER
================================ */
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const remember = document.getElementById("remember").checked;
    const message = document.getElementById("message");

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        message.textContent = "Yanlış Mail və ya Kod";
        message.className = "message error";
        return;
    }

    // save login
    sessionStorage.setItem("loggedInUser", JSON.stringify(user));

    if (remember) {
        localStorage.setItem("rememberedEmail", email);
    } else {
        localStorage.removeItem("rememberedEmail");
    }

    message.textContent = "Uğurlu giriş! Yönləndirilir...";
    message.className = "message success";

    setTimeout(() => {
        window.location.href = "index1.html";
    }, 1200);
});


/* ===============================
   REMEMBER EMAIL
================================ */
window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("rememberedEmail");
    if (saved) {
        document.getElementById("email").value = saved;
        document.getElementById("remember").checked = true;
    }
});

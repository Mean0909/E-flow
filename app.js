const translations = {
    km: {
        agency: "និយ័តករមូលប័ត្រកម្ពុជា",
        title: "ប្រព័ន្ធគ្រប់គ្រងលំហូរឯកសារ និងអនុម័តឌីជីថល",
        desc: "ចូលប្រើប្រព័ន្ធដើម្បីដាក់សំណើ ត្រួតពិនិត្យ អនុម័ត និងតាមដានឯកសារបានយ៉ាងងាយស្រួល។",
        login: "ចូលប្រើប្រព័ន្ធ",
        quickAccess: "ការចូលប្រើប្រាស់រហ័ស",
        email: "អ៊ីមែល ឬ ឈ្មោះអ្នកប្រើ",
        emailPlaceholder: "បញ្ចូលអ៊ីមែល ឬ username",
        password: "ពាក្យសម្ងាត់",
        passwordPlaceholder: "បញ្ចូលពាក្យសម្ងាត់",
        remember: "ចងចាំខ្ញុំ",
        forgot: "ភ្លេចពាក្យសម្ងាត់?",
        submit: "ចូលប្រើប្រព័ន្ធ",
        digital: "ចូលជាមួយ CamDigiKey",
        telegram: "Telegram",
        google: "Google",
        noteLabel: "សម្គាល់៖",
        note: "សម្រាប់ក្រុមហ៊ុនដែលទទួលបានអាជ្ញាបណ្ណ សូមចូលប្រើប្រាស់ប្រព័ន្ធដោយប្រើ CamDigiKey។",
        error: "❌ គណនី ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ",
        empty: "❌ សូមបំពេញព័ត៌មានទាំងអស់",
        signupHint: "មិនទាន់មានគណនីមែនទេ?",
        signupBtn: "បង្កើតគណនី"
    },
    en: {
        agency: "Securities and Exchange Regulator of Cambodia",
        title: "Digital Document Workflow and Approval System",
        desc: "Access the system to submit, review, approve, and track documents easily.",
        login: "Login",
        quickAccess: "Quick Access",
        email: "Email or Username",
        emailPlaceholder: "Enter email or username",
        password: "Password",
        passwordPlaceholder: "Enter password",
        remember: "Remember me",
        forgot: "Forgot password?",
        submit: "Login",
        digital: "Login with CamDigiKey",
        telegram: "Telegram",
        google: "Google",
        noteLabel: "Note:",
        note: "For licensed companies, please access the system using CamDigiKey.",
        error: "❌ Invalid username or password",
        empty: "❌ Please fill in all fields",
        signupHint: "Don't have an account?",
        signupBtn: "Create Account"
    }
};

let currentLang = "km";

function switchLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.getElementById("agencyTitle").innerText = translations[lang].agency;
    document.getElementById("mainTitle").innerText = translations[lang].title;
    document.getElementById("mainDesc").innerText = translations[lang].desc;
    document.getElementById("loginTitle").innerText = translations[lang].login;
    document.getElementById("quickAccessText").innerText = translations[lang].quickAccess;
    document.getElementById("labelUsername").innerText = translations[lang].email;
    document.getElementById("username").placeholder = translations[lang].emailPlaceholder;
    document.getElementById("labelPassword").innerText = translations[lang].password;
    document.getElementById("password").placeholder = translations[lang].passwordPlaceholder;
    document.querySelector(".remember-label").innerText = translations[lang].remember;
    document.getElementById("forgotText").innerText = translations[lang].forgot;
    document.getElementById("submitBtn").innerText = translations[lang].submit;
    document.getElementById("digitalText").innerText = translations[lang].digital;
    document.getElementById("telegramText").innerText = translations[lang].telegram;
    document.getElementById("googleText").innerText = translations[lang].google;
    document.getElementById("noteLabel").innerText = translations[lang].noteLabel;
    document.getElementById("noteText").innerText = translations[lang].note;
    document.getElementById("signupHint").innerText = translations[lang].signupHint;
    document.getElementById("signupBtn").innerText = translations[lang].signupBtn;

    const errorMsg = document.getElementById("errorMsg");
    if (errorMsg.style.display === "block") {
        errorMsg.innerText = translations[lang].error;
    }

    document.getElementById("btnKm").classList.toggle("active", lang === "km");
    document.getElementById("btnEn").classList.toggle("active", lang === "en");
}

function getUsers() {
    return JSON.parse(localStorage.getItem("serc_users") || "[]");
}

function saveUsers(users) {
    localStorage.setItem("serc_users", JSON.stringify(users));
}

function findUserByEmailOrUsername(value) {
    const users = getUsers();
    return users.find(u =>
        (u.username && u.username.toLowerCase() === value.toLowerCase()) ||
        (u.email && u.email.toLowerCase() === value.toLowerCase())
    );
}

function loginUser(usernameOrEmail, password) {
    const user = findUserByEmailOrUsername(usernameOrEmail);

    if (!user) return false;

    // social account
    if (user.provider && !user.password) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        return true;
    }

    // normal account
    if (user.password !== password) return false;

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    return true;
}

function registerSocialUser(provider) {
    const users = getUsers();
    let socialUser = null;

    if (provider === "google") {
        socialUser = {
            id: "google_" + Date.now(),
            fullName: "Google User",
            username: "google_user_" + Math.floor(Math.random() * 10000),
            email: "googleuser" + Math.floor(Math.random() * 10000) + "@gmail.com",
            provider: "google",
            loginType: "social",
            createdAt: new Date().toISOString()
        };
    }

    if (provider === "telegram") {
        socialUser = {
            id: "telegram_" + Date.now(),
            fullName: "Telegram User",
            username: "telegram_user_" + Math.floor(Math.random() * 10000),
            email: "telegramuser" + Math.floor(Math.random() * 10000) + "@telegram.local",
            provider: "telegram",
            loginType: "social",
            createdAt: new Date().toISOString()
        };
    }

    if (!socialUser) return;

    users.push(socialUser);
    saveUsers(users);
    localStorage.setItem("loggedInUser", JSON.stringify(socialUser));
    window.location.href = "E-flow-updated.html";
}

function logoutUser() {
    localStorage.removeItem("loggedInUser");
}

document.getElementById("btnKm").addEventListener("click", () => switchLang("km"));
document.getElementById("btnEn").addEventListener("click", () => switchLang("en"));

document.getElementById("googleLoginBtn").addEventListener("click", function () {
    registerSocialUser("google");
});

document.getElementById("telegramLoginBtn").addEventListener("click", function () {
    registerSocialUser("telegram");
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const remember = document.getElementById("remember").checked;
    const errorMsg = document.getElementById("errorMsg");

    if (username === "" || password === "") {
        errorMsg.innerText = translations[currentLang].empty;
        errorMsg.style.display = "block";
        return;
    }

    if (loginUser(username, password)) {
        if (remember) {
            localStorage.setItem("rememberedUsername", username);
        } else {
            localStorage.removeItem("rememberedUsername");
        }
        window.location.href = "E-flow-updated.html";
    } else {
        errorMsg.innerText = translations[currentLang].error;
        errorMsg.style.display = "block";
    }
});

window.onload = function () {
    const savedUsername = localStorage.getItem("rememberedUsername");
    if (savedUsername) {
        document.getElementById("username").value = savedUsername;
        document.getElementById("remember").checked = true;
    }

    logoutUser();
    switchLang("km");
};
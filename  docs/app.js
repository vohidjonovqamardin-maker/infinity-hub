
const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const languageSelect = document.getElementById("language");

function setLanguage(lang) {
    const t = translations[lang] || translations.uz;

    document.getElementById("welcome").textContent = t.welcome;
    document.getElementById("subtitle").textContent = t.subtitle;
    document.getElementById("back-button").textContent = t.back;
}

languageSelect.addEventListener("change", function () {
    setLanguage(this.value);
});

function openModule(module) {
    const titles = {
        ai: "🤖 INFINITY AI",
        studio: "💻 APP STUDIO",
        creative: "🎨 CREATIVE LAB",
        market: "🛍️ MARKETPLACE",
        community: "🌐 COMMUNITY",
        profile: "👤 MY SPACE"
    };

    const lang = languageSelect.value;
    const t = translations[lang] || translations.uz;

    document.querySelector(".welcome").style.display = "none";
    document.querySelector(".modules").style.display = "none";

    document.getElementById("module-page").style.display = "block";
    document.getElementById("module-title").textContent = titles[module];
    document.getElementById("module-description").textContent = t.description;
}

function goHome() {
    document.querySelector(".welcome").style.display = "block";
    document.querySelector(".modules").style.display = "grid";

    document.getElementById("module-page").style.display = "none";
}

setLanguage("uz");

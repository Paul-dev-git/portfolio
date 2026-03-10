const toggle = document.querySelector('.darkmode-toggle');
const selector = toggle.querySelector('.selector');
const icons = toggle.querySelectorAll('.mode-icon');

/* gespeichertes Theme laden */

let savedTheme = localStorage.getItem("theme");

let isDarkMode = savedTheme === "dark";


function updateToggle() {

    const activeIcon = isDarkMode ? icons[1] : icons[0];

    const containerRect = toggle.getBoundingClientRect();
    const iconRect = activeIcon.getBoundingClientRect();
    const leftPos = iconRect.left - containerRect.left;

    selector.style.left = `${leftPos + (iconRect.width - selector.offsetWidth)/2}px`;

    icons.forEach((icon, idx) => {

        if ((isDarkMode && idx === 1) || (!isDarkMode && idx === 0)) {
            icon.classList.add('active');
        } else {
            icon.classList.remove('active');
        }

    });

    const theme = isDarkMode ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);

    /* Theme speichern */

    localStorage.setItem("theme", theme);
}


/* Toggle Klick */

toggle.addEventListener("click", () => {

    isDarkMode = !isDarkMode;

    updateToggle();

});


/* Beim Laden der Seite anwenden */

updateToggle();
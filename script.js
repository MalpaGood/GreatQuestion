const oldButtons = document.querySelectorAll(".old-button");
const newButtonsGroups = [
    ["Nowy Przycisk A1", "Nowy Przycisk A2", "Nowy Przycisk A3"],
    ["Nowy Przycisk B1", "Nowy Przycisk B2", "Nowy Przycisk B3"],
    ["Nowy Przycisk C1", "Nowy Przycisk C2", "Nowy Przycisk C3"],
];

oldButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Ukryj stare przyciski
        oldButtons.forEach((btn) => {
            btn.style.opacity = "0";
            btn.style.transform = "translateY(20px)";
            setTimeout(() => {
                btn.style.visibility = "hidden";
            }, 500);
        });

        // Ustal tekst dla nowych przycisków
        const newButtonGroup = newButtonsGroups[index];
        newButtonGroup.forEach((text, idx) => {
            const newButton = document.querySelectorAll(".new-button")[idx];
            newButton.textContent = text;
        });

        // Pokaż nowe przyciski
        const newButtons = document.querySelectorAll(".new-button");
        newButtons.forEach((btn) => {
            btn.style.visibility = "visible";
            setTimeout(() => {
                btn.style.opacity = "1";
                btn.style.transform = "translateY(0px)";
            }, 10);
        });
    });
});

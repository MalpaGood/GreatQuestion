const container = document.querySelector(".button-container");
const oldButtons = document.querySelectorAll(".old-button");

const newButtonsGroups = [
    [
        { text: "Nowy Przycisk A1", url: "url_podstrony_A1.html" },
        { text: "Nowy Przycisk A2", url: "url_podstrony_A2.html" },
        { text: "Nowy Przycisk A3", url: "url_podstrony_A3.html" },
    ],
    [
        { text: "Nowy Przycisk B1", url: "url_podstrony_B1.html" },
        { text: "Nowy Przycisk B2", url: "url_podstrony_B2.html" },
        { text: "Nowy Przycisk B3", url: "url_podstrony_B3.html" },
    ],
    [
        { text: "Nowy Przycisk C1", url: "url_podstrony_C1.html" },
        { text: "Nowy Przycisk C2", url: "url_podstrony_C2.html" },
        { text: "Nowy Przycisk C3", url: "url_podstrony_C3.html" },
    ],
];

oldButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Ukryj stare przyciski
        oldButtons.forEach((btn) => {
            btn.style.opacity = "0";
            btn.style.transform = "translateY(0px)";
        });

        // Po zakończeniu animacji ukrywania starych przycisków:
        setTimeout(() => {
            // Ustaw stare przyciski na 'display: none'
            oldButtons.forEach((btn) => {
                btn.style.display = "none";
            });

            // Usuń poprzednie nowe przyciski (jeśli istnieją)
            const existingNewButtons = document.querySelectorAll(".new-button");
            existingNewButtons.forEach((btn) => btn.remove());

            // Dodaj nowe przyciski
            const newButtonGroup = newButtonsGroups[index];
            newButtonGroup.forEach((data) => {
                const newButton = document.createElement("button");
                newButton.classList.add("new-button", "new-button-entering");
                newButton.textContent = data.text;
                newButton.setAttribute("data-url", data.url);

                newButton.addEventListener("click", function () {
                    const url = this.getAttribute("data-url");
                    if (url) {
                        window.location.href = url;
                    }
                });

                container.appendChild(newButton);

                setTimeout(() => {
                    newButton.classList.remove("new-button-entering");
                }, 10);
            });

            // Dodaj przycisk cofania
            const backButton = document.createElement("button");
            backButton.classList.add("back-button");
            backButton.textContent = "Cofnij do początkowych przycisków";
            backButton.addEventListener("click", function () {
                // Ukryj nowe przyciski, w tym przycisk cofania
                const allNewButtons = document.querySelectorAll(".new-button");
                allNewButtons.forEach((btn) => {
                    btn.style.opacity = "0";
                });

                // Po zakończeniu animacji ukrywania nowych przycisków:
                setTimeout(() => {
                    allNewButtons.forEach((btn) => {
                        btn.remove();
                    });

                    // Usuń przycisk "Cofnij"
                    const backButtonElement =
                        document.querySelector(".back-button");
                    if (backButtonElement) {
                        backButtonElement.remove();
                    }

                    // Pokaż stare przyciski
                    oldButtons.forEach((btn) => {
                        btn.style.display = "";
                        btn.style.opacity = "1";
                        btn.style.transform = "translateY(0px)";
                    });
                }, 400); // Dopasuj czas do długości animacji ukrywania nowych przycisków
            });

            container.appendChild(backButton);
        }, 400); // Dopasuj czas do długości animacji ukrywania starych przycisków
    });
});

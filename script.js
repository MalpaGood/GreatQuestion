const container = document.querySelector(".button-container");
const oldButtons = document.querySelectorAll(".old-button");

const newButtonsGroups = [
    [
        { text: "TAK", url: "url_podstrony_A1.html" },
        { text: "AM", url: "url_podstrony_A2.html" },
        { text: "PZ", url: "url_podstrony_A3.html" },
    ],
    [
        { text: "Nowy Przycisk B1", url: "url_podstrony_B1.html" },
        { text: "Nowy Przycisk B2", url: "url_podstrony_B2.html" },
        { text: "Nowy Przycisk B3", url: "url_podstrony_B3.html" },
    ],
    [
        { text: "SBD", url: "NotesSBD.html" },
        { text: "ASD", url: "url_podstrony_C3.html" },
        { text: "SKJ", url: "url_podstrony_C3.html" },
        { text: "SAD", url: "url_podstrony_C3.html" },
    ],
];

window.addEventListener("DOMContentLoaded", function () {
    const returnToLoginBtn = document.createElement("button");
    returnToLoginBtn.textContent = "Wyloguj";
    returnToLoginBtn.classList.add("return-login-button");
    returnToLoginBtn.addEventListener("click", function () {
        window.location.href = "index.html";
    });
    document.body.appendChild(returnToLoginBtn);
});

oldButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        oldButtons.forEach((btn) => {
            btn.style.opacity = "0";
            btn.style.transform = "translateY(0px)";
        });

        setTimeout(() => {
            oldButtons.forEach((btn) => {
                btn.style.display = "none";
            });
            const existingNewButtons = document.querySelectorAll(".new-button");
            existingNewButtons.forEach((btn) => btn.remove());

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

            const backButton = document.createElement("button");
            backButton.classList.add("back-button");
            backButton.textContent = "Cofnij";
            backButton.addEventListener("click", function () {
                const allNewButtons = document.querySelectorAll(".new-button");
                allNewButtons.forEach((btn) => {
                    btn.style.opacity = "0";
                });

                setTimeout(() => {
                    allNewButtons.forEach((btn) => {
                        btn.remove();
                    });

                    const backButtonElement =
                        document.querySelector(".back-button");
                    if (backButtonElement) {
                        backButtonElement.remove();
                    }

                    oldButtons.forEach((btn) => {
                        btn.style.display = "";
                        btn.style.opacity = "1";
                        btn.style.transform = "translateY(0px)";
                    });
                }, 400);
            });

            container.appendChild(backButton);
        }, 400);
    });
});

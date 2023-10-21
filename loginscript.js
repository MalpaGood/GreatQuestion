document.addEventListener("DOMContentLoaded", function () {
    const validCredentials = [
        { username: "admin", password: "pjatk" },
        { username: "wafel", password: "lucy_waifu" },
        { username: "user3", password: "pass3" },
        { username: "user4", password: "pass4" },
    ];

    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("usernameInput");
    const passwordInput = document.getElementById("passwordInput");

    loginForm.addEventListener("submit", function (event) {
        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        const isValid = validCredentials.some(
            (cred) =>
                cred.username === enteredUsername &&
                cred.password === enteredPassword
        );

        if (!isValid) {
            alert("Invalid username or password.");
            event.preventDefault();
        }
    });
});

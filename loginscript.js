document.addEventListener("DOMContentLoaded", function () {
    const validCredentials = [
        { username: "admin", password: "pjatk" },
        { username: "wafel", password: "lucy_waifu" },
        { username: "Piotr", password: "jajca" },
        { username: "mpiw", password: "SesjaUjebana" },
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

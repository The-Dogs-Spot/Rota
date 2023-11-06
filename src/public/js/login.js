const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");

async function getToken(username, password) {
    const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({
            user: username,
            pass: password
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    if (!response.ok)
        return null;

    const json = await response.json();
    return json.token;
}

function login() {

}
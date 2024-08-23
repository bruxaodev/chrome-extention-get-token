document.addEventListener('DOMContentLoaded', () => {
    // Solicita o token ao background script
    chrome.runtime.sendMessage({ action: "getToken" }, (response) => {
        const tokenDisplay = document.getElementById('token-display');
        if (response && response.token) {
            tokenDisplay.textContent = response.token;
        } else {
            tokenDisplay.textContent = "Token não encontrado.";
        }
    });
});

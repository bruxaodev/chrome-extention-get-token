function sendToken() {
    const token = localStorage.getItem('token');
    if (!token) {
        return sendToken();
    }
    chrome.runtime.sendMessage({
        action: "sendToken",
        token
    }, (response) => {
        console.log("sent message");
    });
}
sendToken();
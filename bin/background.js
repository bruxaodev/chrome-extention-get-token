console.log('started');
let myToken = null
chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
    const { action } = data;
    if (action === 'getToken') {
        return sendResponse({ token: myToken });
    }
    else if (action === 'sendToken') {
        myToken = data.token;
    }
});
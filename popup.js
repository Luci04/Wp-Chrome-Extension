// popup.js

let blurActive = false;

document.getElementById('toggleBlur').addEventListener('click', () => {
    blurActive = !blurActive;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleBlur', blur: blurActive });
    });
});

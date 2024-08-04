// content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "toggleBlur") {
        toggleBlur(message.blur);
    }
});

function toggleBlur(blur) {
    if (blur) {
        createBlurOverlay();
    } else {
        removeBlurOverlay();
    }
}

function createBlurOverlay() {
    document.body.classList.add('whatsapp-blur-overlay')

}

function removeBlurOverlay() {
    console.log('Removing blur overlay');
    document.body.classList.remove('whatsapp-blur-overlay')
}
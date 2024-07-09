chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed!");
});

// Example: Listening for a message
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "hello") {
        sendResponse({ message: "hello from background" });
    }
});

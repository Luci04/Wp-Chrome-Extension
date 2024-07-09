// content.js

let observerList = [];

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
    // Function to apply blur filter to elements
    function applyBlurToElements() {
        document.querySelectorAll("._amk4._amkd._amk5").forEach(ele => {
            ele.classList.add('whatsapp-blur-overlay');
        });

        document.querySelectorAll(".xd7y6wv").forEach(ele => {
            ele.classList.add('whatsapp-blur-overlay');
        });

        document.querySelectorAll(".x1n2onr6.x14yjl9h.xudhj91.x18nykt9.xww2gxu").forEach(ele => {
            ele.classList.add('whatsapp-blur-overlay');
        });

        document.querySelectorAll(".x9f619.xyqdw3p.x10ogl3i.xg8j3zb.x1k2j06m.x1n2onr6.x1vjfegm.xf58f5l").forEach(ele => {
            ele.classList.add('whatsapp-blur-overlay');
        });

        document.querySelectorAll(".x78zum5.x1cy8zhl.xisnujt.x1nxh6w3.xcgms0a.x16cd2qt").forEach(ele => {
            ele.classList.add('whatsapp-blur-overlay');
        });

        document.querySelectorAll(".x1iyjqo2.x6ikm8r.x10wlt62.x1n2onr6.xlyipyv.xuxw1ft.x1rg5ohu._ao3e").forEach(ele => {
            ele.classList.add('whatsapp-blur-overlay');
        });

        document.querySelectorAll(".x1iyjqo2.x6ikm8r.x10wlt62.x1n2onr6.xlyipyv.xuxw1ft.x1rg5ohu._ao3ee").forEach(ele => {
            ele.classList.add('whatsapp-blur-overlay');
        });

        document.querySelectorAll("._ak8o").forEach(ele => {
            ele.classList.add('whatsapp-blur-overlay');
        });

        document.querySelectorAll(".x78zum5.x1cy8zhl").forEach(ele => {
            ele.classList.add('whatsapp-blur-overlay');
        });
    }

    // Select the container element
    const container = document.querySelector("._ahmw.copyable-area");

    // Call the function initially to blur existing elements within the container
    applyBlurToElements();

    // Create a MutationObserver to watch for new elements within the container
    const observer1 = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                // Apply blur filter to any new matching elements
                applyBlurToElements();
            }
        });
    });

    const observer2 = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                // Apply blur filter to any new matching elements
                applyBlurToElements();
            }
        });
    });

    // Start observing the container for changes
    if (container) {
        observer1.observe(container, { childList: true, subtree: true });
        observerList.push(observer1);
    }

    const containers = document.querySelectorAll("._aigv._aigz");
    const container2 = containers[1]; // Select the second instance

    if (container2) {
        observer2.observe(container2, { childList: true, subtree: true });
        observerList.push(observer2);
    }
    else {
        console.error('Container element not found');
    }

    const buttonContainer = document.querySelector(".x1ky8ojb.x78zum5.x1q0g3np.x1a02dak.x2lah0s.x3pnbk8.xfex06f.xeuugli.x2lwn1j.xso031l.x1q0q8m5.xa93pmm.x1nn3v0j.x1ykpatu.x1swvt13.x1pi30zi");

    if (buttonContainer) {
        // Function to handle button selection changes
        function handleButtonSelectionChange() {
            buttonContainer.querySelectorAll("button").forEach(button => {
                if (button.getAttribute("aria-pressed") === "true") {
                    console.log("AVinash SHukla")
                    applyBlurToElements();
                }
            });
        }

        handleButtonSelectionChange();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'aria-pressed') {
                    // Handle the button selection change
                    handleButtonSelectionChange();
                }
            });
        });

        buttonContainer.querySelectorAll("button").forEach(button => {
            observer.observe(button, { attributes: true });
        });
    }
}

const stopObserving = () => {
    observerList.forEach(observer => {
        observer.disconnect();
        console.log('Observer has been disconnected');
    });
};

function removeBlurOverlay() {

    stopObserving();

    document.querySelectorAll("._amk4._amkd._amk5").forEach(ele => {
        ele.classList.remove('whatsapp-blur-overlay');
    });

    document.querySelectorAll(".xd7y6wv").forEach(ele => {
        ele.classList.remove('whatsapp-blur-overlay');
    });
}

// Function to apply blur filter to elements

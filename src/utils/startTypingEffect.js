export function initTypewriterEffect(selector, speed = 20, onComplete) {
    const element = document.querySelector(selector);
    if (!element) {
        console.error("Element not found with selector:", selector);
        return;
    }

    if (element.dataset.typed === "true") {
        console.warn("Typewriter effect already executed on:", selector);
        return;
    }
    element.dataset.typed = "true";

    if (!element.dataset.originalText) {
        element.dataset.originalText = element.innerText.trim(); 
    }

    const text = element.dataset.originalText;
    element.innerText = '';

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            addBlinkingCursor(element);
            console.log("Typewriter effect completed, calling onComplete");
            if (onComplete) onComplete();
        }
    }

    typeWriter();
}

// for Loading.jsx
export function initLoadingTypewriterEffect(selector, speed = 40, onComplete) {
    const element = document.querySelector(selector);
    if (!element) {
        console.error("Element not found with selector:", selector);
        return;
    }

    if (element.dataset.typed === "true") {
        console.warn("Typewriter effect already executed on:", selector);
        return;
    }
    element.dataset.typed = "true";

    if (!element.dataset.originalText) {
        element.dataset.originalText = element.innerText.trim(); 
    }

    const text = element.dataset.originalText;
    element.innerText = '';

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            addBlinkingCursor(element);
            console.log("Loading typewriter effect completed, calling onComplete");
            if (onComplete) onComplete();
        }
    }

    typeWriter();
}
// cursor
function addBlinkingCursor(element) {
    const cursor = document.createElement('span');
    cursor.className = 'blinking-cursor';
    cursor.innerText = '|'; 
    element.appendChild(cursor);
}
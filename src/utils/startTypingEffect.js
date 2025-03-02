export function initTypewriterEffect(selector, speed = 20, onComplete) {
    const element = document.querySelector(selector);
    if (!element) {
        console.error("Element not found with selector:", selector);
        return;
    }

    // 避免重复执行
    if (element.dataset.typed === "true") {
        console.warn("Typewriter effect already executed on:", selector);
        return;
    }
    element.dataset.typed = "true";

    // 存储原始文本，防止 innerHTML 造成重复
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

// 添加闪烁光标
function addBlinkingCursor(element) {
    const cursor = document.createElement('span');
    cursor.className = 'blinking-cursor';
    cursor.innerText = '|'; 
    element.appendChild(cursor);
}
export function initTypewriterEffect(selector, speed = 20) {
    const element = document.querySelector(selector);
    if (!element) return;

    const text = element.innerText;
    element.innerText = '';

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}
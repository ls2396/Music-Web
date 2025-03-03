export function initHoverEffectText() {
    const elements = document.querySelectorAll('.hover-effect-text');

    elements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            startLetterRoll(el);
        });

        el.addEventListener('mouseleave', () => {
            resetText(el);
        });
    });
}

function startLetterRoll(el) {
    const originalText = el.innerText;
    el.dataset.originalText = originalText;
    
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const textArray = originalText.split('');
    let delays = 5;

    const rollingIntervals = textArray.map((char, index) => {
        let letterIndex = 0;
        return setInterval(() => {
            if (letterIndex >= letters.length) {
                clearInterval(rollingIntervals[index]);
                textArray[index] = originalText[index];
                el.innerText = textArray.join('');
            } else {
                textArray[index] = letters[letterIndex];
                el.innerText = textArray.join('');
                letterIndex++;
            }
        }, 10 + index * delays);
    });

    el.dataset.rollingIntervals = JSON.stringify(rollingIntervals);
}

function resetText(el) {
    if (!el.dataset.originalText) return;
    el.innerText = el.dataset.originalText;
    
    const rollingIntervals = JSON.parse(el.dataset.rollingIntervals || '[]');
    rollingIntervals.forEach(interval => clearInterval(interval));
}
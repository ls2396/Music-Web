document.addEventListener("DOMContentLoaded", function () {
    const element = document.querySelector("#terminal");
    const text = `L.J-Sin / Music Collection Hall\n\nFor me, as a designer—and not just a designer—music is an essential part of my life. Whenever I listen to music, I am drawn into the song by the singer’s voice, immersing myself in the melody, lyrics, and everything else.\n\n~~~~~~~~\n\nFor more of my work, please check out my portfolio:\nwww.ls2396.cn ⭕️\n\n---\n\n·E-Mail: senli2396@gmail.com 💻📮\n·Telephone: 090-6351-5687 🔗🎨\n\n@ All Right Reserved.`;
    
    let count = 0;

    function terminalType() {
        if (count < text.length) {
            if (text.charAt(count) === "\n") {
                element.innerHTML += "<br />";
            } else {
                element.innerHTML += text.charAt(count);
            }
            count++;
            setTimeout(terminalType, 50);
        }
    }

    terminalType();
});

import gsap from 'gsap';

export function initImageHoverEffect(tracks) {
    const imgs = [...document.querySelectorAll('.img_reveal')];
    const triggers = [...document.querySelectorAll('.img_reveal-hover')];

    // 初始化：隐藏所有图片
    imgs.forEach(img => {
        img.classList.add('hidden');
        gsap.set(img, { opacity: 0 });
    });

    // 初始化：设置所有触发器的透明度为 1
    triggers.forEach(trig => {
        trig.classList.remove('hidden');
        gsap.set(trig, { opacity: 1 });
    });

    triggers.forEach((trig, index) => {
        const youtubeId = trig.dataset.youtubeId || tracks[index]?.youtubeId;

        trig.addEventListener('mouseenter', e => {
            console.log('Mouse Enter:', e.target);
            const activeIndex = triggers.indexOf(e.target);
            console.log('Active Index:', activeIndex);

            // 移除所有触发器的 active 类
            triggers.forEach(t => t.classList.remove('active'));
            // 为当前触发器添加 active 类
            e.target.classList.add('active');

            // 设置所有触发器的透明度
            triggers.forEach((t, i) => {
                gsap.to(t, { opacity: i === activeIndex ? 1 : 0.4, duration: 0.2 });
            });

            // 隐藏所有图片，然后显示当前图片
            imgs.forEach(img => {
                gsap.to(img, 0.2, {
                    opacity: 0,
                    onComplete() {
                        imgs.forEach(img => img.classList.add('hidden'));
                        imgs[activeIndex].classList.remove('hidden');
                        gsap.to(imgs[activeIndex], 0.2, { opacity: 1 });
                    }
                });
            });

            // 播放 YouTube 音频
            if (youtubeId) {
                console.log('Playing YouTube Audio with ID:', youtubeId);
                const youtubePlayer = document.getElementById("youtubePlayer");
                if (youtubePlayer) {
                    youtubePlayer.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&loop=1&controls=0&showinfo=0`;
                } else {
                    console.error('YouTube 播放器 iframe 未找到');
                }
            }
        });

        trig.addEventListener('mouseleave', () => {
            console.log('Mouse Leave:', trig);
            trig.classList.remove('active');
            // 停止 YouTube 音频
            const youtubePlayer = document.getElementById("youtubePlayer");
            if (youtubePlayer) {
                youtubePlayer.src = '';
            }
        });
    });
}
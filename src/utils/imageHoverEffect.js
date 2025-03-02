import gsap from 'gsap';

export function initImageHoverEffect(tracks) {
    const imgs = [...document.querySelectorAll('.img_reveal')];
    const triggers = [...document.querySelectorAll('.img_reveal-hover')];
    const youtubePlayer = document.getElementById('youtubePlayer');

    // 监听 hover 事件
    triggers.forEach((trig, index) => {
        const youtubeId = trig.dataset.youtubeId || tracks[index]?.youtubeId;
        const img = imgs[index];

        trig.addEventListener('mouseenter', e => {
            console.log('Mouse Enter:', e.target);
            const activeIndex = triggers.indexOf(e.target);
            console.log('Active Index:', activeIndex);

            // 显示当前图片
            if (img) {
                img.classList.remove('hidden');
                gsap.to(img, { opacity: 1, duration: 0.3 });
            }

            // 处理其他触发器的透明度
            triggers.forEach((t, i) => {
                if (i !== activeIndex) {
                    gsap.to(t, { opacity: 0.4, duration: 0.3 });
                }
            });

            // 处理 YouTube 播放
            if (youtubeId && youtubePlayer) {
                youtubePlayer.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&loop=1&playlist=${youtubeId}&controls=0&showinfo=0`;
            }
        });

        trig.addEventListener('mouseleave', () => {
            // 隐藏图片
            if (img) {
                gsap.to(img, { opacity: 0, duration: 0.3, onComplete: () => img.classList.add('hidden') });
            }

            // 恢复所有触发器透明度
            triggers.forEach(t => {
                gsap.to(t, { opacity: 1, duration: 0.3 });
            });

            // 停止 YouTube 播放
            if (youtubePlayer) {
                youtubePlayer.src = '';
            }
        });
    });
}
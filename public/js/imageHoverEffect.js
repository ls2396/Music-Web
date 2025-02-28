import gsap from 'gsap';
import { playTrack, stopTrack } from './musicPlayer';

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

        trig.addEventListener('mouseenter', e => {
            console.log('Mouse Enter:', e.target); // 调试日志
            const activeIndex = triggers.indexOf(e.target);
            console.log('Active Index:', activeIndex); // 调试日志
            
            const trackId = trig.dataset.trackId || tracks[index]?.id;

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

            // 播放音乐
            if (trackId) {
                console.log('Calling playTrack with Track ID:', trackId); // 调试日志
                playTrack(trackId);
            }
        });

        trig.addEventListener('mouseleave', () => {
            console.log('Mouse Leave:', trig); // 调试日志
            trig.classList.remove('active');
            stopTrack(); // 停止音乐
        });
    });
}
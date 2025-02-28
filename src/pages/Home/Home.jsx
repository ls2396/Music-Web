import './Home.css';
import '../../styles/global.css';
import { useEffect, useState } from 'react';
import { initImageHoverEffect } from '../../../public/js/imageHoverEffect';

function Home() {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        fetch('/src/assets/youtubeTracks.json')
            .then(response => response.json())
            .then(data => {
                setTracks(data);
                initImageHoverEffect(data);
            })
            .catch(error => console.error("❌ 加载歌曲列表失败:", error));
    }, []);

    const playYouTubeAudio = (youtubeId) => {
        if (!youtubeId) {
            console.warn("⚠️ YouTube ID 不存在，无法播放");
            return;
        }

        const youtubePlayer = document.getElementById("youtubePlayer");
        if (!youtubePlayer) {
            console.error("❌ 找不到 YouTube 播放器 iframe");
            return;
        }

        console.log(`🎵 正在播放: ${youtubeId}`);
        youtubePlayer.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&loop=1&controls=0&showinfo=0`;
    };

    return (
        <div className='home'>
            <div className='home_left'>
                <p>L.J-Sin / Music Collection Hall</p>
                <p>For me, as a designer—and not just a designer—music <br /> is an essential part of my life. Whenever I listen <br /> to music, I am drawn into the song by the singer’s <br /> voice, immersing myself in the melody, lyrics, and <br /> everything else.</p>
                <p>~~~~~~~~</p>
                <p>For more of my work, please check out my portfolio: </p>
                <a href='www.ls2396.cn' target='_blank'>www.ls2396.cn ⭕️</a>
                <p>---</p>
                <p>·E-Mail: senli2396@gmail.com 💻📮</p>
                <p>·Telephone: 090-6351-5687 🔗🎨</p>
                <p>@ All Right Reserved.</p>
            </div>
            <div className='home_middle'>
                <p>Name / Album</p>
                <div className='title'>
                    <ul>
                        {tracks.map(track => (
                            <li
                                key={track.youtubeId}
                                className='img_reveal-hover'
                                onMouseEnter={() => playYouTubeAudio(track.youtubeId)}
                            >
                                <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                                <div className='li_group'>
                                    <a href='www.ls2396.cn' target='_blank'>{track.title}</a>
                                    <span>{track.date}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='home_right'>
                {Array.from({ length: 16 }).map((_, index) => (
                    <img
                        key={index}
                        className='img_reveal hidden'
                        src={`/images/${index + 1}.png`}
                        alt=""
                    />
                ))}
            </div>
            <iframe 
                id="youtubePlayer" 
                width="0" 
                height="0" 
                src="about:blank" 
                frameBorder="0" 
                allow="autoplay"
            ></iframe>
        </div>
    );
}

export default Home;

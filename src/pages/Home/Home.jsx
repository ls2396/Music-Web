import './Home.css';
import '../../styles/global.css';
import { useEffect, useState } from 'react';
import { initImageHoverEffect } from '../../utils/imageHoverEffect';
import { initTypewriterEffect } from '../../utils/startTypingEffect';

function Home() {
    const [tracks, setTracks] = useState([]);
    const [showMiddle, setShowMiddle] = useState(false);
    const [showRight, setShowRight] = useState(false); // 新增状态控制 home_right

    useEffect(() => {
        fetch('/src/assets/youtubeTracks.json')
            .then(response => response.json())
            .then(data => {
                console.log("Tracks data loaded:", data);
                setTracks(data);
                requestAnimationFrame(() => {
                    if (data.length > 0) {
                        initImageHoverEffect(data);
                    }
                });
            })
            .catch(error => console.error("❌ 加载歌曲列表失败:", error));

        // **确保 initTypewriterEffect 只执行一次**
        if (!document.querySelector('.home_left').dataset.typed) {
            initTypewriterEffect('.home_left', 20, () => {
                console.log("Typewriter effect completed, setting showMiddle and showRight to true");
                setTimeout(() => {
                    setShowMiddle(true); // 显示 home_middle
                    setShowRight(true);  // 显示 home_right
                }, 500); 
            });
        }
    }, []);

    return (
        <div className='home'>
            <div className='home_left'>
                <p>L.J-Sin / Music Collection Hall</p> <br />
                <p>For me, as a designer—and not just adesigner—music <br /> is an essential part of my life. Whenever I listen <br /> to music, I am drawn into the song by the singer’s <br /> voice, immersing myself in the melody, lyrics, <br /> and everything else.</p>
                <p>~~~~~~~~</p>
                <p>For more of my work, please check out my portfolio: <br /> 
                    <a href='https://www.ls2396.cn' target='_blank' rel='noopener noreferrer'>www.ls2396.cn ⭕️</a>
                </p>
                <p>---</p>
                <p>·E-Mail: senli2396@gmail.com 💻📮 <br />·Telephone: 090-6351-5687 🔗🎨 </p><br />
                <p>@ All Right Reserved.</p>
            </div>

            {/* home_middle */}
            <div className={`home_middle ${showMiddle ? 'visible' : ''}`}>
                <p>Name / Album</p>
                <div className='title'>
                    <ul>
                        {tracks.map(track => (
                            <li key={track.youtubeId} className='img_reveal-hover'>
                                <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                                <div className='li_group'>
                                    <p>{track.title}</p>
                                    <span>{track.date}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* home_right */}
            <div className={`home_right ${showRight ? 'visible' : ''}`}>
                {Array.from({ length: 16 }).map((_, index) => (
                    <img key={index} className='img_reveal hidden' src={`/images/${index + 1}.png`} alt="" />
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
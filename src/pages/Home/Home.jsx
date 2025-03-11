import './Home.css';
import '../../styles/global.css';
import { useEffect, useState } from 'react';
import { initImageHoverEffect } from '../../utils/imageHoverEffect';
import { initTypewriterEffect } from '../../utils/startTypingEffect';
import { initHoverEffectText } from '../../utils/hoverEffectText';

function Home() {
    const [tracks, setTracks] = useState([]);
    const [showMiddle, setShowMiddle] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        fetch('/Music-Web/public/assets/youtubeTracks.json')
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

        if (!document.querySelector('.home_left').dataset.typed) {
            initTypewriterEffect('.home_left', 20, () => {
                console.log("Typewriter effect completed, setting showMiddle and showRight to true");
                setTimeout(() => {
                    setShowMiddle(true);
                    initHoverEffectText();
                }, 500);
            });
        }
    }, []);

    const handleMouseEnter = (track, index) => {
        const player = document.getElementById("youtubePlayer");
        if (player) {
            player.src = `https://www.youtube.com/embed/${track.youtubeId}?autoplay=1`;
            setIsPlaying(true);
            setCurrentTrack(track);
            setCurrentImage(index + 1);
        }
    };

    const handleMouseLeave = () => {
        const player = document.getElementById("youtubePlayer");
        if (player) {
            player.src = "about:blank";
            setIsPlaying(false);
            setCurrentTrack(null);
            setCurrentImage(null);
        }
    };

    return (
        <div className='home'>
            <div className='home_left'>
                <p>L.J-Sin / Music Collection Hall</p>
                <p>For me, as a designer—and not just a designer—music <br />is an essential part of my life. Whenever I listen <br />to music, I am drawn into the song by the singer’s <br />voice, immersing myself in the melody, lyrics, and <br />everything else.</p>
                <p>~~~~~~~~</p>
                <p>For more of my work, please check out my portfolio: <br />
                    <a href='http://www.ls2396.cn/' target='_blank' rel='noopener noreferrer'>www.ls2396.cn ⭕️</a>
                </p>
                <p>---</p>
                <p>·E-Mail: senli2396@gmail.com 💻📮 <br />·Telephone: 090-6351-5687 🔗🎨 </p>
                <p>@ All Right Reserved.</p>
            </div>
            <div className={`home_middle ${showMiddle ? 'visible' : ''}`}>
                <p>Name / Album</p>
                <div className='title'>
                    <ul>
                        {tracks.map((track, index) => (
                            <li key={track.youtubeId} className='img_reveal-hover'
                                onMouseEnter={() => handleMouseEnter(track, index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <h3 data-text="♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣"
                                    data-text-medium="♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣"
                                    data-text-small="♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣"></h3>
                                <div className='li_group'>
                                    <p className="hover-effect-text">{track.title}</p>
                                    <span>{track.date}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`home_right ${isPlaying ? 'visible' : ''}`}>
                {currentTrack && (
                    <p className="current-track-title">{currentTrack.title}</p>
                )}
                {currentImage && (
                    <img className='img_reveal album-cover' src={`${import.meta.env.BASE_URL}public/images/${currentImage}.png`} alt="Album Cover" />
                )}
                <img className={`record ${isPlaying ? 'spinning' : ''}`} src="/Music-Web/public/images/record.png" />
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

import './Home.css';
import '../../styles/global.css';
import { useEffect, useState } from 'react';
import { initImageHoverEffect } from '../../../public/js/imageHoverEffect';
import { initMusicPlayer } from '../../../public/js/musicPlayer';

function Home() {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {

        fetch('/src/assets/spotifyTracks.json')
            .then(response => response.json())
            .then(data => {
                console.log('Loaded Tracks:', data);
                setTracks(data);
                initMusicPlayer();
                initImageHoverEffect(data);
            })
            .catch(error => console.error('加载 JSON 失败:', error));
    }, []);

    return (
        <div className='home'>
            <div className='home_left'>
                <p>L.J-Sin / Music Collection Hall</p>
                <p>For me, as a designer—and not just a designer—music <br /> is an essential part of my life. Whenever I listen <br /> to music, I am drawn into the song by the singer is <br /> voice, immersing myself in the melody, lyrics, and <br /> everything else.</p>
                <p>~~~~~~~~</p>
                <p>For more of my work, please check out my portfolio: </p>
                <a href='www.ls2396.cn' target='_blank'>www.ls2396.cn ⭕️</a>
                <p>---</p>
                <p>·E-Mail: senli2396@gmail.com 💻📮</p>
                <p>·Telephone: 090-6351-5687 🔗🎨</p>
                <p>@ All Right Reservad.</p>
            </div>
            <div className='home_middle'>
                <p>Name / Album</p>
                <div className='title'>
                    <ul>
                        {tracks.map(track => (
                            <li
                                key={track.id}
                                className='img_reveal-hover'
                                data-track-id={track.id}>
                                data-preview={track.preview_url || ""} 
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
                {[...Array(16)].map((_, index) => (
                    <img
                        key={index}
                        className='img_reveal hidden'
                        src={`/images/${index + 1}.png`}
                        alt=""
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
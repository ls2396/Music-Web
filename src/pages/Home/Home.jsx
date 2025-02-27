import './Home.css';
import '../../styles/global.css';
import { useEffect } from 'react';
import { initImageHoverEffect } from '../../../public/js/imageHoverEffect';


function Home() {

    useEffect(() => {
        initImageHoverEffect(); 
        return () => {
            const triggers = [...document.querySelectorAll('.img-reveal-hover')];
            triggers.forEach(trig => {
                trig.removeEventListener('mouseenter', () => {});
            });
        };
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
                        <li className='img-reveal-hover'>
                            <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                            <div className='li_group'>
                                <a href='www.ls2396.cn' target='_blank'>My Name / The Mixtape</a>
                                <span>2010年10月13日</span>
                            </div>
                        </li>
                        <li className='img-reveal-hover'>
                            <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                            <div className='li_group'>
                                <a href='www.ls2396.cn' target='_blank'>浪子回頭 / Cartoon Character</a>
                                <span>2017年11月04日</span>
                            </div>
                        </li>
                        <li className='img-reveal-hover'>
                            <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                            <div className='li_group'>
                                <a href='www.ls2396.cn' target='_blank'>真夜中のドア〜stay with me / UP!</a>
                                <span>1979年11月05日</span>
                            </div>
                        </li>
                        <li className='img-reveal-hover'>
                            <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                            <div className='li_group'>
                                <a href='www.ls2396.cn' target='_blank'>벌써 일년(Already One Year) / Brown Eyes</a>
                                <span>2001年06月07日</span>
                            </div>
                        </li>
                        <li className='img-reveal-hover'>
                            <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                            <div className='li_group'>
                                <a href='www.ls2396.cn' target='_blank'>隆裡電絲 / 隆裡電絲</a>
                                <span>2022年7月17日</span>
                            </div>
                        </li>
                        <li className='img-reveal-hover'>
                            <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                            <div className='li_group'>
                                <a href='www.ls2396.cn' target='_blank'>HUMBLE. / DAMN.</a>
                                <span>2017年03月30日</span>
                            </div>
                        </li>
                        <li className='img-reveal-hover'>
                            <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                            <div className='li_group'>
                                <a href='www.ls2396.cn' target='_blank'>グッバイバイ / グッバイバイ</a>
                                <span>2024年08月21日</span>
                            </div>
                        </li>
                        <li className='img-reveal-hover'>
                            <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                            <div className='li_group'>
                                <a href='www.ls2396.cn' target='_blank'>You(=i) / RED PLANET</a>
                                <span>2016年08月29日</span>
                            </div>
                        </li>
                        <li className='img-reveal-hover'>
                            <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                            <div className='li_group'>
                                <a href='www.ls2396.cn' target='_blank'>Pure Water / A NEW WORLD</a>
                                <span>2009年10月30日</span>
                            </div>
                        </li>
                        <li className='img-reveal-hover'>
                            <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                            <div className='li_group'>
                                <a href='www.ls2396.cn' target='_blank'>愛錯 / Shangri-La</a>
                                <span>2004年12月31日</span>
                            </div>
                        </li>
                        <li className='img-reveal-hover'>
                            <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                            <div className='li_group'>
                                <a href='www.ls2396.cn' target='_blank'>Memories / Songs About Jane</a>
                                <span>2019年09月20日</span>
                            </div>
                        </li>
                        <li className='img-reveal-hover'>
                            <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                            <div className='li_group'>
                                <a href='www.ls2396.cn' target='_blank'>Not Like Us / Not Like Us</a>
                                <span>2024年05月04日</span>
                            </div>
                        </li>
                        <li className='img-reveal-hover'>
                            <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                            <div className='li_group'>
                                <a href='www.ls2396.cn' target='_blank'>Everywhere we go / 三角度</a>
                                <span>2012年07月27日</span>
                            </div>
                        </li>
                        <li className='img-reveal-hover'>
                            <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                            <div className='li_group'>
                                <a href='www.ls2396.cn' target='_blank'>ドライフラワー / 壱</a>
                                <span>2020年10月25日</span>
                            </div>
                        </li>
                        <li className='img-reveal-hover'>
                            <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                            <div className='li_group'>
                                <a href='www.ls2396.cn' target='_blank'>孤獨材料 / Single</a>
                                <span>2024年01月05日</span>
                            </div>
                        </li>
                        <li className='img-reveal-hover'>
                            <h3>♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣♣</h3>
                            <div className='li_group'>
                                <a href='www.ls2396.cn' target='_blank'>Slide (feat. Frank Ocean & Migos)  / Funk Wav Bounces Vol. 1</a>
                                <span>2017年02月23日</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='home_right'>
                <img className='img-reveal hidden' src="/images/1.png" alt="" />
                <img className='img-reveal hidden' src="/images/2.png" alt="" />
                <img className='img-reveal hidden' src="/images/3.png" alt="" />
                <img className='img-reveal hidden' src="/images/4.png" alt="" />
                <img className='img-reveal hidden' src="/images/5.png" alt="" />
                <img className='img-reveal hidden' src="/images/6.png" alt="" />
                <img className='img-reveal hidden' src="/images/7.png" alt="" />
                <img className='img-reveal hidden' src="/images/8.png" alt="" />
                <img className='img-reveal hidden' src="/images/9.png" alt="" />
                <img className='img-reveal hidden' src="/images/10.png" alt="" />
                <img className='img-reveal hidden' src="/images/11.png" alt="" />
                <img className='img-reveal hidden' src="/images/12.png" alt="" />
                <img className='img-reveal hidden' src="/images/13.png" alt="" />
                <img className='img-reveal hidden' src="/images/14.png" alt="" />
                <img className='img-reveal hidden' src="/images/15.png" alt="" />
                <img className='img-reveal hidden' src="/images/16.png" alt="" />
            </div>
        </div>

    );
}

export default Home;
import './Loading.css';
import '../../styles/global.css';
import { useEffect, useRef, useState } from 'react';
import { initLoadingTypewriterEffect } from '../../utils/startTypingEffect';
import { useNavigate } from 'react-router-dom';

function Loading() {
    const [showMiddle, setShowMiddle] = useState(false);
    const navigate = useNavigate();
    const loadingTextRef = useRef(null);

    useEffect(() => {
        setShowMiddle(true);
        if (!document.querySelector('.loading_text').dataset.typed) {
            initLoadingTypewriterEffect('.loading_text', 40, () => {
                console.log("Loading typewriter effect completed");
                setTimeout(() => {
                    navigate('/home');
                }, 1200);
            });
        }
    }, [navigate]);

    return (
        <div className="loading_container">
            <div ref={loadingTextRef} className={`loading_text ${showMiddle ? 'visible' : ''}`}>
                <p>Every day, you have the chance to cross paths with many people.<br />
                    Some will become your friends or confidants.<br />
                    Some will end up leaving you battered and bruised.<br />
                    Who cares? Just be happy. <br />
                    <br />
                    ー '隆裡電絲'.
                </p>
            </div>
        </div>
    );
}

export default Loading;
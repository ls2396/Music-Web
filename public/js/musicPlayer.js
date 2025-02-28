import axios from 'axios';

let accessToken = null;
let currentAudio = null;

// 获取 Spotify Access Token
async function getAccessToken() {
    const clientId = 'a8c1d9a97b1a41eb8692c6297ffc3d63';
    const clientSecret = '28690fbe5f804f138eec5f7042243ae5';
    try {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: clientId,
                client_secret: clientSecret
            }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        console.log('Access Token:', response.data.access_token); 
        return response.data.access_token;
    } catch (error) {
        console.error('获取访问令牌失败:', error);
        return null;
    }
}

// 获取 Spotify 曲目预览 URL
async function fetchTrackPreview(trackId) {
    if (!accessToken) accessToken = await getAccessToken();
    if (!accessToken) {
        console.error('No access token available.');
        return null;
    }
    try {
        const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        console.log('Spotify API Response:', response.data); // 调试日志
        return response.data.preview_url;
    } catch (error) {
        console.error('获取歌曲预览失败:', error);
        return null;
    }
}

// 播放指定曲目
export async function playTrack(trackId) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    const previewUrl = await fetchTrackPreview(trackId);

    if (previewUrl) {
        console.log(`Playing Preview URL for track ${trackId}:`, previewUrl);
        currentAudio = new Audio(previewUrl);
        currentAudio.play().catch(err => console.error('播放失败:', err));
    } else {
        console.warn(`歌曲 ${trackId} 没有预览音频 (可能是 Spotify 没有提供预览)`); 
        // 这里避免 alert，但仍然给用户可视化的反馈
        const trackElement = document.querySelector(`[data-track-id="${trackId}"]`);
        if (trackElement) {
            trackElement.classList.add("no-preview");
        }
    }
}

// 停止播放
export function stopTrack() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}

// 初始化音乐播放器
export function initMusicPlayer() {
    document.querySelectorAll('.track-item').forEach(item => {
        const previewUrl = item.dataset.preview;
        if (!previewUrl) {
            console.warn("No preview URL available for this track.");
            return;
        }

        const audioElement = new Audio(previewUrl);

        item.addEventListener('mouseenter', () => {
            audioElement.play().catch(error => console.error("Audio play failed:", error));
        });

        item.addEventListener('mouseleave', () => {
            audioElement.pause();
            audioElement.currentTime = 0;
        });
    });
}


// 测试
fetchTrackPreview('7qUw5eGZB7WhQVpJROxqEp').then(previewUrl => {
    console.log('Preview URL:', previewUrl);
});
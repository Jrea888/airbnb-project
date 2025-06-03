import React, { memo } from "react";

const VideoExperience = memo(() => {
    return (
        <video
            playsinline=""
            poster="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-bar-icons/original/1e24b1c9-b070-48d9-8a70-91aae3151830.png?im_w=240"
            preload="auto"
        >
            <source
                src="https://a0.muscache.com/videos/search-bar-icons/hevc/balloon-selected.mov#t=0.001"
                type='video/mp4; codecs="hvc1"'
            />
            <source
                src="https://a0.muscache.com/videos/search-bar-icons/webm/balloon-selected.webm"
                type="video/webm"
            />
        </video>
    );
});

export default VideoExperience;

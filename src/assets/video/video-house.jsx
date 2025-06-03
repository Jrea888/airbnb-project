import React, { memo } from "react";

const VideoHouse = memo(() => {
    return (
        <video
            playsinline=""
            poster="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-bar-icons/original/a32adab1-f9df-47e1-a411-bdff91b579c3.png?im_w=240"
            preload="auto"
        >
            <source
                src="https://a0.muscache.com/videos/search-bar-icons/hevc/house-selected.mov#t=0.001"
                type='video/mp4; codecs="hvc1"'
            />
            <source
                src="https://a0.muscache.com/videos/search-bar-icons/webm/house-selected.webm"
                type="video/webm"
            />
        </video>
    );
});

export default VideoHouse;

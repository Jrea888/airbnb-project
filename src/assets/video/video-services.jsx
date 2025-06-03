import React, { memo } from "react";

const VideoServices = memo(() => {
    return (
        <video
            playsinline=""
            poster="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-bar-icons/original/3d67e9a9-520a-49ee-b439-7b3a75ea814d.png?im_w=240"
            preload="auto"
        >
            <source
                src="https://a0.muscache.com/videos/search-bar-icons/hevc/consierge-selected.mov#t=0.001"
                type='video/mp4; codecs="hvc1"'
            />
            <source
                src="https://a0.muscache.com/videos/search-bar-icons/webm/consierge-selected.webm"
                type="video/webm"
            />
        </video>
    );
});

export default VideoServices;

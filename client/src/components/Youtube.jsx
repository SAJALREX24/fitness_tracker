import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoUrl }) => {
  // Extract the video ID from the YouTube URL
  const getVideoId = (url) => {
    const urlParams = new URL(url).searchParams;
    return urlParams.get('v'); // Get the 'v' parameter from the URL
  };

  const videoId = getVideoId(videoUrl);

  const onPlayerReady = (event) => {
    console.log("Player is ready");
    event.target.playVideo(); // Optionally auto-play
  };

  const onPlayerStateChange = (event) => {
    console.log("Player state changed", event.data);
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0, // Don't auto-play by default
    },
  };

  return (
    <div>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
        onStateChange={onPlayerStateChange}
      />
    </div>
  );
};

export default YouTubePlayer;

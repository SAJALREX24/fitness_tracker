import React from 'react';
import YouTubePlayer from '../components/Youtube';

const Tutorial = () => {
  // Array of 12 YouTube video URLs with autoplay disabled
  const videoUrls = [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
    "https://www.youtube.com/watch?v=l482T0yNkeo",
    "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    "https://www.youtube.com/watch?v=9bZkp7q19f0",
    "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    "https://www.youtube.com/watch?v=RgKAFK5djSk",
    "https://www.youtube.com/watch?v=OPf0YbXqDm0",
    "https://www.youtube.com/watch?v=09R8_2nJtjg",
    "https://www.youtube.com/watch?v=5NV6Rdv1a3I",
    "https://www.youtube.com/watch?v=hT_nvWreIhg",
    "https://www.youtube.com/watch?v=60ItHLz5WEA",
  ];

  // Add autoplay=0 query parameter to each video URL
  const updatedVideoUrls = videoUrls.map((url) => {
    const urlObj = new URL(url);
    urlObj.searchParams.set('autoplay', '0'); // Disable autoplay
    return urlObj.toString();
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>YouTube Video Tutorials</h1>
      <div style={styles.grid}>
        {updatedVideoUrls.map((url, index) => (
          <div key={index} style={styles.videoWrapper}>
            <YouTubePlayer videoUrl={url} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '10px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    overflow: 'hidden', // Prevent scrollbars
    height: '100vh',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '10px',
    fontSize: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Fixed 4 columns to fit videos compactly
    gap: '10px',
    height: 'calc(100% - 40px)', // Adjust for heading space
    overflow: 'hidden',
  },
  videoWrapper: {
    width: '100%',
    aspectRatio: '16/9', // Maintain video aspect ratio
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
};

export default Tutorial;

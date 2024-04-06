import React, { useState, useEffect } from 'react';
import { getChannelVideos } from '../pages/api/youtube-api';
import { VideoItem } from '../pages/api/youtube-api';

const VideoList: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getChannelVideos()
      .then(videosFromApi => {
        setVideos(videosFromApi);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load videos. Please try again later.');
        setLoading(false);
        console.error('Error fetching videos:', err);
      });
  }, []);

  return (
    <div style={styles.grid}>
      {loading && <p style={styles.message}>Loading videos...</p>}
      {error && <p style={styles.message}>Error: {error}</p>}
      {!loading && !error && videos.map((video: VideoItem) => (
        <div key={video.id.videoId} style={styles.card}>
          <iframe
            style={styles.iframe}
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div style={styles.info}>
            <h2 style={styles.title}>{video.snippet.title}</h2>
            <p style={styles.description}>{video.snippet.description}</p>
            {video.snippet.tags && Array.isArray(video.snippet.tags) && (
              <div style={styles.tags}>
                {video.snippet.tags.map(tag => (
                  <span key={tag} style={styles.tag}>{tag}</span>
                ))}
              </div>
            )}
          </div>
          <div style={styles.playButton}>►</div>
        </div>
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#f7f7f7', // Light grey background for the grid
  },
  card: {
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'scale(1.03)',
      boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
    },
    backgroundColor: '#ffffff', // White background for each card
  },
  iframe: {
    width: '100%',
    height: '180px',
  },
  info: {
    padding: '1rem',
  },
  title: {
    fontSize: '1.1rem',
    color: '#333', // Dark grey for the title for better readability
    margin: '0.5rem 0',
  },
  description: {
    fontSize: '0.9rem',
    color: '#555', // Medium grey for the description
    margin: '0.5rem 0',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  tag: {
    background: '#e0e0e0', // Light grey background for tags
    borderRadius: '5px',
    padding: '0.3rem 0.6rem',
    fontSize: '0.8rem',
    color: '#555', // Medium grey for tag text
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '2rem', // Smaller play button
    color: '#1e88e5', // Play button color changed to a blue
    opacity: 0.9,
    zIndex: 10,
  },
  message: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#888', // Grey for messages
    padding: '1rem',
  },
};

export default VideoList;

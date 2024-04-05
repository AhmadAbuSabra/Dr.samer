import React from 'react';

interface YoutubeVideoProps {
  videoSrcURL: string;
  videoTitle: string;
}

const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ videoSrcURL, videoTitle }) => {
  return (
    <div className="video">
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
        style={{ width: '100%', height: 'auto', aspectRatio: '16 / 9' }}
      />
    </div>
  );
};

export default YoutubeVideo;

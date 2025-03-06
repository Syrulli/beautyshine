import React from 'react';
import './video.css';
function VideoSection({ videoSrc }) {
  return (
    <div className='video-container'>
      <video autoPlay muted loop>
        <source src={videoSrc} type='video/mp4' />
      </video>
      <div className='color-blocks'>
        <div className='color-blocks'>
          <span className='color-block black-block'></span>
          <span className='color-block black-block'></span>
          <span className='color-block c1-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block c2-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block transparent-c2-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block c1-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block c2-block'></span>
          <span className='color-block c1-block'></span>
          <span className='color-block'></span>
          <span className='color-block transparent-c2-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block black-block'></span>
          <span className='color-block whole-block'>
            <i className='fa-solid fa-play h4 text-white'></i>
          </span>
          <span className='color-block'></span>
          <span className='color-block'></span>
          <span className='color-block c2-block'></span>
        </div>
      </div>
    </div>
  );
}
export default VideoSection;

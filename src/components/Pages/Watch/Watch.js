import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './Watch.scss';

const Watch = () => {
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackIcon />
        Home
      </div>
      <video
        src='https://streamable.com/e/uexaay'
        className='video'
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default Watch;

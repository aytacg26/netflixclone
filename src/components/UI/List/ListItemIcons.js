import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import './ListItemIcons.scss';

const ListItemIcons = () => {
  return (
    <div className='icons'>
      <PlayArrowIcon className='icon' />
      <AddIcon className='icon' />
      <ThumbUpAltOutlinedIcon className='icon' />
      <ThumbDownAltOutlinedIcon className='icon' />
    </div>
  );
};

export default ListItemIcons;

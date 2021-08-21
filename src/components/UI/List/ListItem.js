import { useState } from 'react';
import './ListItem.scss';

import testMovieImage from '../../../assets/images/testmovieimage.jpg';
import ListItemInfo from './ListItemInfo';

const ListItem = ({ index, itemInfo }) => {
  const [isHovered, setIsHovered] = useState(false);

  const mouseMoveHandler = () => {
    setIsHovered((prevState) => !prevState);
  };

  return (
    <div
      className='listItem'
      onMouseEnter={mouseMoveHandler}
      onMouseLeave={mouseMoveHandler}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    >
      <img src={testMovieImage} alt='movie name' />
      {isHovered && (
        <ListItemInfo
          trailer={itemInfo.trailer}
          time={itemInfo.time}
          limit={itemInfo.limit}
          year={itemInfo.year}
          desc={itemInfo.desc}
          genre={itemInfo.genre}
        />
      )}
    </div>
  );
};

export default ListItem;

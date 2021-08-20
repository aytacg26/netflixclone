import { Fragment, useState } from 'react';
import './ListItem.scss';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import testMovieImage from '../../../assets/images/testmovieimage.jpg';

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';

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
        <Fragment>
          <video src={trailer} autoPlay={true} loop={true} />
          <div className='itemInfo'>
            <div className='icons'>
              <PlayArrowIcon className='icon' />
              <AddIcon className='icon' />
              <ThumbUpAltOutlinedIcon className='icon' />
              <ThumbDownAltOutlinedIcon className='icon' />
            </div>
            <div className='itemInfoTop'>
              <span>1 Hour 14 min</span>
              <span className='limit'>+16</span>
              <span>2021</span>
            </div>
            <div className='desc'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div className='genre'>Action</div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ListItem;

import { useRef, useState } from 'react';
import './List.scss';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ListItem from './ListItem';

const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const arrowClickHandler = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber((prevSlideNum) => prevSlideNum - 1);
      listRef.current.style.transform = `translateX(${
        230 + parseInt(distance)
      }px)`;
    }

    if (direction === 'right' && slideNumber < 5) {
      setSlideNumber((prevSlideNum) => prevSlideNum + 1);
      listRef.current.style.transform = `translateX(${
        -230 + parseInt(distance)
      }px)`;
    }
  };

  return (
    <div className='list'>
      <span className='listTitle'>Continue to Watch</span>
      <div className='wrapper'>
        <ArrowBackIosOutlinedIcon
          className='slider-arrow left'
          onClick={() => arrowClickHandler('left')}
          style={{ display: slideNumber ? '' : 'none' }}
        />
        )
        <div className='container' ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <ArrowForwardIosOutlinedIcon
          className='slider-arrow right'
          onClick={() => arrowClickHandler('right')}
        />
      </div>
    </div>
  );
};

export default List;

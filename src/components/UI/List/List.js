import { useRef, useState, useEffect } from 'react';
import './List.scss';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ListItem from './ListItem';

const moviesData = [
  {
    id: 'movie-1001-0001',
    title: 'Dummy Movie Title',
    time: '1 hour 42 minutes',
    limit: '+16',
    year: '2021',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aspernatur praesentium eligendi obcaecati, illum magni eaque, quidem atque quaerat omnis libero ratione tempora, odit quae enim beatae asperiores! Quae, laborum.',
    genre: 'Action',
    image: '',
    trailer:
      'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761',
  },
  {
    id: 'movie-1102-0002',
    title: 'Dummy Movie Title',
    time: '1 hour 42 minutes',
    limit: '+16',
    year: '2021',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aspernatur praesentium eligendi obcaecati, illum magni eaque, quidem atque quaerat omnis libero ratione tempora, odit quae enim beatae asperiores! Quae, laborum.',
    genre: 'Action',
    image: '',
    trailer:
      'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761',
  },
  {
    id: 'movie-1102-0003',
    title: 'Dummy Movie Title',
    time: '1 hour 42 minutes',
    limit: '+16',
    year: '2021',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aspernatur praesentium eligendi obcaecati, illum magni eaque, quidem atque quaerat omnis libero ratione tempora, odit quae enim beatae asperiores! Quae, laborum.',
    genre: 'Action',
    image: '',
    trailer:
      'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761',
  },
  {
    id: 'movie-1102-0004',
    title: 'Dummy Movie Title',
    time: '1 hour 42 minutes',
    limit: '+16',
    year: '2021',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aspernatur praesentium eligendi obcaecati, illum magni eaque, quidem atque quaerat omnis libero ratione tempora, odit quae enim beatae asperiores! Quae, laborum.',
    genre: 'Action',
    image: '',
    trailer:
      'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761',
  },
  {
    id: 'movie-1102-0005',
    title: 'Dummy Movie Title',
    time: '1 hour 42 minutes',
    limit: '+16',
    year: '2021',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aspernatur praesentium eligendi obcaecati, illum magni eaque, quidem atque quaerat omnis libero ratione tempora, odit quae enim beatae asperiores! Quae, laborum.',
    genre: 'Action',
    image: '',
    trailer:
      'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761',
  },
  {
    id: 'movie-1102-0006',
    title: 'Dummy Movie Title',
    time: '1 hour 42 minutes',
    limit: '+16',
    year: '2021',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aspernatur praesentium eligendi obcaecati, illum magni eaque, quidem atque quaerat omnis libero ratione tempora, odit quae enim beatae asperiores! Quae, laborum.',
    genre: 'Action',
    image: '',
    trailer:
      'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761',
  },
  {
    id: 'movie-1203-0007',
    title: 'Dummy Movie Title',
    time: '1 hour 42 minutes',
    limit: '+16',
    year: '2001',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aspernatur praesentium eligendi obcaecati, illum magni eaque, quidem atque quaerat omnis libero ratione tempora, odit quae enim beatae asperiores! Quae, laborum.',
    genre: 'Action',
    image: '',
    trailer:
      'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761',
  },
  {
    id: 'movie-0401-0008',
    title: 'Dummy Movie Title',
    time: '1 hour 42 minutes',
    limit: '+16',
    year: '2017',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aspernatur praesentium eligendi obcaecati, illum magni eaque, quidem atque quaerat omnis libero ratione tempora, odit quae enim beatae asperiores! Quae, laborum.',
    genre: 'Action',
    image: '',
    trailer:
      'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761',
  },
  {
    id: 'movie-0209-0009',
    title: 'Dummy Movie Title',
    time: '1 hour 42 minutes',
    limit: '+16',
    year: '2010',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aspernatur praesentium eligendi obcaecati, illum magni eaque, quidem atque quaerat omnis libero ratione tempora, odit quae enim beatae asperiores! Quae, laborum.',
    genre: 'Action',
    image: '',
    trailer:
      'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761',
  },
  {
    id: 'movie-3279-0010',
    title: 'Dummy Movie Title',
    time: '1 hour 42 minutes',
    limit: '+16',
    year: '2005',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aspernatur praesentium eligendi obcaecati, illum magni eaque, quidem atque quaerat omnis libero ratione tempora, odit quae enim beatae asperiores! Quae, laborum.',
    genre: 'Action',
    image: '',
    trailer:
      'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761',
  },
];

const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [movies, setMovies] = useState([]);
  const listRef = useRef();

  //Assume that the movies are fetched from database
  useEffect(() => {
    setMovies(moviesData);
  }, []);

  const arrowClickHandler = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber((prevSlideNum) => prevSlideNum - 1);
      listRef.current.style.transform = `translateX(${
        230 + parseInt(distance)
      }px)`;
    }

    if (direction === 'right' && slideNumber < Math.ceil(movies.length / 2)) {
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
          {movies.map((movie, index) => (
            <ListItem index={index} itemInfo={movie} key={movie.id} />
          ))}
        </div>
        <ArrowForwardIosOutlinedIcon
          className='slider-arrow right'
          onClick={() => arrowClickHandler('right')}
        />
      </div>
      <span></span>
    </div>
  );
};

export default List;

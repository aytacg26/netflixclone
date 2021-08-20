import { useState, useEffect } from 'react';
import './Featured.scss';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import testTitle from '../../../assets/images/titleImage.png';
import lostInSpaceBck from '../../../assets/images/lostinspace.jpg';
import Options from '../Options/Options';

//This will come from database (MongoDB)
const genreList = [
  {
    id: `genre-0001-0001`,
    genre: 'Adventure',
    dateCreated: new Date(),
  },
  {
    id: `genre-0201-0002`,
    genre: 'Comedy',
    dateCreated: new Date(),
  },
  {
    id: `genre-0302-0003`,
    genre: 'Crime',
    dateCreated: new Date(),
  },
  {
    id: `genre-0402-0004`,
    genre: 'Fantasy',
    dateCreated: new Date(),
  },
  {
    id: `genre-1407-1005`,
    genre: 'Historical',
    dateCreated: new Date(),
  },
  {
    id: `genre-2408-2006`,
    genre: 'Horror',
    dateCreated: new Date(),
  },
  {
    id: `genre-3513-6007`,
    genre: 'Romance',
    dateCreated: new Date(),
  },
  {
    id: `genre-1815-9008`,
    genre: 'Sci-Fi',
    dateCreated: new Date(),
  },
  {
    id: `genre-2442-7109`,
    genre: 'Thriller',
    dateCreated: new Date(),
  },
  {
    id: `genre-3501-9210`,
    genre: 'Western',
    dateCreated: new Date(),
  },
  {
    id: `genre-3702-0911`,
    genre: 'Animation',
    dateCreated: new Date(),
  },
  {
    id: `genre-5519-3712`,
    genre: 'Drama',
    dateCreated: new Date(),
  },
  {
    id: `genre-5639-9713`,
    genre: 'Documentary',
    dateCreated: new Date(),
  },
];

const Featured = ({ type }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setGenres(genreList);
  }, []);

  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type.toLowerCase() === 'movie' ? 'Movies' : 'TV Series'}</span>
          <Options
            options={genres}
            optionTitleAs='genre'
            id='genre'
            name='genre'
            initOption='Genre'
          />
        </div>
      )}
      <img
        src={lostInSpaceBck}
        alt='Netflix Clone Home Page Background'
        width='100%'
      />
      <div className='info'>
        <img src={testTitle} alt='Featured Title' />
        <span className='desc'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel fuga
          voluptatum fugit maiores cupiditate accusantium esse ipsa repudiandae
          culpa magnam eveniet, enim aperiam dignissimos ea reprehenderit
          perferendis, provident vitae laborum!
        </span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

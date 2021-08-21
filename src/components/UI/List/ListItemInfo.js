import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
import './ListItemInfo.scss';
import ListItemIcons from './ListItemIcons';

const ListItemInfo = ({ trailer, time, limit, year, desc, genre }) => {
  return (
    <Fragment>
      {trailer && <video src={trailer} autoPlay={true} loop={true} />}
      <div className='itemInfo'>
        <ListItemIcons />
        <div className='itemInfoTop'>
          {time && <span>{time}</span>}
          {limit && <span className='limit'>{limit}</span>}
          {year && <span>{year}</span>}
        </div>
        {desc && <div className='desc'>{desc}</div>}
        {genre && <div className='genre'>{genre}</div>}
      </div>
    </Fragment>
  );
};

ListItemInfo.propTypes = {
  trailer: PropTypes.string,
  time: PropTypes.string,
  limit: PropTypes.string,
  year: PropTypes.string,
  desc: PropTypes.string,
  genre: PropTypes.string,
};

export default ListItemInfo;

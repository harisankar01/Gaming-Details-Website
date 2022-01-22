import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Thumb from '../Thumb';
import NoImage from '../../images/no_image.jpg';
import { Wrapper, Content, Text } from './MovieInfo.styles';

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.background_image_additional}>
    <Content>
      <Thumb
        image={
          movie.background_image
            ? `${movie.background_image}`
            : NoImage
        }
        clickable={false}
      />
      <Text>
        <h1>{movie.name_original}</h1>
        <h3>PLOT</h3>
        <p>{movie.description_raw}</p>

        <div className='rating-directors'>
          <div>
            <h3>GENRE</h3>
            <div className='score'>
              {movie.genres.map(txt=>(
                <Link to={`/genre/${txt.name}`}  style={{ textDecoration: 'none' }}>
                <div key={txt.id}>
                    <p>{txt.name}</p>
                  </div>
                  </Link>
              ))
              }
            </div>
          </div>
          <div className='director'>
            <h3>RATING</h3>
            {movie.ratings.map(director => (
              <p key={director.id}>{director.title}:{director.percent}</p>
            ))}
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

MovieInfo.propTypes = {
  movie: PropTypes.object
}

export default MovieInfo;
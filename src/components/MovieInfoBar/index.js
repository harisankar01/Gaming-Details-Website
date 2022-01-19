import React from 'react';
import PropTypes from 'prop-types';
// Helpers
import { calcTime, convertMoney } from '../../helpers';
// Styles
import { Wrapper, Content } from './MovieInfoBar.styles';

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className='column'>
        <p>Playtime: {calcTime(time)}</p>
      </div>
      <div className='column'>
        <p>Fandom: {budget}</p>
      </div>
      <div className='column'>
        <p>youtube follows: {revenue}</p>
      </div>
    </Content>
  </Wrapper>
);

export default MovieInfoBar;
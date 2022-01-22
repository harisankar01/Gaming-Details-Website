import React from 'react';
import {Top,Middle,Bg,End} from './genre.styles'
import { Link } from 'react-router-dom';

const Genre=({ge,detail,games})=> {
  return (
    <>
      <Top>
          <h1>Welcome to gaming heaven</h1>
          <h2>Genre:{ge.gname}</h2>
      </Top>
      <Bg image={detail.image_background}>
        <div className='nexr'>
      <Middle>
        <h2>{detail.description}</h2>
        <div className='gc'>gamescount: {detail.games_count}</div>
      </Middle>
      </div>
      </Bg>
      <End>
        <h1>Games:</h1>
      {games.map((values)=>{
        return(
          <ul key={values.id}>
        <Link to={`/${values.id}`}  style={{ textDecoration: 'none' }}>
          <li>
            {values.name}           
          </li>
          </Link>
        </ul>
        )
      })}
      </End>
      </>
  );
}

export default Genre;


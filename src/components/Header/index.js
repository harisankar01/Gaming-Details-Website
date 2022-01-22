import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
import RMDBLogo from '../../images/heading.jpeg';
import TMDBLogo from '../../images/header.jpeg';
import { Wrapper, Content, LogoImg, TMDBLogoImg,Heading } from './Header.styles';

const Header = () => {
  const movieId=useMatch('/:movieId');
  const ggg=useMatch('/genre/:gname');
  // console.log(movieId.params.movieId);
  const styles = useSpring({
   reverse:true,
    from: { x: 0 },
    to: { x: 1000 },
  })
  return (movieId || ggg) ? (<div></div>) : (
  <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={RMDBLogo} alt='rmdb-logo' />
      </Link>
      <animated.div style={{...styles}}>
       <Heading> Welcome to the gaming heaven</Heading>
      </animated.div>
      <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
    </Content>
  </Wrapper>
  )
};


export default Header;
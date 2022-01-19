import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'

import RMDBLogo from '../../images/heading.jpeg';
import TMDBLogo from '../../images/header.jpeg';

import { Wrapper, Content, LogoImg, TMDBLogoImg,Heading } from './Header.styles';

const Header = () => {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  })
  return(
  <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={RMDBLogo} alt='rmdb-logo' />
      </Link>
      <h1 style={{color:0xDC9575, borderRadius:2,borderColor:0xDC9575,...styles}}>Welcome to the gaming heaven</h1>
      <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
    </Content>
  </Wrapper>
  )
};


export default Header;
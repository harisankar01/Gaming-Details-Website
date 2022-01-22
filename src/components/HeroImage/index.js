import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
// Styles
import { Wrapper, Content, Text ,Git} from './HeroImage.styles';
import GitPho from'../../images/github-seeklogo.com.svg'
const HeroImage = ({ image, title, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
    <a href={'https://github.com/harisankar01'}>
    <Git src={GitPho}>
    </Git>
    </a>
    
  </Wrapper>
);


export default HeroImage;
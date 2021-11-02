import React, { Component } from 'react';
//styles
import { Wrapper, Content, LogoImg } from './styles';
//logo
import Logo from '../../assets/pipedrive_logo.svg';

class Header extends Component {
  render = () => (
    <Wrapper>
      <Content>
        <LogoImg src={Logo} alt='pipedrive' />
      </Content>
    </Wrapper>
  );
}

export default Header;

import React, { Component } from 'react';

import { Wrapper } from './styles';

import People from '../People'
import Search from '../Search'

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  getData = () =>  {
    
  }

  componentDidMount = () => {
    this.getData();
	}

  render = () => {
    return (
      <Wrapper>
        <Search/>
        <People/>
      </Wrapper>
    );
  }
}

export default Home;

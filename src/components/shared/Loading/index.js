import React, { Component } from 'react';

import ReactLoading from 'react-loading';

// Styles
import { Wrapper, Content } from './styles';

class Load extends Component {
  render = () => {
    return (
        <Wrapper>
            <Content>
                <ReactLoading type={'spin'} color={'#eee'} />
            </Content>
        </Wrapper>
    );
  }
}

export default Load;
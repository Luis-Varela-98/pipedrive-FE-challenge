import React, { Component } from 'react';
// Image
import searchIcon from '../../assets/search-icon.svg';
import addIcon from '../../assets/add_icon.svg';
// Styles
import { Wrapper, Content, Container, AddButton } from './styles';

import AddPersonModal from '../People/components/person-add';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
        modalOpen: false
    };
  }

  openModal = (person) => {
    this.setState({modalOpen: !this.state.modalOpen});
}

  render() {
    return (
      <Wrapper>
        <Container style={{flexDirection: 'row'}}>
            <Container>
              <AddButton alt='add' src={addIcon} onClick={this.openModal}  style={{width: '25px', height: '25px'}}/>
            </Container>
            <AddPersonModal isOpen={this.state.modalOpen} closeModal={this.openModal} />
        </Container>
        <Content>
            <img src={searchIcon} alt='search-icon' />
            <input
                type='text'
                placeholder='Filter by name'
                onChange={event => this.setState({ value: event.currentTarget.value })}
            />
        </Content>
      </Wrapper>
    );
  }
}

export default Search;
import React, { Component } from 'react';
//import API from '../../api'
import RLDD from 'react-list-drag-and-drop/lib/RLDD';

//Avatar
import Avatar from 'react-avatar';

import API from '../../api';

//styles
import { Wrapper, PersonContainer, Content, Container, Picture, Icon } from './styles';

import Load from '../shared/Loading'

import orgIcon from '../../assets/organization_icon.svg';

import PersonModal from './components/person-modal'

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people:[],
            person: [],
            modalOpen: false,
            loading: false
        };
    }

    getData = async () => {
        try {
            this.setState({loading: true});

            const people = await API.fetchPersons();

            this.setState({people : people.data, loading: false});

          } catch (error) {
            this.setState({ error: true, loading: false });
        }
    }

    getImage = (person) => {
        if(person.picture_id)
            return <Picture src={person.picture_id.pictures[Object.keys(person.picture_id.pictures)[0]]} alt='picture' />;
        return <Avatar name={person.name} size={50} round="50px"/>;
    }
    
    componentDidMount = async () => {
        this.getData();
    }

    openModal = (person) => {
        this.setState({modalOpen: !this.state.modalOpen, person});
    }

    handleRLDDChange = (newItems) => {
        this.setState({ people: newItems });
    }
    
    renderPerson = (person) => {
        return (
            <PersonContainer key={person.name} onClick={() => this.openModal(person)}>
                <Container>
                    <Container style={{marginBottom: '10px'}}>
                        {person.name}
                    </Container>
                    <Container style={{color: '#353535'}}>
                        <Icon src={orgIcon} alt='organization'/>
                        {person.org_name}
                    </Container>
                </Container>
                {this.getImage(person)}
            </PersonContainer>
        );
    }

    renderPeopleList = () => {
        const { people } = this.state;

        return (
            <Content>
                <RLDD
                    items={people}
                    itemRenderer={this.renderPerson}
                    onChange={this.handleRLDDChange}
                />
            </Content>
        );
    }

    render = () => {
        const { person, loading } = this.state;
        return (
            <Wrapper>
                {loading ? <Load /> : this.renderPeopleList()}
                <PersonModal refreshData={this.getData} person={person} closeModal={this.openModal} isOpen={this.state.modalOpen} picture={this.getImage(person)} />
            </Wrapper>
        );
    }
}

export default People;
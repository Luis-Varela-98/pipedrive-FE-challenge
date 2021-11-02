import React, { Component } from 'react';

import Modal from 'react-modal';

//Avatar
import Avatar from 'react-avatar';

import { Header, ModalContainer, Icon, Container, ModalPicture, ModalContent, Label, Information, Footer, Button, Wrapper } from '../styles';

import closeIcon from '../../../assets/close_icon.svg';

import API from '../../../api';

import Load from '../../shared/Loading';

class PersonModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };

        Modal.setAppElement('div');
    }

    get person() {
        const { person } = this.props;
        return person;
    }

    get closeFunction() {
        const { closeModal } = this.props;
        if(typeof closeModal === 'function') return closeModal;
        return null;
    }

    get isOpen() {
        const { isOpen } = this.props;
        return isOpen;
    }

    get picture() {
        const { picture } = this.props;
        return picture;
    }

    get refreshComponent() {
        const { refreshData } = this.props;
        if(typeof refreshData === 'function') return refreshData;
        return null;
    }

    deleteUser = async () => {
        try {
            this.setState({loading: true});

            const data = await API.deletePerson(this.person.id);

            if(data.success)
                this.setState({loading: false});

            this.closeFunction({});

            this.refreshComponent();

          } catch (error) {
            //TODO ERROR CATCH
        }
    }

    getImage = (person) => {
        if(person.picture_id)
            return <ModalPicture src={person.picture_id.pictures[Object.keys(person.picture_id.pictures)[0]]} alt='picture' />;
        return <Avatar name={person.name} size={70} round="70px"/>;
    }

    renderModal = () => {
        const styles = {overlay: {backgroundColor: 'rgba(0, 0, 0, 0.75)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0}, content: {padding: 0, outline: 'none', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', top: '15%', left: '35%', right: '35%', bottom: '15%'}};
        return (
            <Modal isOpen={this.isOpen} style={styles} closeTimeoutMS={500}>
                <Wrapper>
                    <Header>
                        <Container style={{color: '#353535'}}>
                            Person Information
                        </Container>
                        <Icon src={closeIcon} onClick={() => this.closeFunction(this.person)} />
                    </Header>
                    <ModalContainer>
                        {this.getImage(this.person)}
                        <Container style={{marginTop: '15px'}}>
                            {this.person.name}
                        </Container>
                        <Container style={{color: 'green', marginTop: '10px'}}>
                            {this.person.phone ? this.person.phone[0].value : ''}
                        </Container>
                        <ModalContent style={{marginTop: '30px'}}>
                            <Label>
                                Email
                            </Label>
                            <Information>
                                {this.person.email ? this.person.email[0].value : ''}
                            </Information>
                        </ModalContent>
                        <ModalContent>
                            <Label>
                                Organization
                            </Label>
                            <Information>
                                {this.person.org_name}
                            </Information>
                        </ModalContent>
                        <ModalContent>
                            <Label>
                                Assistant
                            </Label>
                            <Information>
                                {this.person ? this.person['06d69eb54949f8fbe2fbc32dfbdc744ff8d327f0'] : ''}
                            </Information>
                        </ModalContent>
                        <ModalContent>
                            <Label>
                                Groups
                            </Label>
                            <Information>
                                {this.person ? this.person['042333f5efc86ca6ee157c959edccfe70aa6b795']: ''}
                            </Information>
                        </ModalContent>
                        <ModalContent>
                            <Label>
                                Location
                            </Label>
                            <Information>
                                {this.person.org_id ? this.person.org_id.address : ''}
                            </Information>
                        </ModalContent>
                    </ModalContainer>
                    <Footer>
                        <Button onClick={this.deleteUser}>Delete</Button>
                    </Footer>
                </Wrapper>
            </Modal>
        );
    }

    render = () => {
        const { loading } = this.state;
        return (
            <Wrapper>
                { loading ? <Load /> : null }
                {this.renderModal()}
            </Wrapper>
        );
    }
}

export default PersonModal;
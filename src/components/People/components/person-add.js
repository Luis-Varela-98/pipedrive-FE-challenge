import React, { Component } from 'react';

import Modal from 'react-modal';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'

import { Header, ModalContainer, Icon, Container, ModalContent, Footer, Button, Wrapper } from '../styles';

import closeIcon from '../../../assets/close_icon.svg';

import Load from '../../shared/Loading';

import API from '../../../api';

class AddPersonModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            organizations: [],
            inputs:{}
        };
    }

    get isOpen() {
        const { isOpen } = this.props;
        return isOpen;
    }

    get closeFunction() {
        const { closeModal } = this.props;
        if(typeof closeModal === 'function') return closeModal;
        return null;
    }

    getData = async () => {
        try {
            this.setState({loading: true});

            const organizations = await API.fetchOrganizations();

            if(organizations.success)
                this.setState({organizations: organizations.data, loading: false});

          } catch (error) {
            //TODO ERROR CATCH
        }
    }

    componentDidMount = async () => {
        this.getData();
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(values => ({...values, [name]: value}))
    }
    
    handleSubmit = async (event) => {
        event.preventDefault();

        try {
            this.setState({loading: true});
            const data = {
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                org_id: this.state.org_id,
                '06d69eb54949f8fbe2fbc32dfbdc744ff8d327f0': this.state['06d69eb54949f8fbe2fbc32dfbdc744ff8d327f0'],
                '042333f5efc86ca6ee157c959edccfe70aa6b795': this.state['042333f5efc86ca6ee157c959edccfe70aa6b795']
            };

            const person = await API.addPerson(data);

            if(person.success)
                this.closeFunction();
            else{
                alert('Error try again!');
            }
            
            this.setState({loading: false, name: null, phone: null, email: null, org_id: null});
            
          } catch (error) {
            //TODO ERROR CATCH
        }
    }

    renderModal = () => {
        const styles = {overlay: {backgroundColor: 'rgba(0, 0, 0, 0.75)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0}, content: {padding: 0, outline: 'none', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', top: '10%', left: '35%', right: '35%', bottom: '10%'}};

        return (
            <Modal isOpen={this.isOpen} style={styles} closeTimeoutMS={500}>
                <Wrapper>
                        <Header>
                            <Container style={{color: '#353535'}}>
                                Add Person
                            </Container>
                            <Icon src={closeIcon} onClick={() => this.closeFunction(this.person)} />
                        </Header>
                        <form onSubmit={this.handleSubmit}>
                            <ModalContainer>
                                <ModalContent>
                                    <TextField
                                        variant="outlined" 
                                        style={{width: '100%'}}
                                        type="text" 
                                        name="name"
                                        label="Name" 
                                        //value={inputs.username || ""} 
                                        onChange={this.handleChange}
                                    />
                                </ModalContent>
                                <ModalContent>
                                    <TextField
                                        variant="outlined" 
                                        style={{width: '100%'}}
                                        type="text" 
                                        name="phone" 
                                        label="Phone"
                                        //value={inputs.username || ""} 
                                        onChange={this.handleChange}
                                    />
                                </ModalContent>
                                <ModalContent>
                                    <TextField
                                        variant="outlined"
                                        style={{width: '100%'}}
                                        type="text" 
                                        name="email" 
                                        label="Email"
                                        //value={inputs.username || ""} 
                                        onChange={this.handleChange}
                                    />
                                </ModalContent>
                                <ModalContent>
                                    <TextField select label="Organization" variant="outlined" style={{width: '100%'}} name="org_id" onChange={this.handleChange}>
                                        {this.state.organizations.map(organization => (<MenuItem value={organization.id}>{organization.name}</MenuItem>))}
                                    </TextField>
                                </ModalContent>
                                <ModalContent>
                                    <TextField
                                        variant="outlined"
                                        style={{width: '100%'}}
                                        type="text" 
                                        name="06d69eb54949f8fbe2fbc32dfbdc744ff8d327f0" 
                                        label="Assistant"
                                        onChange={this.handleChange}
                                    />
                                </ModalContent>
                                <ModalContent>
                                    <TextField
                                        variant="outlined"
                                        style={{width: '100%'}}
                                        type="text" 
                                        name="042333f5efc86ca6ee157c959edccfe70aa6b795" 
                                        label="Groups"
                                        onChange={this.handleChange}
                                    />
                                </ModalContent>
                            </ModalContainer>
                            <Footer style={{justifyContent: 'center'}}>
                                <Button type="submmit" onClick={this.deleteUser}>Add</Button>
                            </Footer>
                        </form>
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

export default AddPersonModal;
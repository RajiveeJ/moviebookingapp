import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Form, Label} from 'semantic-ui-react';

class Home extends Component {

  static propTypes = {
    updateun: PropTypes.func.isRequired
  }

  state = {
    
    un:'',
    pass:'',
    validun: true
  }

  handleChange = (e) => {
   
    this.setState({ un: e.target.value })
 
  }
  handleChange1 = (e) => {
    
    this.setState({ pass: e.target.value })
  }
  

  handlePostcodeSubmit = () => {
    
    const formattedun = this.state.un.toUpperCase().replace(/\s/g, "");
    const formattedpass = this.state.pass.toUpperCase().replace(/\s/g, "");

    if( formattedun === 'USER' && formattedpass === 'USER123' ) {
      this.props.history.push('/menu');
      this.setState({
        un: formattedun
      });
      this.props.updateun(formattedun);
    } else {
      this.setState({
        validun: false
      });
    }
  }

  closeModal = () => {
    this.setState({
      un: '',
      validun: true
    });
  }

  render(){

    return(
      <div id='home-page'>
        <Container >
          <Header as='h1' id="home-logo">Movies</Header>
          <Container id="home-content">
            <Header as='h1' id="home-header">Book your favorite tamil movies</Header>
            <Form size='large' onSubmit={this.handlePostcodeSubmit} fluid='true'>
              <Form.Group >
                  
                    <Form.Input placeholder='Enter your username' name='un' onChange={this.handleChange} value={this.state.un}  required id='home-form1'/>
                  <Form.Input type='password' placeholder='Enter your password' name='pass' onChange={this.handleChange1} value={this.state.pass}  required id='home-form2'/>
                
                <Form.Button type='submit' color='teal' size='large' width={4} id='home-btn'>Get Started</Form.Button>
              </Form.Group>
              <Label color='orange' size='medium' id='home-label'><span role='img' aria-label='point-right'>👉</span> Hint: username - user password - user123 </Label>
            </Form>
          </Container>
        </Container>

        {/* <Modal open={!this.state.validPostcode} size='mini' id='home-modal'>
          <Modal.Header>We'd love to send you a slice of the action, but..</Modal.Header>
          <Modal.Content>
            <p>It looks like you're located outside our delivery area <span role='img' aria-label='cat-sad'>😿</span></p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.closeModal} color='violet'>Try a different postcode</Button>
          </Modal.Actions>
       </Modal> */}
     </div>
    )
  }
};

export default Home;

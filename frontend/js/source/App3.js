import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };
  }

  toggle() {
    this.setState({modal: !this.state.modal});
  }

  toggleNested() {
    this.setState({nestedModal: !this.state.nestedModal});
  }

  toggleAll() {
    this.setState({
      modal: false,
      nestedModal: false,
      closeAll: !this.state.closeAll
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle.bind(this)}>
          Click Me
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} className={this.props.className}>
          <ModalHeader toggle={this.toggle.bind(this)}>Modal title</ModalHeader>
          <ModalBody>
            <Button color="success" onClick={this.toggleNested.bind(this)}>Show Nested Modal</Button>
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested.bind(this)}>
              <ModalHeader>Nested Modal title</ModalHeader>
              <ModalBody>Inner Content</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested.bind(this)}>Done</Button>{' '}
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleAll.bind(this)}>All Done</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../styles/contactDetail.css';

const mapStateToProps = state => (
  { contactDetail: state.contact }
);

class ContactDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
    };

    this.setContactInfo = this.setContactInfo.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.store.subscribe(() => {
      if (this.props.store.getState().contacts && this.props.store.getState().contacts.contact) {
        this.setContactInfo(this.props.store.getState().contacts.contact);
      }
    });
  }

  setContactInfo(data) {
    this.setState({
      firstName: data.firstname,
      lastName: data.lastname,
      phone: data.phone,
      email: data.email,
      address: data.email,
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    const { firstName, lastName, phone, email, address } = this.state;

    return (
      <div>
        <div className="contact-detail-container">
          <Button color="secondary" onClick={this.toggle}>Edit</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
          {firstName &&
            <div>
              <h2>{ firstName } { lastName }</h2>
              <p>Phone: { phone }</p>
              <p>Email: { email }</p>
              <p>Address: { address }</p>
            </div>
          }
          {!firstName && <h2>No Contact is selected</h2>}
        </div>
      </div>
    );
  }
}

ContactDetail.propType = {
  contactDetail: PropTypes.object,
  store: PropTypes.object,
};

export default connect(mapStateToProps)(ContactDetail);

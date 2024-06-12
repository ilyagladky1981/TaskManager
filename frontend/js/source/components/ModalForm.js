import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ModalForm extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillUnmount() {
  //   document.body.classList.remove('ModalForm');
  // }
  
  // componentDidMount() {
  //   if (this.props.modal) {
  //     document.body.classList.add('ModalForm');
  //   }
  // }


  render() {
    const { children, onClose, formClassName, formContentClassName } = this.props;
    return (
      <div className={formClassName}>
        <div className={formContentClassName}>
          {children}
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
    );
  }
}

ModalForm.propTypes = {
  formClassName: PropTypes.string,
  onClose: PropTypes.func,
  formContentClassName: PropTypes.string,
};

export default ModalForm; 
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ModalForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, onClose, formClassName, formContentClassName, onApply } = this.props;
    return (
      <div className={formClassName}>
        <div className={formContentClassName}>
          {children}
          <button onClick={onClose}>Закрыть</button> {'  '}
          <a className="button" onClick={onApply} >Применить</a>
        </div>
      </div>
    );
  }
}

ModalForm.propTypes = {
  formClassName: PropTypes.string,
  onClose: PropTypes.func,
  onApply: PropTypes.func,
  formContentClassName: PropTypes.string,
  // fillFieldData: PropTypes.func,
  // paramName: PropTypes.string,
  // options: PropTypes.array,
};

export default ModalForm; 
import Rating from './Rating';
import React, {Component, forwardRef} from 'react';
import PropTypes from 'prop-types';
import Suggest from './Suggest';

class FormInput extends Component {

  constructor(props) {
    super(props);
    this.formInputRef = React.createRef();
  }
  
  /*useImperativeHandle(ref, () => ({
    getCurrentValue: () => {
        return this.formInputRef.current ? this.formInputRef.current["value"] : '';
    }
  }));*/

  getValue() {
    return 'value' in this.formInputRef.current
      ? this.formInputRef.current["value"]
      : this.formInputRef.current.getValue();
  }

  render() {
    const common = {
      id: this.props.id,
      defaultValue: this.props.defaultValue,
    };
    switch (this.props.type) {
      case 'year':
        return (
          <input
            {...common}
            type="number" 
            defaultValue={this.props.defaultValue || new Date().getFullYear()} />
        );
      case 'suggest':
        return <Suggest {...common} options={this.props.options} />;
      case 'rating':
        return (
          <Rating
            {...common}
            defaultValue={parseInt(this.props.defaultValue, 10)} />
        );
      case 'text':
        return <textarea {...common} />;
      default:
        return <input {...common} type="text" />;
    }
  }
}

FormInput.propTypes = {
  type: PropTypes.oneOf(['year', 'suggest', 'rating', 'text', 'input']),
  id: PropTypes.string,
  options: PropTypes.array,
  defaultValue: PropTypes.any,
};

export default forwardRef(FormInput); 

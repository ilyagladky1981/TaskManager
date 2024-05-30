import Rating from './Rating';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Suggest from './Suggest';

class ExcelFormInput extends Component {
  
  getValue() {
    return 'value' in this.refs.input
      ? this.refs.input.value
      : this.refs.input.getValue();
  }

  render() {
    const common = {
      id: this.props.id,
      ref: 'input',
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
      case 'datetime':
        return (
          <Rating
            {...common}
            defaultValue={parseInt(this.props.defaultValue, 10)} />
        );
      case 'text':
        return <textarea {...common} />;
      case 'input':
        console.log("FormInput - render - case input ");
        console.log(this.props.listid);
        return <input {...common}  type="text" />;
      default:
        return <input {...common}  type="text" />;
    }
  }
}

ExcelFormInput.propTypes = {
  type: PropTypes.oneOf(['year', 'suggest', 'rating', 'text', 'input']),
  id: PropTypes.string,
  options: PropTypes.array,
  defaultValue: PropTypes.any,
};

export default ExcelFormInput

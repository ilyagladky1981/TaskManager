import Rating from './Rating';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Suggest from './Suggest';

class FormInput extends Component {
  
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
        return <input {...common} 
                type="text" 
                onChange={this.onDataChange.bind(this, this.props.listid)} 
                list={this.props.listid} />;
      default:
        return <input {...common} 
                type="text" 
                onChange={this.onDataChange.bind(this, this.props.listid)} 
                list={this.props.listid} />;  
    }
  }
}

FormInput.propTypes = {
  type: PropTypes.oneOf(['year', 'suggest', 'rating', 'text', 'input']),
  id: PropTypes.string,
  options: PropTypes.array,
  defaultValue: PropTypes.any,
  listid: PropTypes.string, 
  onDataChange: PropTypes.func,
};

export default FormInput

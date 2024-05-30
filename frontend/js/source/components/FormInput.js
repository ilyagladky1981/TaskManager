import Rating from './Rating';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Suggest from './Suggest';
import ListOptions from './ListOptions';

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
        // console.log("FormInput - render - case input - this.props.listid =");
        // console.log(this.props.listid);
        if ((typeof this.props.listid !== "undefined") &
        (this.props.listid === "PersonFullNameId")) {
          console.log("PersonFullNameId = " + this.props.listid);
          // console.log(this.props.listid + "=== undefined");
          return <ListOptions {...common} 
                  listid={this.props.listid} 
                  API_URL={this.props.API_URL} 
                  objName={this.props.objName}
                  options={this.props.peopleAPIData}/>;
        } else {
          console.log("FormInput - render - case input - this.props.listid = " + this.props.listid);
          return <input {...common} type="text" />
        }
      default:
        return <input {...common}   type="text" />;  
    }
  }
}

FormInput.propTypes = {
  type: PropTypes.oneOf(['year', 'suggest', 'rating', 'text', 'input']),
  id: PropTypes.string,
  options: PropTypes.array,
  defaultValue: PropTypes.any,
  listid: PropTypes.string, 
  API_URL: PropTypes.string,
  objName: PropTypes.string,
  peopleAPIData: PropTypes.arrayOf(
    PropTypes.object
  ),
};

export default FormInput

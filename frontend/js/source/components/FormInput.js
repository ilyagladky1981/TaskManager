import Rating from './Rating';
import React, {Component, useRef} from 'react';
import PropTypes from 'prop-types';
import Suggest from './Suggest';
import ListOptions from './ListOptions';
import InputFieldWithCheckBoxes from './InputFieldWithCheckBoxes';



class FormInput extends Component {

  constructor(props) {
    super(props);
    this.inputRefs = useRef<HTMLElement>([]);
    //this.formRef = React.createRef();
  }
  
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
    // console.log("FormInput - render - this.props.objectInputType =");
    // console.log(this.props.objectInputType);
    switch (this.props.objectInputType) {
      case 'year':
        return (
          <input
            {...common}
            className='Form CommonFormInput'
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
      case 'InputFieldWithCheckBoxes': {
        // console.log("FormInput - render - case=ListOptions - this.props.fieldid =");
        // console.log(this.props.fieldid);
        if ((typeof this.props.fieldid !== "undefined") &
          (this.props.objName !== "id")) {
          // console.log("FormInput - render - case ListOptions - objName = " + this.props.objName);
          // console.log("FormInput - render - case ListOptions - listid = " + this.props.fieldid);
          // console.log(this.props.fieldid + "=== undefined");
          // return null;
          return <InputFieldWithCheckBoxes {...common}
              listid={this.props.fieldid}
              objName={this.props.objName}
              options={this.props.optionsAPIData[this.props.fieldid]}
              paramName={this.props.paramName}
              // showSelectValueDialog={this.props.showNestedModal}
            />;
        } else {
          // console.log("FormInput - render - case ListOptions - this.props.fieldid = " + this.props.fieldid);
          return <input {...common} className='Form CommonFormInput' type="text" />
        }
      }; 
      case 'ListOptions': {
        // console.log("FormInput - render - case=ListOptions - this.props.fieldid =");
        // console.log(this.props.fieldid);
        if ((typeof this.props.fieldid !== "undefined") &
          (this.props.objName !== "id")) {
            // console.log("FormInput - render - case ListOptions - objName = " + this.props.objName);
            // console.log("FormInput - render - case ListOptions - listid = " + this.props.fieldid);
            // console.log(this.props.fieldid + "=== undefined");
            return <ListOptions {...common} 
                      listid={this.props.fieldid} 
                      objName={this.props.objName}
                      options={this.props.optionsAPIData[this.props.fieldid]}
                      />;
        } else {
          // console.log("FormInput - render - case ListOptions - this.props.fieldid = " + this.props.fieldid);
          return <input {...common} className='Form CommonFormInput' type="text" />
        }
      }; 
      case 'input': return <input {...common} className='Form CommonFormInput' type="text" />;
      default:
        return <input {...common} className='Form CommonFormInput' type="text" />;  
    }
  }
}

FormInput.propTypes = {
  type: PropTypes.oneOf(['year', 'suggest', 'rating', 'text', 'input']),
  id: PropTypes.string,
  options: PropTypes.array,
  defaultValue: PropTypes.any,
  fieldid: PropTypes.string, 
  API_URL: PropTypes.string,
  objName: PropTypes.string,
  paramName: PropTypes.string,
  optionsAPIData: PropTypes.object,
  objectInputType: PropTypes.oneOf(['year', 'suggest', 'rating', 'text', 
                          'input', 'ListOptions', 'datetime', 
                          'InputFieldWithCheckBoxes', 'ColorList']),
  // showNestedModal: PropTypes.func,
};

export default FormInput

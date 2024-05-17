import FormInput from './FormInput';
import Rating from './Rating';
import React, {Component} from 'react';
import PropTypes from 'prop-types';




class Form extends Component {


  constructor(props) {
    super(props);
    this.currentFormRef = React.createRef();
    this.state = {
      formData: null,
    };
  }

  getData() {
    let data = {};
    this.props.fields.forEach(field => 
      data[field.id] = this.refs[field.id].getValue()
    );
    return data;
  }
  
  render() {
    return (
      <form className="Form"><table className="FormTable">
        <tbody>{this.props.fields.map(field => {
        let prefilled;
        const value = this.props.initialData && this.props.initialData[field.id];
        if (this.props.addNewDialog) {
          if (field.autoFilling) {
            prefilled = this.props.defaultValue[field.id];
          } else {
            prefilled = null;
          }
        } else {
          if (!value) {
            prefilled = JSON.parse(JSON.stringify(value));
          } else {
            prefilled = '';
          }
          
        }
        /*if (!value && field.autoFilling) {
          prefilled = JSON.parse(JSON.stringify(this.props.initialData[field.id].defaultValue));
        } else {
          prefilled = JSON.parse(JSON.stringify(value));
        }*/
        if (!this.props.readonly) {
          if (field.editable) {
            return (
              <tr className="FormRow" key={field.id}>
                <td className="FormTableLabel"><label className="FormLabel" htmlFor={field.id}>{field.label}:&nbsp;</label></td>
                <td className="FormTableData"><FormInput {...field} ref={field.id} defaultValue={prefilled} /></td>
              </tr>
            );
          } else {
            return null;
          }
        }
        if (!prefilled) {
          return null;
        }
        return (
          <tr className="FormRow" key={field.id}>
            <td className="FormTableLabel"><span className="FormLabel">{field.label}:</span></td>
            <td className="FormTableData">{
              field.type === 'rating'
                ? <Rating readonly={true} defaultValue={parseInt(prefilled, 10)} />
                : <div>{prefilled}</div>
            }</td>
          </tr>
        );
        }, this)}</tbody></table></form>
    );
  }
}

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  initialData: PropTypes.object,
  readonly: PropTypes.bool,
  addNewDialog: PropTypes.bool,
  defaultValue: PropTypes.object,
};

export default Form

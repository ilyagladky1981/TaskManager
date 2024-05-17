import FormInput from './FormInput';
import Rating from './Rating';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

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
        const prefilled = this.props.initialData && this.props.initialData[field.id];
        if (!this.props.readonly && field.editable) {
          return (
            <tr className="FormRow" key={field.id}>
              <td className="FormTableLabel"><label className="FormLabel" htmlFor={field.id}>{field.label}:&nbsp;</label></td>
              <td className="FormTableData"><FormInput {...field} ref={field.id} defaultValue={prefilled} /></td>
            </tr>
          );
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
};

export default Form

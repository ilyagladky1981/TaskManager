import FormInput from './FormInput';
import Rating from './Rating';
import React, {Component} from 'react';
import PropTypes from 'prop-types';




class Form extends Component {


  constructor(props) {
    super(props);
    this.currentFormInputRef = React.createRef();
    this.state = {
      formData: null,
    };
  }

  getData() {
    let data = {};
    let schema_tmp = this.props.fields;
    console.log("getData - schema_tmp");
    console.log(schema_tmp);
    this.props.fields.forEach(field => 
      data[field.id] = this.refs[field.id].getValue()
    );
    return data;
  }


  // _handleSearch(event) {
    // const term = event.target.value.toLowerCase();
    // setSearchTerm(term);
    //
    // const filtered = data.filter((item) =>
    //   item.toLowerCase().includes(term)
    // );
    // setFilteredData(filtered);
  // };

  _handleSearch(listid) {
    // let inputData = {};
    // let schema_tmp = this.props.fields;
    console.log("Excel - _handleSearch - listid ");
    console.log(listid);
  }
  
  render() {
    /*let fields_tmp = this.props.fields;
    console.log("render - fields_tmp");
    console.log(fields_tmp);
    console.log("render - this.props.addNewDialog");
    console.log(this.props.addNewDialog);*/
    return (
      <form className="Form"><table className="FormTable">
        <tbody>{this.props.fields.map(field => {
        let prefilled;
        const value = this.props.initialData && this.props.initialData[field.id];
        /*console.log("render - value");
        console.log(value);
        console.log("render - field.id");
        console.log(field.id);
        console.log("render - this.props.initialData");
        console.log(this.props.initialData);
        console.log("render - this.props.initialData[field.id]");
        console.log(this.props.initialData[field.id]);*/

        if (this.props.addNewDialog) {
          if (field.autoFilling) {
            prefilled = this.props.defaultValue[field.id];
          } else {
            prefilled = '';
          }
        } else {
          if (value) {
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
          if (field.addnew) {
            return (
              <tr className="FormRowShowField" key={field.id}>
                <td className="FormTableLabel"><label className="FormLabel" htmlFor={field.id}>{field.label}:&nbsp;</label></td>
                <td className="FormTableData">
                  <FormInput {...field} 
                    ref={field.id}
                    defaultValue={prefilled}
                    fieldid={field.id}
                    objectInputType={field.objectInputType}
                    API_URL={this.props.API_URL}
                    objName={field.optionListObjName}
                    optionsAPIData={this.props.optionsAPIData}
                    showNestedModal={this.props.showNestedModal}
                  /></td>;
              </tr>
            );
          } else {
            return (
              <tr className="FormRowHideField" key={field.id}>
                <td className="FormTableLabel"><label className="FormLabel" htmlFor={field.id}>{field.label}:&nbsp;</label></td>
                <td className="FormTableData">
                  <FormInput {...field} 
                    ref={field.id}
                    defaultValue={prefilled}/></td>
              </tr>
            );
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
        }, this)}</tbody></table>
        </form>
    );
  }
}

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    dataURL: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    objectInputType: PropTypes.string.isRequired,
  })).isRequired,
  initialData: PropTypes.object,
  readonly: PropTypes.bool,
  addNewDialog: PropTypes.bool,
  defaultValue: PropTypes.object,
  API_URL: PropTypes.string,
  optionsAPIData: PropTypes.object,
  showNestedModal: PropTypes.func,
};

export default Form

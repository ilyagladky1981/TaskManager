import FormInput from './FormInput';
import Rating from './Rating';
import React, {Component, useRef} from 'react';
import PropTypes from 'prop-types';




class Form extends Component {
  

  constructor(props) {
    super(props);
    this.formInputRefs = useRef<HTMLElement>([]);
    this.state = {
      formData: null,
    };
  }

  getData() {
    // let data = {};
    // let schema_tmp = this.props.fields;
    // console.log("getData - schema_tmp");
    // console.log(schema_tmp);
    // this.props.fields.forEach((field, fieldidx) => 
    //   data[field.id] = this.formInputRefs.current[fieldidx].getValue()
    // );
    // return data;
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
    // // let n = 3;
    // // // let m = this.props.options.length;
    // // let k = Math.floor(m / n);
    // // let p = m % n;
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // let n = 2;
    // let m = numbers.length;
    // let k = Math.floor(m / n);
    // let p = m % n;
    // //const parts = numbers.map((number, idx) => getListParts());
    // // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // let newArr = [];
    // let part_size = k + 1;
    // for (let i = 0; i < p*part_size; i = i + part_size) {
    //   newArr.push(numbers.slice(i, i + part_size));
    // }
    // for (let i = p*part_size; i < numbers.length; i = i + part_size - 1) {
    //   newArr.push(numbers.slice(i, i + part_size - 1));
    // }
    // console.log('Form - render - newArr');
    // console.log(newArr);
    return (
      <form className="Form"><table className="FormTable">
        <tbody>{this.props.fields.map((field, fieldidx) => {
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
                <td className="FormTableLabel">
                  <label className="FormLabel"
                    htmlFor={field.id}>{field.label}:&nbsp;</label>
                </td>
                <td className="FormTableData">
                  <FormInput {...field}
                    // ref={this.formInputRefs.current[fieldidx]}
                    defaultValue={prefilled}
                    fieldid={field.id}
                    objectInputType={field.objectInputType}
                    API_URL={this.props.API_URL}
                    objName={field.optionListObjName}
                    optionsAPIData={this.props.optionsAPIData}
                    paramName={field.label}
                    // showNestedModal={this.props.showNestedModal} 
                    />
                </td>
              </tr>
            );
          } else {
            return (
              <tr className="FormRowHideField" key={field.id}>
                <td className="FormTableLabel"><label className="FormLabel" htmlFor={field.id}>{field.label}:&nbsp;</label></td>
                <td className="FormTableData">
                  <FormInput {...field} 
                    ref={this.formInputRefs[fieldidx]}
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
  // showNestedModal: PropTypes.func,
};

export default Form

import FormInput from './FormInput';
import Rating from './Rating';
import React, {Component} from 'react';
import PropTypes from 'prop-types';




class CheckBoxForm extends Component {


  constructor(props) {
    super(props);
    this.currentFormInputRef = React.createRef();
    this.state = {
      formData: null,
    };
  }

  getData() {
    // let data = {};
    // let schema_tmp = this.props.fields;
    // console.log("getData - schema_tmp");
    // console.log(schema_tmp);
    // this.props.fields.forEach(field => 
    //   data[field.id] = this.refs[field.id].getValue()
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

  getListParts(idx) {
    

  }
  
  render() {
    /*let fields_tmp = this.props.fields;
    console.log("render - fields_tmp");
    console.log(fields_tmp);
    console.log("render - this.props.addNewDialog");
    console.log(this.props.addNewDialog);*/
    // let n = 3;
    // // let m = this.props.options.length;
    // let k = Math.floor(m / n);
    // let p = m % n;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let n = 2;
    let m = numbers.length;
    let k = Math.floor(m / n);
    let p = m % n;
    let parts = [];
    let part_size = k + 1;
    for (let i = 0; i < p*part_size; i = i + part_size) {
      parts.push(numbers.slice(i, i + part_size));
    }
    for (let i = p*part_size; i < numbers.length; i = i + part_size - 1) {
      parts.push(numbers.slice(i, i + part_size - 1));
    }
    console.log('Form - render - parts');
    console.log(parts);
    
    //parts = 
    return (
      <form className="Form"><table className="FormTable">
        <tbody><tr>{
          this.props.parts.map(part => {
            return (
              <td>
                {part.map((elem, idx) => {
                  return (
                    <div>
                      <input
                        type="checkbox"
                        id={"checkbox"+{idx}}
                        name={"checkbox"+{idx}}
                        value={elem}>
                      </input>
                      <label
                        for={"checkbox"+{idx}}>{elem}</label>
                      <br></br>
                    </div>
                  )
                  }, this)
                }
              </td>)
          }, this)
          }
        </tr></tbody></table>
        {/* <input type="submit" value="Заполнить" onClick={this.props.onClick}>
        </input> */}
        </form>
      );
  }
}

CheckBoxForm.propTypes = {
  columnNumber : PropTypes.number,
  onClick: PropTypes.func,
  paramName: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.object
  ),
};

export default CheckBoxForm

import React, {Component, useRef} from 'react';
import PropTypes from 'prop-types';


class CheckBoxForm extends Component {

  constructor(props) {
    super(props);
    this.checkBoxFormRefs = useRef<HTMLElement>({});
    this.parts = [];
    this.state = {
      formData: null,
    };
  }

  getData() {
    let data = [];
    console.log('CheckBoxForm - getData() - this.checkBoxFormRefs = ')
    console.log(this.checkBoxFormRefs.current);
    // for (let elemidx in this.checkBoxFormRefs) {
    //     if (this.checkBoxFormRefs[elemidx].input.checked) {
    //       data.push(this.checkBoxFormRefs[elemidx].input.value)
    //     }
    //   }

    // this.parts.forEach((elem, elemidx) => {
      
    // }
    // );
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

  // _handleSearch(listid) {
  //   // let inputData = {};
  //   // let schema_tmp = this.props.fields;
  //   // console.log("Excel - _handleSearch - listid ");
  //   // console.log(listid);
  // }

  
  render() {
    /*let fields_tmp = this.props.fields;
    console.log("render - fields_tmp");
    console.log(fields_tmp);
    console.log("render - this.props.addNewDialog");
    console.log(this.props.addNewDialog);*/
    // let n = this.props.columnNumber;
    // // let m = this.props.options.length;
    // let k = Math.floor(m / n);
    // let p = m % n;
    this.parts = [];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let n = this.props.columnNumber;
    let m = numbers.length;
    let k = Math.floor(m / n);
    let p = m % n;
    
    let part_size = k + 1;
    for (let i = 0; i < p*part_size; i = i + part_size) {
      this.parts.push(numbers.slice(i, i + part_size));
    }
    for (let i = p*part_size; i < numbers.length; i = i + part_size - 1) {
      this.parts.push(numbers.slice(i, i + part_size - 1));
    }
    console.log('CheckBoxForm - render - this.parts');
    console.log(this.parts);
    
    //this.parts = 
    return (
      <div className="Form">
        <div class="CheckBoxFormHeader">{this.props.paramName}</div>
        <table className="FormTable">
        <tbody><tr>{
          //this.props.
          this.parts.map((part, pid) => {
            return (
              <td className="checkboxForm">
                {part.map((elem, idx) => {
                  return (
                    <div className="checkboxForm">
                      <input
                        type="checkbox"
                        id={"checkbox"+(pid*part.length+idx)}
                        name={"checkbox"+(pid*part.length+idx)}
                        ref={this.checkBoxFormRefs[idx]}
                        dataid={pid*part.length+idx}
                        value={elem} 
                        key={pid*part.length+idx}  />
                      <label
                        htmlFor={"checkbox"+(pid*part.length+idx)}>{elem}</label>
                      <br/>
                    </div>
                  )
                  }, this)
                }
              </td>
              )
          }, this)
          }
        </tr></tbody></table>
      </div>
    );
  }
}

CheckBoxForm.propTypes = {
  columnNumber : PropTypes.number,
  onClick: PropTypes.func,
  paramName: PropTypes.string,
  objName: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.object
  ),
};

export default CheckBoxForm

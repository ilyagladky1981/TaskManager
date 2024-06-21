import React, {Component, useRef} from 'react';
import PropTypes from 'prop-types';


class CheckBoxForm extends Component {

  //...

  constructor(props) {
    super(props);//<HTMLInputElement>
    // this.checkBoxFormRefs = useRef<HTMLInputElement>([]);
    this.parts = [];
    this.state = {
      formData: null,
      checkBoxes: []
    };
  }

  getData() {
    let data = [];
    // console.log('CheckBoxForm - getData() - this.checkBoxFormRefs = ')
    // console.log(this.checkBoxFormRefs.current);

    // for (let elemidx = 0; elemidx < this.checkBoxFormRefs.current.length; elemidx++) {
    //   console.log('elemidx = '+elemidx);
    // }
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
    // console.log('1 CheckBoxForm - render() before - this.checkBoxFormRefs = ');
    // console.log(this.checkBoxFormRefs);
    // console.log(this.checkBoxFormRefs.current);
    // {6:6}, {7:7}, {8:8}, {9:9}, {10:10}, {11:11}, {12:12}, {13:13}, {14:14}
    this.parts = [];
    const numbers = [{'id':1, 'label':1}, {'id':2, 'label':2}, {'id':3, 'label':3}, {'id':4, 'label':4}, 
      {'id':5, 'label':5}];
    let NewCheckBoxArray = [];
    NewCheckBoxArray.push(numbers[0]);
    console.log('CheckBoxForm - render() - NewCheckBoxArray = ');
    console.log(NewCheckBoxArray);
    this.setState({checkBoxes : NewCheckBoxArray});
    // let tmpdata = this.state.checkBoxes[0];
    // tmpdata[0]['checked'] = false;

    console.log('CheckBoxForm - render() - this.checkBoxes = ');
    console.log(this.state.checkBoxes);
    console.log('CheckBoxForm - render() - numbers = ');
    console.log(numbers);
    console.log('CheckBoxForm - render() - numbers[0] = ');
    console.log(numbers[0]);

    // this.setState({checkBoxes : tmpdata});
    // console.log('CheckBoxForm - render() - this.checkBoxes = ');
    // console.log(this.state.checkBoxes[0]);

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
    // htmlFor={"checkbox"+(pid*part.length+idx)}>{elem}</label>
    return (
      <div className="Form">
        <div className="CheckBoxFormHeader">{this.props.paramName}</div>
        <table className="FormTable">
        <tbody><tr>{
          //this.props.
          this.parts.map((part, pid) => {
            return (
              <td className="checkboxForm">
                {part.map((elem, idx) => {
                  return (
                    <div className="checkboxForm">
                      <label key={idx}>
                        <input
                          type="checkbox"
                          id={"checkbox" + (pid * part.length + idx)}
                          name={"checkbox" + (pid * part.length + idx)}
                          //ref={(element) => this.checkBoxFormRefs.current[idx] = element}
                          ref={this.checkBoxFormRefs[pid * part.length + idx]}
                          dataid={pid * part.length + idx}
                          value={elem}
                          key={pid * part.length + idx} />
                        {elem}</label>
                      <br/>
                    </div>
                  )
                  }, this)
                }
              </td>
              )
          }, this)
          }
          {console.log('2 CheckBoxForm - render() after - this.checkBoxFormRefs.current = ')}
          {console.log(this.checkBoxFormRefs)}
          {console.log(this.checkBoxFormRefs.current)}
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

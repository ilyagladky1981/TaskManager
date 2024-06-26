import React, {Component, useRef } from 'react';
import PropTypes from 'prop-types';
// import bootstrap from 'bootstrap'
// import Button from 'react-bootstrap/Button';
import ModalForm from './ModalForm';
import CheckBoxForm from './CheckBoxForm';

// import Dialog from './Dialog';
// import Form from './Form';


class InputFieldWithCheckBoxes extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
      datalist: [],
      showNestedModalForm: false,
    };
    this.checkBoxFormRef = React.createRef();
  }
  
  getValue() {
    return this.state.datalist;
  }

  openNestedModal() {
    this.setState({ showNestedModalForm: true });
  };


  closeNestedModal() {
    this.setState({ showNestedModalForm: false });
  };

  _fillFieldData() {
    let data = [];
    // let schema_tmp = this.props.fields;
    // console.log("getData - schema_tmp");
    // console.log(schema_tmp);
    // this.props.fields.forEach((field, fieldidx) => 
    //   data[field.id] = this.formInputRefs.current[fieldidx].getValue()
    // );
    

    data = this.checkBoxFormRef.current.getData();
    this.setState({ datalist: data });
    this.closeNestedModal();
  }


  // _selectValuesDialog() {
  //   console.log("InputFieldWithCheckBoxes - _selectValuesDialog - button click = ok");
  //   alert('Функция _selectValuesDialog вызвана!');
  //   // this.setState({showNestedModalForm: true});
  //   // e.stopPropagation();
  // }

  // _addNew(action) {
  //   console.log("InputFieldWithCheckBoxes - _addNew - !!! - unexpected");
  //   // if (action === 'dismiss') {
  //   //   this.setState({showNestedModalForm: false});
  //   //   return;
  //   // }
  // }
  
  render() {
    // console.log("ListOptions - render - this.props.listid =");
    // console.log("schema = " + typeof this.props.schema);
    // console.log("schema[listid] = " + typeof typeof this.props.schema[this.props.listid]);
    // console.log("schema[listid].dataURL = " + typeof this.props.schema[this.props.listid].dataURL);
    // if (typeof this.props.dataURL === 'undefined') {
    //       console.log("ListOptions - render - (dataURL === undefined) => listid = " + this.props.listid);
    //       return (
    //         <input 
    //           defaultValue={this.props.defaultValue}
    //           //onChange={e => this.setState({value: e.target.value})}
    //           id={this.props.id} />
    //       )
    // } else {
      // console.log("ListOptions - render - this.props.schema[this.props.listid].dataURL =");
      // console.log(typeof this.props.schema[this.props.listid].dataURL);
      // console.log("ListOptions - render - (dataURL !!! undefined) => listid = " + this.props.listid);
      // console.log("ListOptions - render - (dataURL !!! undefined) === " + this.props.dataURL);
    // let n = 2;
    // let m = this.props.options.length;
    // let k = Math.floor(m / n);
    // let p = m % n;
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // m = numbers.length;
    // k = m / n;
    // p = m % n;
    // //const parts = numbers.map((number, idx) => getListParts());
    // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //  n = 2;
    // let newArr = [];
    // for (let i = 0; i < array.length + 1; i = i + n) {
    //   newArr.push(array.slice(i, i + n));
    // }
    // // console.log(newArr);
    if (!Array.isArray(this.props.options)) {
        // console.log("InputFieldWithCheckBoxes - render - (dataURL !!! undefined) - !Array = ");
        // console.log(this.props.options);
        // console.log("typeof this.props.options");
        // console.log(typeof this.props.options);
        return (
          <table className='IFWCB'>
            <tbody>
              <tr className='rowFWCB'>
                <td className='max'>
                  <input
                    className='CommonFormInput'
                    defaultValue={this.props.defaultValue}
                    // onChange={e => this.setState({value: e.target.value})}
                    id={this.props.id} />
                </td>
                <td className='min'>
                  <a
                    onClick={this.openNestedModal.bind(this)}
                    className="btn btn-primary btn-sm"
                    href="#" 
                    role="button">
                    Выбрать
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        )
    } else {
      // console.log("ListOptions - render - (options === isArray) - this.props.options = ");
      // console.log(this.props.options);(e) => this._selectValuesDialog.bind(this, e)
      // console.log("typeof this.props.options");
      // console.log(typeof this.props.options);
      return (
        <table className='IFWCB'>
          <tbody>
            <tr className='rowFWCB'>
              <td className='max'>
                <input
                  className='CommonFormInput'
                  defaultValue={this.state.datalist.toString()}
                  onChange={e => this.setState({ value: e.target.value})}
                  id={this.props.id}
                  dataid={[1]} />
              </td>
              <td className='min'>
                <a 
                  onClick={this.openNestedModal.bind(this)} 
                  className="button">
                  Выбрать
                </a>
                {this.state.showNestedModalForm && (
                  <ModalForm
                    onClose={this.closeNestedModal.bind(this)}
                    formClassName='nestedmodal'
                    formContentClassName='nestedmodal__content'
                    onApply={this._fillFieldData.bind(this)}
                    // fillFieldData={this._fillFieldData.bind(this)}
                    // options={this.props.options}
                    >
                    <CheckBoxForm
                      ref={this.checkBoxFormRef}
                      paramName={this.props.paramName}
                      columnNumber={3}
                      options={this.props.options}
                      objName={this.props.objName}
                       />
                  </ModalForm>
                  )}
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
    
  }
}


InputFieldWithCheckBoxes.propTypes = {
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  listid : PropTypes.string,
  objName: PropTypes.string,
  paramName: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.object
  ),
  // showSelectValueDialog: PropTypes.func,
  onDataChange: PropTypes.func,
};

export default InputFieldWithCheckBoxes



import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Dialog from './Dialog';
// import Form from './Form';


class InputFieldWithCheckBoxes extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
      datalist: []
    };
    this.formRef2 = React.createRef();
  }
  
  getValue() {
    return this.state.datalist;
  }

  // _selectValuesDialog() {
  //   console.log("InputFieldWithCheckBoxes - _selectValuesDialog - button click = ok");
  //   alert('Функция _selectValuesDialog вызвана!');
  //   // this.setState({showSelectValueDialog: true});
  //   // e.stopPropagation();
  // }

  // _addNew(action) {
  //   console.log("InputFieldWithCheckBoxes - _addNew - !!! - unexpected");
  //   // if (action === 'dismiss') {
  //   //   this.setState({showSelectValueDialog: false});
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
    if (!Array.isArray(this.props.options)) {
        // console.log("ListOptions - render - (dataURL !!! undefined) - !Array = ");
        // console.log(this.props.options);
        // console.log("typeof this.props.options");
        // console.log(typeof this.props.options);
        return (
            <input 
              defaultValue={this.props.defaultValue}
              // onChange={e => this.setState({value: e.target.value})}
              id={this.props.id} />
        )
    } else {
      // console.log("ListOptions - render - (options === isArray) - this.props.options = ");
      // console.log(this.props.options);(e) => this._selectValuesDialog.bind(this, e)
      // console.log("typeof this.props.options");
      // console.log(typeof this.props.options);
      return (
        <div>
          <div>
            <input
              defaultValue={this.props.defaultValue}
              onChange={e => this.setState({ value: e.target.value, datalist: e.target.dataid})}
              id={this.props.id} 
              dataid={[1]}/>
            <button onClick={this.props.showSelectValueDialog}>
              Выбрать
            </button>
            
          </div>
        </div>
      );
    }
    
  }
}

/*  {this.state.showSelectValueDialog
            ? <Dialog
              modal={true}
              header="Добавить новую задачу"
              confirmLabel="Добавить"
              onAction={this._addNew.bind(this)}
            >
              <Form
                ref={this.formRef2}
                fields={this.props.schema}
                addNewDialog={true}
                API_URL={this.props.API_URL}
                optionsAPIData={this.props.optionsAPIData} />
            </Dialog>
            : null}*/
InputFieldWithCheckBoxes.propTypes = {
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  listid : PropTypes.string,
  objName: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.object
  ),
  showSelectValueDialog: PropTypes.func,
  onDataChange: PropTypes.func,
};

export default InputFieldWithCheckBoxes



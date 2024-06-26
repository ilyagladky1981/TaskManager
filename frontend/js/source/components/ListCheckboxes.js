import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


class ListCheckboxes extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
      datalist: [],
    };
  }
  
  getValue() {
    return this.state.datalist;
  }

  
  
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
      // console.log(this.props.options);
      // console.log("typeof this.props.options");
      // console.log(typeof this.props.options);
      return (
        <div>
          <input
            list={"options" + this.props.listid}
            defaultValue={this.props.defaultValue}
            onChange={e => this.setState({ value: e.target.value, datalist: e.target.dataid})}
            id={this.props.id} />
          <datalist id={"options" + this.props.listid}>{
            this.props.options.map((item, idx) =>
              <option value={item[this.props.objName]} 
                      dataid={item.id}  
                      key={idx} />
            )
          }</datalist>   
          <button onClick={this._addNewDialog.bind(this)}>
            Добавить задачу
          </button>
          <button onClick={activateLasers}>
            Activate Lasers
          </button>
        </div>
      );
    }
    
  }
}

ListCheckboxes.propTypes = {
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  listid : PropTypes.string,
  API_URL: PropTypes.string,
  objName: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default ListCheckboxes



import Button from './Button';
import Dialog from './Dialog';
import Excel from './Excel';
import Form from './Form';
import React, {Component} from 'react';
import PropTypes from 'prop-types';



class TaskEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.initialData,
      fullData: props.fullAPIData,
      addnew: false,
    };
    this._preSearchData = null;
    this.formRef = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.initialData !== state.prevData) {
      return {
        data: props.initialData,
        prevData: state.prevData,
      };
    }
    return null;
  }

  
  _addNewDialog() {
    this.setState({addnew: true});
  }
  
  _addNew(action) {
    if (action === 'dismiss') {
      this.setState({addnew: false});
      return;
    }
    let data = Array.from(this.state.data);
    data.unshift(this.formRef.current.getData());
    this.setState({
      addnew: false,
      data: data,
    });
    this._commitToStorage(data);
  }
  
  _onExcelDataChange(data) {
    this.setState({data: data});
    //this._saveData(data);
    //this._commitToStorage(data);
  }
  
  /*
  async _saveData(data) { 
    try {
      console.log("_saveData - data");
      console.log(data);
      const response = await fetch(`${API_URL}control/1/`,
          { method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
          });
      
      const responsePOSTAPIData = await response.json();
      console.log("responsePOSTAPIData");
      console.log(responsePOSTAPIData);
      
      return responsePOSTAPIData;
    } catch(error) {
      console.error(error);
    }
  };*/



  
  /*_commitToStorage(data) {
    //save to REST
    localStorage.setItem('data', JSON.stringify(data));
  }*/
  
  _startSearching() {
    this._preSearchData = this.state.data;
  }
  
  _doneSearching() {
    this.setState({
      data: this._preSearchData,
    });
  }

  _search(e) {
    const needle = e.target.value.toLowerCase();
    if (!needle) {
      this.setState({data: this._preSearchData});
      return;
    }
    const fields = this.props.schema.map(item => item.id);
    const searchdata = this._preSearchData.filter(row => {
      for (let f = 0; f < fields.length; f++) {
        if (row[fields[f]].toString().toLowerCase().indexOf(needle) > -1) {
          return true;
        }
      }
      return false;
    });
    this.setState({data: searchdata});
  }
  
  render() {
    /*console.log('this.state.data TaskEditor');
    console.log(this.state.data);*/

    return (
      <div className="TaskEditor">
        <div className="TaskEditorToolbar">
          <div className="TaskEditorToolbarAdd">
            <Button 
              onClick={this._addNewDialog.bind(this)}
              className="TaskEditorToolbarAddButton">
              Добавить задачу
            </Button>
          </div>
        </div>
        <div className="TaskEditorDatagrid">
          <Excel 
            schema={this.props.schema}
            initialData={this.state.data}
            onDataChange={this._onExcelDataChange.bind(this)} />
        </div>
        {this.state.addnew
          ? <Dialog 
              modal={true}
              header="Добавить новую задачу"
              confirmLabel="Добавить"
              onAction={this._addNew.bind(this)}
            >
              <Form
                ref={this.formRef}
                fields={this.props.schema} />
            </Dialog>
          : null}
      </div>
    );
  }
}

TaskEditor.propTypes = {
  schema: PropTypes.arrayOf(
    PropTypes.object
  ),
  initialData: PropTypes.arrayOf(
    PropTypes.object
  ),
  fullAPIData: PropTypes.arrayOf(
    PropTypes.object
  ),
};

export default TaskEditor

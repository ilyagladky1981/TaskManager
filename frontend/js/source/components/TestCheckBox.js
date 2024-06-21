import React, {Component, useRef, useState} from 'react';
import PropTypes from 'prop-types';

class CheckBoxSum extends Component {
  
  constructor(props) {
    super(props);//<HTMLInputElement>
    this.checkBoxFormRefs = useRef<HTMLInputElement>([]);
    //const [this.checkBoxes, this.setCheckBoxes] = useState(Array(20).fill(false));
    this.parts = [];
    this.state = {
      formData: null,
      checkBoxes: Array(20).fill(false)
    };
  }
   

  handleCheckBoxChange(index) {
    const newCheckBoxes = [...checkBoxes];
    newCheckBoxes[index] = !newCheckBoxes[index];
    setCheckBoxes(newCheckBoxes);
  };

  sumCheckedValues() {
    let sum = 0;
    for (let i = 0; i < this.state.checkBoxes.length; i++) {
      if (this.state.checkBoxes[i].checked) {
        sum += i + 1; // добавляем 1, так как индексы начинаются с 0
      }
    }
    alert(`Сумма отмеченных значений: ${sum}`);
  };

  render() {
    return (
      <div>
        {this.state.checkBoxes.map((isChecked, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={this.handleCheckBoxChange(index).bind(this)}
            />
            {index + 1}
          </label>
        ))}
        <button onClick={this.sumCheckedValues.bind(this)}>Просуммировать</button>
      </div>
    );
  }
};

export default CheckBoxSum;

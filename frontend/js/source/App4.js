import React, { Component } from 'react';
import ModalForm from './components/ModalForm';

  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showNestedModal: false
    };
  }

  openModal() {
    this.setState({ showModal: true });
  };

  closeModal() {
    this.setState({ showModal: false });
  };

  openNestedModal() {
    this.setState({ showNestedModal: true });
  };

  closeNestedModal() {
    this.setState({ showNestedModal: false });
  };

  render() {
    const { showModal, showNestedModal } = this.state;

    return (
      <div className="app">
        <h1>App4 Пример приложения с модальным окном</h1>
        <button onClick={this.openModal.bind(this)}>Открыть модальное окно</button>
        {showModal && (
          <ModalForm 
                      onClose={this.closeModal.bind(this)} 
                      formClassName='modal'
                      formContentClassName='modal__content'>
            <h2>Модальное окно</h2>
            <button onClick={this.openNestedModal.bind(this)}>Открыть вложенное модальное окно</button>
            {showNestedModal && (
              <ModalForm 
                          onClose={this.closeNestedModal.bind(this)} 
                          formClassName='nestedmodal'
                          formContentClassName='nestedmodal__content'>
                <h3>Вложенное модальное окно</h3>
                <p>Это вложенное модальное окно</p>
              </ModalForm>
            )}
          </ModalForm>
        )}
      </div>
    );
  }
}

export default App;
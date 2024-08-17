import React from 'react';
import FormBuilder from './components/FormBuilder';
import FormConfigurator from './components/FormConfigurator';
import './App.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className='title'>动态表单生成器</h1>
      <div className='contanner'>
        <div className='item'>
          <FormConfigurator />
        </div>
        <div className='item'>
          <FormBuilder /> 
        </div>
      </div>
    </div>
  );
};

export default App;

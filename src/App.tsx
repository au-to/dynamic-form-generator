import React from 'react';
import FormBuilder from './components/form-builder/index';
import FormConfigurator from './components/form-configrator/index';
import ElementEditor from './components/element-editor/index';
import './App.scss'

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className='sidebar'>
        <h2>配置：</h2>
        <FormConfigurator />
        <h2>编辑：</h2>
        <ElementEditor />
      </div>
      <div className='main-content'>
        <h2>预览：</h2>
        <FormBuilder />
      </div>
    </div>
  );
};

export default App;

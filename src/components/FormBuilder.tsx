import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/index';

const FormBuilder: React.FC = () => {
  const elements = useSelector((state: RootState) => state.form.elements);

  return (
    <div>
      <h2>预览：</h2>
      <form>
        {elements.map(element => {
          switch (element.type) {
            case 'text':
              return (
                <div key={element.id}>
                  <label>{element.label}</label>
                  <input type="text" value={element.value} onChange={() => { }} />
                </div>
              );
            case 'textarea':
              return (
                <div key={element.id}>
                  <label>{element.label}</label>
                  <textarea value={element.value} onChange={() => { }} />
                </div>
              );
            case 'select':
              return (
                <div key={element.id}>
                  <label>{element.label}</label>
                  <select value={element.value} onChange={() => { }}>
                    {element.options?.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              );
            case 'checkbox':
              return (
                <div key={element.id}>
                  <label>
                    <input type="checkbox" checked={element.value === 'true'} onChange={() => { }} />
                    {element.label}
                  </label>
                </div>
              );
            case 'radio':
              return (
                <div key={element.id}>
                  <input type="radio" checked={element.value === 'true'} onChange={() => { }} />
                  {element.label}
                </div>
              );
            default:
              return null;
          }
        })}
      </form>
    </div>
  );
};

export default FormBuilder;

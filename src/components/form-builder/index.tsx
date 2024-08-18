import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index';
import { selectElement, removeElement } from '../../store/formSlice';
import './index.scss'

const FormBuilder: React.FC = () => {
  const elements = useSelector((state: RootState) => state.form.elements);
  const selectedElementId = useSelector((state: RootState) => state.form.selectedElementId);
  const dispatch = useDispatch();

  const handleElementClick = (elementId: string) => {
    dispatch(selectElement(elementId));
  };

  const handleRemove = (elementId: string) => {
    dispatch(removeElement(elementId));
  };

  return (
    <div>
      <form className='form-builder'>
        {elements.map(element => {
          switch (element.type) {
            case 'text':
              return (
                <div className={`form-element ${element.id === selectedElementId ? 'selected' : ''}`} key={element.id} onClick={() => handleElementClick(element.id)}>
                  <label>{element.label}</label>
                  <input type="text" value={element.value} onChange={() => { }} />
                  <button
                    className="delete-button"
                    onClick={(e) => {
                      e.stopPropagation(); // 阻止冒泡，避免触发selectElement
                      handleRemove(element.id);
                    }}
                  >
                    &times;
                  </button>
                </div>
              );
            case 'textarea':
              return (
                <div className={`form-element ${element.id === selectedElementId ? 'selected' : ''}`} key={element.id} onClick={() => handleElementClick(element.id)}>
                  <label>{element.label}</label>
                  <textarea value={element.value} onChange={() => { }} />
                  <button
                    className="delete-button"
                    onClick={(e) => {
                      e.stopPropagation(); // 阻止冒泡，避免触发selectElement
                      handleRemove(element.id);
                    }}
                  >
                    &times;
                  </button>
                </div>
              );
            case 'select':
              return (
                <div className={`form-element ${element.id === selectedElementId ? 'selected' : ''}`} key={element.id} onClick={() => handleElementClick(element.id)}>
                  <label>{element.label}</label>
                  <select value={element.value} onChange={() => { }}>
                    {element.options?.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <button
                    className="delete-button"
                    onClick={(e) => {
                      e.stopPropagation(); // 阻止冒泡，避免触发selectElement
                      handleRemove(element.id);
                    }}
                  >
                    &times;
                  </button>
                </div>
              );
            case 'checkbox':
              return (
                <div className={`form-element special-element ${element.id === selectedElementId ? 'selected' : ''}`} key={element.id} onClick={() => handleElementClick(element.id)}>
                  <input type="checkbox" checked={element.value === 'true'} onChange={() => { }} />
                  <label>
                    {element.label}
                  </label>
                  <button
                    className="delete-button"
                    onClick={(e) => {
                      e.stopPropagation(); // 阻止冒泡，避免触发selectElement
                      handleRemove(element.id);
                    }}
                  >
                    &times;
                  </button>
                </div>
              );
            case 'radio':
              return (
                <div className={`form-element special-element ${element.id === selectedElementId ? 'selected' : ''}`} key={element.id} onClick={() => handleElementClick(element.id)}>
                  <input type="radio" checked={element.value === 'true'} onChange={() => { }} />
                  <label>
                    {element.label}
                  </label>
                  <button
                    className="delete-button"
                    onClick={(e) => {
                      e.stopPropagation(); // 阻止冒泡，避免触发selectElement
                      handleRemove(element.id);
                    }}
                  >
                    &times;
                  </button>
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

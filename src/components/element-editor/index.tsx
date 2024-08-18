import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index';
import { updateElement } from '../../store/formSlice';
import './index.scss'

const ElementEditor: React.FC = () => {
  const dispatch = useDispatch();
  const selectedElementId = useSelector((state: RootState) => state.form.selectedElementId);
  const selectedElement = useSelector((state: RootState) =>
    state.form.elements.find(el => el.id === selectedElementId)
  );

  const [label, setLabel] = useState('');
  const [type, setType] = useState('');
  const [options, setOptions] = useState('');

  useEffect(() => {
    if (selectedElement) {
      setLabel(selectedElement.label);
      setType(selectedElement.type);
      setOptions(selectedElement.options?.join(',') || '');
    }
  }, [selectedElement]);

  const handleUpdate = () => {
    if (selectedElement) {
      const updatedElement = {
        ...selectedElement,
        label,
        type,
        options: type === 'select' ? options.split(',') : undefined,
      };
      dispatch(updateElement(updatedElement));
    }
  };

  if (!selectedElement) {
    return <div>请选择要编辑的表单元素</div>;
  }

  return (
    <div className="element-editor">
      <h3>编辑元素</h3>
      <div className="config-group">
        <label>标签：</label>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>
      <div className="config-group">
        <label>元素类型：</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          disabled // 不允许更改类型
        >
          <option value="text">Text</option>
          <option value="select">Select</option>
          <option value="checkbox">Checkbox</option>
          <option value="radio">Radio</option>
          <option value="textarea">Textarea</option>
        </select>
      </div>
      {(type === 'select') && (
        <div className="config-group">
          <label>Options (逗号分割)：</label>
          <input
            type="text"
            value={options}
            onChange={(e) => setOptions(e.target.value)}
          />
        </div>
      )}
      <button onClick={handleUpdate}>更新元素</button>
    </div>
  );
};

export default ElementEditor;

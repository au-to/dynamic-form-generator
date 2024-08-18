import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addElement } from '../../store/formSlice';
import { v4 as uuidv4 } from 'uuid';
import './index.scss';

const FormConfigurator: React.FC = () => {
  const [type, setType] = useState('text');
  const [label, setLabel] = useState('');
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();

  // 新增元素
  const handleAddElement = () => {
    const newElement = {
      id: uuidv4(),
      type,
      label,
      value: '',
      options
    };

    dispatch(addElement(newElement));
    setLabel('');
    setOptions([]);
  };

  const handleOptions = (e: any) => {
    setOptions(e.target.value.split(',').map((item: any) => item.trim()));
  }

  return (
    <div className='form-configurator'>
      {/* 选择元素类型 */}
      <div className='config-group'>
        <label>元素类型：</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="text">Text</option>
          <option value="select">Select</option>
          <option value="checkbox">Checkbox</option>
          <option value="radio">Radio</option>
          <option value="textarea">Textarea</option>
        </select>
      </div>
      {/* 设置标签内容 */}
      <div className='config-group'>
        <label>标签：</label>
        <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} />
      </div>
      {/* 下拉特殊处理 */}
      {(type === 'select') && (
        <div className='config-group'>
          <label>Options (逗号分隔)：</label>
          <input type="text" onChange={(e) => handleOptions(e)} />
        </div>
      )}
      <button onClick={handleAddElement}>新增元素</button>
    </div>
  );
};

export default FormConfigurator;

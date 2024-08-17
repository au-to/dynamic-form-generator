/**
 * 表单状态管理，包含表单配置和表单数据  
 **/

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 表单元素
interface FormElement {
  id: String,
  type: String,
  label: String,
  value: String,
  placeholder: String,
  required: Boolean,
  options?: Array<String>,
}

// 表单状态
interface FormState {
  elements: FormElement[]
}

// 表单的初始化状态
const initialState: FormState = {
  elements: []
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<FormElement>) => {
      state.elements.push(action.payload)
    },
    removeElement: (state, action: PayloadAction<string>) => {
      state.elements = state.elements.filter(el => el.id !== action.payload)
    },
    updateElement: (state, action: PayloadAction<FormElement>) => {
      const index = state.elements.findIndex(el => el.id === action.payload.id)
      if (index !== -1) {
        state.elements[index] = action.payload
      }
    }
  }
})

export const { addElement, removeElement, updateElement} = formSlice.actions
export default formSlice.reducer
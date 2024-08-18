/**
 * 表单状态管理，包含表单配置和表单数据  
 **/

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 表单元素
interface FormElement {
  id: string,
  type: string,
  label: string,
  value: string,
  options?: Array<string>,
}

// 表单
interface FormState {
  elements: FormElement[],
  selectedElementId?: string | null
}

// 表单的初始化state
const initialState: FormState = {
  elements: [],
  selectedElementId: undefined
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
      // 如果删除的是当前选中的元素，则取消选中
      if (state.selectedElementId === action.payload) {
        state.selectedElementId = null;
      }
    },
    updateElement: (state, action: PayloadAction<FormElement>) => {
      const index = state.elements.findIndex(el => el.id === action.payload.id)
      if (index !== -1) {
        state.elements[index] = action.payload
      }
    },
    selectElement: (state, action: PayloadAction<string>) => {
      state.selectedElementId = action.payload
    }
  }
})

export const { addElement, removeElement, updateElement, selectElement } = formSlice.actions
export default formSlice.reducer
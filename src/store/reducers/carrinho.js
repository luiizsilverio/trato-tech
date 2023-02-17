import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const temItem = state.some(item => item.id === payload);
      if (!temItem) {
        return [...state, {id: payload, quantidade: 1}] // adiciona item no carrinho
      }
      return state.filter(item => item.id !== payload); // remove item do carrinho
    }
  }
})

export const { mudarCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'
import type { IbasketCardForRedux, IbasketRedux } from '../Types'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: IbasketRedux = {
  basket: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IbasketCardForRedux>) => {
      const { id } = action.payload

      const isItemInBasket = state.basket.some((item) => item.id === id)

      if (!isItemInBasket) {
        state.basket = [...state.basket, action.payload]
      }
    },

    deleteItem: (state, action) => {
      const id = action.payload

      state.basket = state.basket.filter(e => e?.id !== id)
    },

    resetBasket: (state) => {
      state.basket = []
    }
  }
})

export const { addToBasket, resetBasket, deleteItem } = basketSlice.actions

export default basketSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import type { IfavoriteRedux, IfavoriteCard } from '../Types'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: IfavoriteRedux = {
  favorite: []
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<IfavoriteCard>) => {
      const itemIndex = state.favorite.findIndex(item => item.id === action.payload.id)

      if (itemIndex !== -1) {
        state.favorite.splice(itemIndex, 1)
      } else {
        state.favorite.push(action.payload)
      }
    },
    resetFavorite: (state) => {
      state.favorite = []
    }
  }
})

export const { addToFavorite, resetFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer

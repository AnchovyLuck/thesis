const { createSlice } = require('@reduxjs/toolkit')

const initialState = []
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, salePrice, imageUrl } = action.payload
      const existingItem = state.find(item => item.id === id)
      if (existingItem) {
        existingItem.qty += 1
      } else {
        state.push({
          id,
          title,
          salePrice,
          qty: 1,
          imageUrl
        })
      }
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload
      return state.filter(item => item.id !== cartId)
    },
    incrementQty: (state, action) => {
      const cartId = action.payload
      const cartItem = state.find(item => item.id === cartId) 
      if (cartItem) {
        cartItem.qty += 1
      }
    },
    decrementQty: (state, action) => {
      const cartId = action.payload
      const cartItem = state.find(item => item.id === cartId) 
      if (cartItem && cartItem.qty > 1) {
        cartItem.qty -= 1
      }
    }
  }
})

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions
export default cartSlice.reducer

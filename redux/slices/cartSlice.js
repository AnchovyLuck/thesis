const { createSlice } = require('@reduxjs/toolkit')

const initialState =
  (typeof window !== 'undefined' && JSON.parse(localStorage.getItem('cart'))) ||
  []
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, salePrice, imageUrl, userId: vendorId } = action.payload
      const existingItem = state.find(item => item.id === id)
      if (existingItem) {
        existingItem.qty += 1
      } else {
        const newItem = { id, title, salePrice, imageUrl, qty: 1, vendorId }
        state.push(newItem)
        if (typeof window !== 'undefined') {
          localStorage.setItem('cart', JSON.stringify([...state]))
        }
      }
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload
      const newState = state.filter(item => item.id !== cartId)
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(newState))
      }
      return newState
    },
    incrementQty: (state, action) => {
      const cartId = action.payload
      const cartItem = state.find(item => item.id === cartId)
      if (cartItem) {
        cartItem.qty += 1
        if (typeof window !== 'undefined') {
          localStorage.setItem('cart', JSON.stringify([...state]))
        }
      }
    },
    decrementQty: (state, action) => {
      const cartId = action.payload
      const cartItem = state.find(item => item.id === cartId)
      if (cartItem && cartItem.qty > 1) {
        cartItem.qty -= 1
        if (typeof window !== 'undefined') {
          localStorage.setItem('cart', JSON.stringify([...state]))
        }
      }
    }
  }
})

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions
export default cartSlice.reducer

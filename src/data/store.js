import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

//this is the store that wraps all the app (index.js), here we are setting its reducers equal to the cart reducers
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
})

export default store
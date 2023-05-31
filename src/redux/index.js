import { configureStore } from '@reduxjs/toolkit'

import theme from './reducers/theme'

export default configureStore({
  reducer: {
    theme 
  },
})
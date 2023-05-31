import { createSlice } from '@reduxjs/toolkit'

const themes = ['light', 'dark'];

export const theme = createSlice({
  name: 'theme',
  initialState: {
    isDark: false,
    theme: 'light'
  },
  reducers: {
    toggleTheme: state => {
      state.isDark = !state.isDark;
      state.theme = themes[Number(state.isDark)];
    },
  }
})

export const { toggleTheme } = theme.actions

export default theme.reducer
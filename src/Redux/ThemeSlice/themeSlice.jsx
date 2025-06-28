import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isDarkMode: false,
  loading: false,
  error: null,
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeStart: (state) => {
      state.loading = true
      state.error = null
    },
    toggleThemeSuccess: (state) => {
      state.isDarkMode = !state.isDarkMode
      state.loading = false
      state.error = null
    },
    setTheme: (state, action) => {
      state.isDarkMode = action.payload
      state.loading = false
      state.error = null
    },
    themeError: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { toggleThemeStart, toggleThemeSuccess, setTheme, themeError } = themeSlice.actions
export default themeSlice.reducer

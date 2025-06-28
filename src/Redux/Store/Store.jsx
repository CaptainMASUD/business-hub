import { configureStore, combineReducers } from "@reduxjs/toolkit"
import userReducer from "../UserSlice/userSlice"
import themeReducer from "../ThemeSlice/themeSlice"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/es/persistStore"

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Properly create and export the persistor instance
export const persistor = persistStore(store)

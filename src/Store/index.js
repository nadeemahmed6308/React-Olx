import { configureStore } from '@reduxjs/toolkit'
//import userSlice from './userSlice'
//import cartSlice from './cartSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import rootReducer from './combineReducer';

const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    //reducer: userSlice.reducer,
    // Cartreducer: cartSlice.reducer
  })
  const persistor = persistStore(store)

  export { store, persistor }

//Redux:
//Ek store room hai, jisme se her component data le sakta hai.
//A global state management tool

//Redux vs LocalStorage:
//localStorage.getItem('theme') => non realtime
//redux => realtime

//Realtime: Data me changes dekhne ke lye refresh na karna pare
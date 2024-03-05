import cartSlice from './cartSlice';
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    cartReducer: cartSlice.reducer
})
export default rootReducer;

import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import paymentReducer from "./paymentReducer";

export default combineReducers({
  errors: errorReducer,
  payment: paymentReducer
  
});



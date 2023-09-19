import { combineReducers } from "redux";
import cartData from  './Reducer'
import productData from "./Product/ProductReducer";
import whishData from "./whishReducer";

export default combineReducers({cartData, productData, whishData})
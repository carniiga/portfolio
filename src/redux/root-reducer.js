import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import toggleReducer from "./toggleSwichReducer/toggleSwichReducer";

const persistConfig = {
    key : "root",
    storage,
    whitelist : [],

};

const rootReducer = combineReducers({
    toggleReducer : toggleReducer,
})
export default persistReducer(persistConfig , rootReducer)
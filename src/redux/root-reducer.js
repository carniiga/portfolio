import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { toggleMenuReducer } from "./toggleMenuReducer/toggleMenuReducer";
const persistConfig = {
    key : "root",
    storage,
    whitelist : [],

};

const rootReducer = combineReducers({
    toggleMenuReducer,
})
export default persistReducer(persistConfig , rootReducer)
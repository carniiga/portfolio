import { createStore  , applyMiddleware} from "redux";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import  {persistStore} from "redux-persist"


const initialState = {};

const middleWare = [];

export const store = createStore(

    rootReducer ,
    initialState ,
    composeWithDevTools(applyMiddleware(...middleWare))
)
export const  persistor  = persistStore(store)
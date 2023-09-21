import { TOGGLE_SWICH } from "./toggleReducer-actions";

const initialState = {
    clicked : false,
}


 const toggleReducer = (state = initialState , action) => {
    switch(action.type){
        case TOGGLE_SWICH :
            return {
                ...state ,
                clicked : action.payload !== state.clicked ? action.payload : !state.clicked
                
            }
        

        default :
        return state ;
    }
}
export default toggleReducer;
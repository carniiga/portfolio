

const initialState = {
    menuIsHidden : true,
}


export const toggleMenuReducer = (state = initialState , action) => {
    switch(action.type){
        case "TOGGLE_MENU" : {
          return {
            ...state , 
            menuIsHidden : !state.menuIsHidden
          }
           
        }
        default : return state
    }
}
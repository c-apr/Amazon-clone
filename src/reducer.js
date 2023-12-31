export const initialState ={
    basket: [],
    // user: null,
};

const reducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TO BASKET':
            return{
                ...state,
                basket:[...state.basket, action.item],
            };

        default:
            return state;
    }
};

export default reducer;
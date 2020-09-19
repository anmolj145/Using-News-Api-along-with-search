import * as actionTypes from '../action/actionType';

const initialState = {
    data : []
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case actionTypes.GET_NEWS_DATA:{
            return{
                ...state,
                data : action.payload
            }
        }
        default:
            return state;
    }
}
export default reducer;
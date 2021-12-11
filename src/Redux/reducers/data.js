import { UPDATE_DATA } from '../actions/data';

const initialState = {
    data : {},
};

const dataReducer = (state= initialState, {type,payload}) => {
    switch ( type ) {
    

        case UPDATE_DATA : 
            return {
                ...state,
                data : payload
            }
    
        default:
            return state
    }
}

export default dataReducer;
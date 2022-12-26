import {CHANGE_FILTER_FIELD, RESET_FILTER_FIELD} from '../actions/actionTypes';

const initialState = {
    filter: '',
};

function serviceFilterReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_FILTER_FIELD:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        case RESET_FILTER_FIELD:
            return {...initialState};
        default:
            return state;
    }
}

export default serviceFilterReducer;
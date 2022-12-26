import {CHANGE_SERVICE_FIELD, RESET_SERVICE_FIELD} from '../actions/actionTypes';

const initialState = {
    id: 'new',
    name: '',
    price: '',
};

function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        case RESET_SERVICE_FIELD:
            return {...initialState};
        default:
            return state;
    }
};

serviceAddReducer.propTypes = {

};

export default serviceAddReducer;
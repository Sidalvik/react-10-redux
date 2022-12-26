import {nanoid} from 'nanoid';
import {ADD_SERVICE, EDIT_SERVICE, REMOVE_SERVICE} from '../actions/actionTypes';

const initialState = [
    {id: nanoid(), name: 'Замена стекла', price: 21000},
    {id: nanoid(), name: 'Замена дисплея', price: 25000},
    {id: nanoid(), name: 'Замена аккумулятора', price: 7500},
];

function serviceListReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_SERVICE:
            {const {name, price} = action.payload;
            return [...state, {id: nanoid(), name, price: Number(price)}];}
        case EDIT_SERVICE:
            {const {id, name, price} = action.payload;
            return state.map((servise) => servise.id === id ? {id, name, price: Number.parseFloat(price)}: servise);}
        case REMOVE_SERVICE:
            {const {id} = action.payload;
            return state.filter((service) => service.id !== id);}
        default:
            return state;
    }
}

export default serviceListReducer;
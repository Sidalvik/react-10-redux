import { 
    ADD_SERVICE, 
    REMOVE_SERVICE, 
    EDIT_SERVICE, 
    CHANGE_SERVICE_FIELD, 
    CHANGE_FILTER_FIELD, 
    RESET_SERVICE_FIELD, 
    RESET_FILTER_FIELD,
} from './actionTypes';

export function addService(name, price) {
    return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
    return {type: REMOVE_SERVICE, payload: {id}};
}

export function editService(id, name, price) {
    return {type: EDIT_SERVICE, payload: {id, name, price}};
}

export function changeServiceField(name, value) {
    return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function resetServiceField() {
    return {type: RESET_SERVICE_FIELD, payload: {}}
}

export function changeFilterField(name, value) {
    return {type: CHANGE_FILTER_FIELD, payload: {name, value}}
}

export function resetFilterField() {
    return {type: RESET_FILTER_FIELD, payload: {}}
}

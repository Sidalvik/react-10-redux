import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, editService, resetServiceField} from '../../actions/actionCreators';
import './ServiceAdd.css';

function ServiceAdd(props) {
    const newitem = 'new';
    const dispatch = useDispatch();
    const item = useSelector(state => state.serviceAdd);

    const handleChange = (event) => {
        const {name, value} = event.target;

        dispatch(changeServiceField(name, (event.target.name ==='price') ? value.replaceAll(/[^\d.,]/g,'') : value));
    };  //  handleChange

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!item.name || !item.price) return;

        if (item.id === newitem) {
            dispatch(addService(item.name, item.price));
        } else {
            dispatch(editService(item.id, item.name, item.price));
        } 
        dispatch(resetServiceField());
    };  //  handleSubmit
    
    const handleReset = (event) => {
        event.preventDefault();
        dispatch(resetServiceField());
    };  //  handleReset


  return (
    <form className='service-add' onSubmit={handleSubmit}>
        {item.id === newitem ? <h2>Добавить новый сервис</h2> : <h2>Изменить сервис</h2>}
        <input type="hidden" name='id' value={item.id} id='service-id__input' readOnly/>
        <label htmlFor="service-name__input">Сервис</label>
        <input type="text" onChange={handleChange} name='name' value={item.name} id='service-name__input'/>

        <label htmlFor="service-price__input">Стоимость</label>
        <input type="text" onChange={handleChange} name='price' value={item.price} id='service-price__input' />

        <button type="submit">Save</button>
        <button type="reset" onClick={handleReset}>Cancel</button>
    </form>
  )
}

ServiceAdd.propTypes = {
    props: PropTypes.any,
}

export default ServiceAdd

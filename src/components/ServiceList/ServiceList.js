import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, removeService, resetServiceField} from '../../actions/actionCreators';
import './ServiceList.css';

function ServiceList(props) {
    const dispatch = useDispatch();
    const items = useSelector(state => state.serviceList);
    const editItem = useSelector(state => state.serviceAdd);
    const {filter} = useSelector(state => state.serviceFilter);
    
    const handleRemove = (id) => {
        dispatch(removeService(id));
        if (editItem.id === id) {
            dispatch(resetServiceField());
        }
    }

    const handleEdit = (item) => {
        dispatch(changeServiceField('id', item.id));
        dispatch(changeServiceField('name', item.name));
        dispatch(changeServiceField('price', item.price));
    }

    const filterFun = (str, subStr) => {
        return str.toLocaleUpperCase().includes(subStr.toLocaleUpperCase());
    }

    const list = (filter ? items.filter((item) => filterFun(item.name, filter)) : items)
        .map((item) => (
            <li className={`service-list__item ${editItem.id === item.id ? ' active' : '' }`} key={item.id}>
                <span className='service-name'>{item.name}</span><span className='service-price'>{item.price}</span>
                <button className='btn btn-edit' onClick={() => handleEdit(item)}>&#128393;</button>
                <button className='btn btn-remove' onClick={() => handleRemove(item.id)}>&#10005;</button>
            </li>
            )
        );

  return (
    <>
        <h2>Список сервисов</h2>
        <ul className='service-list'>
            {(list?.length > 0 ? list : filter ? <p>Ничего не найдено</p>: <p>Список пуст</p>)}
        </ul>
    </>
  )
}

ServiceList.propTypes = {
    props: PropTypes.any,
}

export default ServiceList

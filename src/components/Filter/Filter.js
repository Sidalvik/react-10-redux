import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {changeFilterField, resetFilterField} from '../../actions/actionCreators';
import './Filter.css';

function Filter(props) {
  const {filter} = useSelector((state) => state.serviceFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const {name, value} = event.target;

    dispatch(changeFilterField(name, (event.target.name ==='price') ? value.replaceAll(/[^\d.,]/g,'') : value));
  };  //  handleChange

  const handleReset = () => {
    dispatch(resetFilterField());
  };  //  handleReset
  
  return (
    <form className='filter'>
        <label htmlFor="filter__input">Фильтр по названию</label>
        <input type="text" id="filter__input" className='filter__inpu' name='filter' onChange={handleChange} value={filter}/>
        <button type='button' onClick={handleReset}>Очистить</button>
    </form>
  )
}

Filter.propTypes = {
    props: PropTypes.any,
}

export default Filter

import React, { useReducer, useEffect } from 'react';
import { validate } from '../validation/validator';
import './Input.css';

const inputReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE':
        return {
          ...state,
          value: action.val,
          isValid: validate(action.val, action.validators)
        };
      case 'TOUCH': {
        return {
          ...state,
          isTouched: true
        }
      }
      default:
        return state;
    }
  };

const Select = (props)=>{
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.value || '',
        isTouched: false,
        isValid: props.value?true:false
      });
    
      const { id, onChange } = props;
      const { value, isValid } = inputState;
    
      useEffect(() => {
        onChange(id, value, isValid)
      }, [id, value, isValid, onChange]);
    
      const changeHandler = event => {
        dispatch({
          type: 'CHANGE',
          val: event.target.value,
          validators: props.validators
        });
      };
    
      const touchHandler = () => {
        dispatch({
          type: 'TOUCH'
        });
      };
   
return(
<p className="input_p">
  <label>{props.label}</label>
    <select type={props.type} onChange={changeHandler}   onBlur={touchHandler} className="input_input"   name={props.id} disabled={props.disabled} defaultValue={props.value}>
        {props.children}
        
        </select> 
  
</p>
);



}

export default Select;
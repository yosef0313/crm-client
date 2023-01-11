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

const Input = (props)=>{
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
 <label className={inputState.value === '' &&'input_label'}>{props.label}</label>
    <input type={props.type} onChange={changeHandler} placeholder={props.label}   onBlur={touchHandler} value={inputState.value} className="input_input"   name={props.id} disabled={props.disabled} />  
  
</p>
);



}

export default Input;
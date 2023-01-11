import React , {useState} from "react";

import Button from "../../share/form/Button";
import Input from "../../share/form/Input";
import { useForm } from "../../share/form/form-hook";
import { isValidIsraeliID } from "../../share/validation/validator";
import './IsCustomer.css';
const IsCustomer = props=>{
 // const auth = useContext(AuthContext);

    const [formState, inputHandler] = useForm(
        {
          ID: {
            value: '',
            isValid: false
          },
          email: {
            value: '',
            isValid: false
          },
          phone: {
            value: '',
            isValid: false
          }
        },
        false
      );

      const [errorMessage , setErrorMessage] = useState('');

const submitHandle =event=>{
    event.preventDefault();
    let valid = true;
    const {ID, email,phone} = formState.inputs;
    if(!ID.value && !email.value && !phone.value ){
      valid = false;
      setErrorMessage('חובה למלא לפחות שדה אחד');
    }

    if( !isValidIsraeliID(ID.value) && ID.value.length > 1){
      valid = false;
      setErrorMessage('תעודת זהות לא תקינה');
    }

    if( !/^\d+$/.test(phone.value) && phone.value.length > 1){
      valid = false;
      setErrorMessage('מספר פלאפון לא תקין');
    }
    if( !/^\S+@\S+\.\S+$/.test(email.value) && email.value.length > 1){
      valid = false;
      setErrorMessage('כתובת אימייל לא תקינה');
    }
    console.log(formState.inputs);
    props.customerDetails(formState.inputs);
    if(valid){

      props.next();
    }
   
}
return(

    <form className="form" onSubmit={submitHandle}>
      <h2>זיהוי לקוח</h2>
        <Input type={'text'} label={'ת.ז.'} onChange={inputHandler} id="ID"    validators={[]}/>
        <Input type={'text'} label={'אימייל'}  onChange={inputHandler}  id="email"   validators={[]}/>
        <Input type={'text'} label={'מספר טלפון'} onChange={inputHandler}  id="phone"   validators={[]} />
        <label className="isCustomer-errorMessage">{errorMessage}</label>
        <Button value={'בדיקה'} type={'submit'}   />
    </form>

)
}

export default IsCustomer;
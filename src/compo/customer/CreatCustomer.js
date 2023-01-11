import React, { useState } from "react";

import Input from "../../share/form/Input";
import { useForm } from "../../share/form/form-hook";
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_NUNBER, VALIDATOR_ISRAELI_ID } from "../../share/validation/validator";
import Button from "../../share/form/Button";
import PurchaseType from "./comp/PurchaseType";
import './CreatCustomer.css';
import CustomerAddress from "./comp/CustomerAddress";


const CreatCustomer = props=>{
    const [formState, inputHandler] = useForm(
        {
          ID: {
            value: '',
            isValid: false
          },
          first_name: {
            value: '',
            isValid: false
          },
          last_name: {
            value: '',
            isValid: false
          },
          phone: {
            value: '',
            isValid: false
          },
          email: {
            value: '',
            isValid: false
          }, 
          city: {
            value: '',
            isValid: false
          }, 
          street: {
            value: '',
            isValid: false
          },
          floor: {
            value: '',
            isValid: false
          },
          apartment: {
            value: '',
            isValid: false
          },
          char: {
            value: 'אות',
            isValid: true
          }
        },
        false
      );

      const [formStateI, inputHandlerI]= useForm(
        {
       
          cityI: {
            value: '',
            isValid: false
          }, 
          streetI: {
            value: '',
            isValid: false
          },
          floorI: {
            value: '',
            isValid: false
          },
          apartmentI: {
            value: '',
            isValid: false
          },
          charI: {
            value: 'אות',
            isValid: true
          }
        },
        false
      );


      const [formStateLine, inputHandlerLine]= useForm({
        lineCode: {
          value: '',
          isValid: false
        },
        creditCardLastNumber :{
          value: '',
          isValid: false
        }
      },false);
        const [CustomerAddressNotMatch , setCustomerAddressNotMatch] = useState(false);
        

const submitHandle = event=>{
    event.preventDefault();
    console.log(formState.inputs);
    props.setInfo(formState.inputs);
    props.next();
}
return (

    <form onSubmit={submitHandle} className='CreatCustomerDetails-form'>

       { <div className="CreatCustomerDetails-option"><PurchaseType orderTypeHandel={props.customerTypeHandle} orderType={props.customerType}   /></div>}
       <h3  className="CreatCustomerDetails-h3">פרטי הלקוח</h3> 
       <hr />
       <div className="CreatCustomerDetails-div">
      
        <Input type={'number'} label={'ת.ז.'} onChange={inputHandler} errorText={''} value={props.customer.ID !== undefined?props.customer.ID.value:''} disabled={props.customer.ID.value}  validators={[VALIDATOR_ISRAELI_ID()]} id={'ID'} />
        <Input type={'text'} label={'שם פרטי'}  onChange={inputHandler} errorText={''}  value={props.customer.first_name!== undefined?props.customer.first_name.value:''}  validators={[VALIDATOR_REQUIRE()]} id={'first_name'} />
        <Input type={'text'} label={'שם משפחה'}  onChange={inputHandler} errorText={''}  value={props.customer.last_name!== undefined?props.customer.last_name.value:''}   validators={[VALIDATOR_REQUIRE()]} id={'last_name'} />
        <Input type={'text'} label={'מספר פלאפון'}  onChange={inputHandler} errorText={''} value={props.customer.phone!== undefined?props.customer.phone.value:''}  disabled={props.customer.phone.value} validators={[VALIDATOR_NUNBER()]} id={'phone'} />
        <Input type={'text'} label={'אימייל'}  onChange={inputHandler} errorText={''} value={props.customer.email!== undefined?props.customer.email.value:''}  disabled={props.customer.email.value} validators={[VALIDATOR_EMAIL()]} id={'email'} />
        </div>
        
        <h3  className="CreatCustomerDetails-h3"  >כתובת הלקוח</h3>
        <hr />
        <CustomerAddress inputHandler={inputHandler} customer={formState.inputs} className={'CreatCustomerDetails-div'}  />
         <label className="CreatCustomerDetails-chackLabel"><input type="checkbox" onClick={()=>{setCustomerAddressNotMatch(prev=> !prev)}}   /> כתובת ההתקנה שונה מכתובת הלקוח </label>
         {!CustomerAddressNotMatch&&<hr />}
       {CustomerAddressNotMatch&& <><h3  className="CreatCustomerDetails-h3">כתובת התקנה</h3>
       <hr/>
        <CustomerAddress inputHandler={inputHandlerI} customer={formStateI.inputs} className={'CreatCustomerDetails-div'}  type={1}/>
     
       </>}
       {props.customerType&&<>
       <h3>פרטים נוספים</h3>
       <hr />
       <div className="CreatCustomerDetails-option">
      <Input type={'text'} label={'קוד קו'}  onChange={inputHandlerLine} errorText={''} value={''} id={'lineCode'} validators={[]}  />
      {props.customerType === 'bezek' &&<Input type={'text'} label={'4 ספרות אחרונות של כרטיס אשראי'}  onChange={inputHandlerLine} errorText={''} value={''} validators={[]} id={'creditCardLastNumber'} />}
      </div></>}
      <div className="CreatCustomerDetails-button">
       <Button value={'בדיקת התכנות'} type={'submit'} disabled={CustomerAddressNotMatch?!formState.isValid || !formStateI.isValid:!formState.isValid}  />
       <button onClick={props.back}>חזרה</button>
      </div>
    </form>


);


}


export default CreatCustomer;
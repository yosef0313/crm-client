import React from "react";
import { VALIDATOR_REQUIRE } from "../../../share/validation/validator";

import Input from "../../../share/form/Input";




const CustomerAddress = props=>{
    let city = 'city';
    let street = 'street';
    let house_num = 'house_num';
    let floor = 'floor';
    let apartment = 'apartment';
    let char = 'char';

    if(props.type === 1){
         city = 'cityI';
        street = 'streetI';
        house_num = 'house_numI';
         floor = 'floorI';
        apartment = 'apartmentI';
         char = 'charI';
    }



    return(<>
       <div className={props.className}>
            <Input type={'text'} label={'עיר'}  onChange={props.inputHandler} errorText={''} value={props.customer.city!== undefined?props.customer.city.value:''}  validators={[VALIDATOR_REQUIRE()]}  id={city} />
            <Input type={'text'} label={'רחוב'}  onChange={props.inputHandler} errorText={''} value={props.customer.street!== undefined?props.customer.street.value:''}   validators={[VALIDATOR_REQUIRE()]} id={street} />
            <Input type={'text'} label={'מספר בית'}  onChange={props.inputHandler} errorText={''} value={props.customer.house_num!== undefined?props.customer.house_num.value:''}   validators={[VALIDATOR_REQUIRE()]} id={house_num} />
            <Input type={'text'} label={'קומה'}  onChange={props.inputHandler} errorText={''} value={props.customer.floor!== undefined?props.customer.floor.value:''}   validators={[VALIDATOR_REQUIRE()]} id={floor} />
            <Input type={'text'} label={'דירה'}  onChange={props.inputHandler} errorText={''} value={props.customer.apartment!== undefined?props.customer.apartment.value:''}   validators={[VALIDATOR_REQUIRE()]} id={apartment} />
            <Input type={'text'} label={'אות'}  onChange={props.inputHandler} errorText={''} value={props.customer.char!== undefined?props.customer.char.value:''}   validators={[]} id={char} />


        </div>
        </>
    );

}


export default CustomerAddress;
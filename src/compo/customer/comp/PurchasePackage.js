import React from "react";
import Button from "../../../share/form/Button";
import { useForm } from "../../../share/form/form-hook";
import Input from "../../../share/form/Input";
import Select from "../../../share/form/Select";

const PurchasePackage = props=>{


    const [formState, inputHandler] = useForm(
        {
            package: {
            value: '',
            isValid: false
          },
          filter: {
            value: '',
            isValid: false
          },
          ip: {
            value: '',
            isValid: false
          },
          contactPhone: {
            value: '',
            isValid: false
          }
        },
        false
      );
        const SubmitHandle = event=>{
            event.preventDefault();
            props.setPInfo(formState.inputs);
            props.submit(formState.inputs);
        }

    return<form onSubmit={SubmitHandle}>
    
    <div className="Purchase-p Purchase-p3">
    <Select  value='' onChange={inputHandler} id={'package'} validators={[]} label={'בחירת חבילה'} >
        <option value='' disabled>בחר חבילה</option>
        <option value="p500">p500</option>
        <option value="p1000">p1000</option>
    </Select>
    </div>
    <div className="Purchase-p Purchase-p8">
    <Select onChange={inputHandler} id="filter" validators={[]} value="false" label={'סינון'}>
        <option value='false'>ללא סינון תכנים</option>
        <option value='true'>כולל סינון תכנים</option>
    </Select>
    </div>
    <div className="Purchase-p Purchase-p9">
    <Select onChange={inputHandler} id={"ip"} validators={[]} value="false"  label={'ip'}>
        <option value="true">ip קבוע</option>
        <option value="false">ip לא קבוע</option>
    </Select>
    </div>
    <div className=" Purchase-p Purchase-p10" >
    <Input type={'txet'} label={"מספר פלאפון לתיאום"} id={'contactPhone'}  onChange={inputHandler} validators={[]} />
    </div>
    <Button type="submit" value="המשך" disabled={!formState.isValid} />
    <button onClick={props.back}>חזרה</button>
    </form>;
}

export default PurchasePackage;
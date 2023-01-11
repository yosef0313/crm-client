import React from "react";
import Button from "../../../share/form/Button";
import Input from "../../../share/form/Input";
import Select from "../../../share/form/Select";
import { useForm } from "../../../share/form/form-hook";
import { VALIDATOR_MAXLENGTH, VALIDATOR_REQUIRE , VALIDATOR_NUNBER} from "../../../share/validation/validator";


const PurchaseCreditCard = props=>{

    const [formState, inputHandler] = useForm(
        {
            cardNumber: {
            value: '',
            isValid: false
          },
          year: {
            value: '',
            isValid: false
          },
          month: {
            value: '',
            isValid: false
          },
          cvv: {
            value: '',
            isValid: false
          }
        },
        false
      );

      const submitHandle = event=>{
        event.preventDefault();
        props.submit(formState.inputs);
      }

    return<form  onSubmit={submitHandle}>
    <div className="Purchase-p Purchase-p4">
    <Input type='txet' id={'cardNumber'}   onChange={inputHandler}  validators={[VALIDATOR_REQUIRE(),VALIDATOR_NUNBER()]} label="מספר כרטיס"/>
    </div>

    <div className="Purchase-p Purchase-p5">
    <Select  value='2023' id={"year"} validators={[]} onChange={inputHandler} label={'תוקף כרטיס'} >
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
        <option value="2029">2029</option>
        <option value="2030">2030</option>
        <option value="2031">2031</option>
        <option value="2032">2032</option>
        <option value="2033">2033</option>
        <option value="2034">2034</option>
    </Select>
    </div>
    <div className="Purchase-p Purchase-p6">
    <Select value='01' id={"month"} validators={[]} onChange={inputHandler} label={'תוקף כרטיס'}>
        <option value="01">1</option>
        <option value="02">2</option>
        <option value="03">3</option>
        <option value="04">4</option>
        <option value="05">5</option>
        <option value="06">6</option>
        <option value="07">7</option>
        <option value="08">8</option>
        <option value="09">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </Select>
    </div>
    <div className="Purchase-p Purchase-p7">
    <Input type='txet' label="cvv" validators={[VALIDATOR_MAXLENGTH(4)]} onChange={inputHandler}  id={"cvv"} />
    </div>
    
    <Button type={"submit"} value={"צור הזמנה"}  disabled={!formState.isValid} />
    </form>
}

export default PurchaseCreditCard;
import React from "react";
import axios from "axios";

import Card from "../share/card/Card";
import Button from "../share/form/Button";
import Input from "../share/form/Input";
import { useForm } from "../share/form/form-hook";
import {VALIDATOR_REQUIRE} from "../share/validation/validator";

const Login = props=>{
    const [formState, inputHandler] = useForm(
        {
          user: {
            value: '',
            isValid: false
          },
          password: {
            value: '',
            isValid: false
          }
        },
        false
      );
const submitHandle =event=>{
    event.preventDefault();
   let data ={
    user:formState.inputs.user.value,
    password:formState.inputs.password.value
   }
    axios.post('http://localhost:5000/api/login',data).then(res=>{
      console.log(res.data.isLogin);
      if(res.data.isLogin){
        props.login();
      }
  
    })

}
return(
    <Card>
    <form className="form" onSubmit={submitHandle}>
        <Input type={'text'} label={'user name'} onChange={inputHandler} errorText={'user'}  validators={[VALIDATOR_REQUIRE()]} id={'user'} />
        <Input type={'password'} label={'password'}  onChange={inputHandler} errorText={'password'}  validators={[VALIDATOR_REQUIRE()]} id={'password'} />
        <Button value={'login'} type={'submit'} disabled={!formState.isValid} />
    </form>
    </Card>
)
}

export default Login;
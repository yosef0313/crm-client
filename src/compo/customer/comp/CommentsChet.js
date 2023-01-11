import React from "react";
import Input from "../../../share/form/Input";
import { useForm } from "../../../share/form/form-hook";
import Button from "../../../share/form/Button";
import './CommentChet.css';
import { VALIDATOR_REQUIRE } from "../../../share/validation/validator";
import icon from "../../../img/userIcon.png";

const CommentsChet = props=>{

    const [formState, inputHandler] = useForm(
        {
          
        message: {
            value: '',
            isValid: false
          }
        },
        false
      );

      const submitHandle = event=>{
        event.preventDefault();
        
        console.log(formState.inputs);
       

      }


return<>
<div className="CommentsChet">
    <div className="CommentsChet_comment">
        <div className="CommentsChet_comment-user">
            <img src={icon} className="CommentsChet_comment-img" />
            <p>שם המשתמש</p>
        </div>
        <div className="CommentsChet_comment-text">הערה שכתב אותו משתמש
        <br/>
         <br/>
        <p>10/01/23 10:30</p>
        </div>
     
    </div>
   


</div>
<div className="CommentsChet_input">
    <form className="CommentsChet_form" onSubmit={submitHandle}>
      <Input onChange={inputHandler} value="" label="שלח הערה חדשה" validators={[VALIDATOR_REQUIRE()]}  id={'message'}  />
      <Button value="שלח" type={'submit'} disabled={!formState.isValid} />
    </form>
  

</div>
</>
}

export default CommentsChet;
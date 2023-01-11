import React from "react";
import './Button.css'

const Button = props=>{

return(
    <p>
        <button type={props.type} disabled={props.disabled} className={props.disabled?'btn_disabled':''}>{props.value}</button>
    </p>
);


}

export default Button;
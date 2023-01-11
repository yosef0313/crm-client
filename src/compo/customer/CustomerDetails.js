import React, { useState } from "react";
import Button from "../../share/form/Button";
import Input from "../../share/form/Input";
import Select from "../../share/form/Select";
import CommentsChet from "./comp/CommentsChet";
import { useForm } from "../../share/form/form-hook";
import './CustomerDetails.css';
import { VALIDATOR_EMAIL, VALIDATOR_ISRAELI_ID, VALIDATOR_REQUIRE } from "../../share/validation/validator";

const CustomerDetails=props=>{
const [TabOpen , setTabOpen] = useState(0);
const changeTab = (number)=>{
    setTabOpen(number);
}


return(   <div className="customerDetails-div">
    <h2>שם הלקוח/ה {props.tempInfo.first_name.value  } {props.tempInfo.last_name.value}</h2>
    <div>
        <div className={TabOpen === 0?'customerDetails_tab customerDetails_tab-active':'customerDetails_tab' } onClick={()=>{changeTab(0)}}>פרטי לקוח</div>
        <div className={TabOpen === 1?'customerDetails_tab customerDetails_tab-active':'customerDetails_tab' } onClick={()=>{changeTab(1)}}>שירותים</div>
         <div className={TabOpen === 2?'customerDetails_tab customerDetails_tab-active':'customerDetails_tab' } onClick={()=>{changeTab(2)}}>תשלומים</div>
         <div className={TabOpen === 3?'customerDetails_tab customerDetails_tab-active':'customerDetails_tab' } onClick={()=>{changeTab(3)}}>הערות</div>
        
    </div>
    <div className="customerDetails_box">
   {TabOpen===0&& <CustomerInfo  props={props} />}
   {TabOpen===1&& <ProductsInfo  props={props} />}
   {TabOpen===3&& <CommentsChet  props={props} />}
    </div>

    </div>
)

}


const ProductsInfo = props =>{

    return <>
        

    <table className="Customer-product-table">
        <thead>
        <tr>
            
            <th>מוצר</th>
            <th>כתובת</th>
            <th>קו קוד</th>
            <th>פעולות נוספות</th>

  
        </tr>


          
            
       
        </thead>
        <tbody>
        <tr className="Customer-product-table-tr">
                <td>{props.props.tempPInfo.package.value}</td>
                <td>{props.props.tempInfo.city.value},{props.props.tempInfo.street.value},{props.props.tempInfo.house_num.value}</td>
                <td>{props.props.tempPInfo.contactPhone.value}</td>
                <td><select defaultValue={''} >
                    <option disabled value={''}>בחר פעולה</option>
                    <option value={'0'}>שינוי חבילה</option>
                    <option value={'1'}>שינוי כתובת</option>
                    <option value={'2'}>נתק</option>
                    </select></td>
            </tr>
        </tbody>
    </table>
    <a href="" className="Customer-new-product">רכישת מוצר חדש</a>
</>
}

const CustomerInfo = props=>{
    const [pageType , setPageType] = useState(0);

    const [formStateLine, inputHandler]= useForm({
        lineCode: {
          value: '',
          isValid: false
        },
        creditCardLastNumber :{
          value: '',
          isValid: false
        }
      },false);

        const changeToEdit = event=>{
            event.preventDefault();
            setPageType(1);
        }
        
        const submitHandler = event=>{
            event.preventDefault();
            setPageType(0);
        }


    if(pageType === 0){
        return<div className="customerDetails-info">
        <div className="">
            <h4>פרטים אישיים</h4>
        <p>ת.ז. : {props.props.tempInfo.ID.value}</p>
        <p>שם פרטי : {props.props.tempInfo.first_name.value}</p>
        <p>שם משפחה: {props.props.tempInfo.last_name.value}</p>
        </div>
        <div className="">
        <h4>כתובת</h4>
        <p>עיר: {props.props.tempInfo.city.value}</p>
        <p>רחוב: {props.props.tempInfo.street.value}</p>
        <p>מספר בית: {props.props.tempInfo.house_num.value}</p>
        <p>דירה: {props.props.tempInfo.apartment.value}</p>
        </div>
        <div className="">
        <h4>פרטי התקשרות</h4>
        <p>פלאפון: {props.props.tempInfo.phone.value}</p>
        <p>איימיל: {props.props.tempInfo.email.value}</p>

        </div>
        <div className="">
            <form onSubmit={changeToEdit} >
            <Button type="submit" value="ערוך פרטים" />
            </form>
           
        </div>
    </div>
    }else{
        return<div className="customerDetails-info">
            <form onSubmit={submitHandler}>
        <div className="">
            <h4>פרטים אישיים</h4>
        <div> <Input type={'text'} label={'ת.ז.'} onChange={inputHandler} errorText={''} value={props.props.tempInfo.ID.value} disabled={true}  validators={[VALIDATOR_ISRAELI_ID()]} id={'ID'} /></div>
        <div> <Input type={'text'} label={'שם פרטי'} onChange={inputHandler} errorText={''} value={props.props.tempInfo.first_name.value}   validators={[VALIDATOR_REQUIRE()]} id={'first_name'} /></div>
        <div> <Input type={'text'} label={'שם משפחה'} onChange={inputHandler} errorText={''} value={props.props.tempInfo.last_name.value}   validators={[VALIDATOR_REQUIRE()]} id={'last_name'} /></div>

        </div>
        <div className="">
        <h4>כתובת</h4>
        <div> <Input type={'text'} label={'עיר'} onChange={inputHandler} errorText={''} value={props.props.tempInfo.city.value}   validators={[VALIDATOR_REQUIRE()]} id={'city'} /></div>
        <div> <Input type={'text'} label={'רחוב'} onChange={inputHandler} errorText={''} value={props.props.tempInfo.street.value}   validators={[VALIDATOR_REQUIRE()]} id={'street'} /></div>
        <div> <Input type={'text'} label={'מספר בית'} onChange={inputHandler} errorText={''} value={props.props.tempInfo.house_num.value}   validators={[VALIDATOR_REQUIRE()]} id={'house_num'} /></div>
        <div> <Input type={'text'} label={'מספר דירה'} onChange={inputHandler} errorText={''} value={props.props.tempInfo.apartment.value}   validators={[VALIDATOR_REQUIRE()]} id={'apartment'} /></div>
        </div>
        <div className="">
        <h4>פרטי התקשרות</h4>
        <div> <Input type={'text'} label={'פלאפון'} onChange={inputHandler} errorText={''} value={props.props.tempInfo.phone.value}   validators={[VALIDATOR_REQUIRE()]} id={'phone'} /></div>
        <div> <Input type={'text'} label={'איימיל'} onChange={inputHandler} errorText={''} value={props.props.tempInfo.email.value}   validators={[VALIDATOR_EMAIL()]} id={'email'} /></div>
     

        </div>
        <div className="">
            <Button type="submit" value="עדכן" />
        </div>
        </form>
    </div>
    }
    
}

export default CustomerDetails;
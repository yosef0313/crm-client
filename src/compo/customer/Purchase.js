import React,{useState} from "react";

import PurchaseCreditCard from "./comp/PurchaseCreditCard";
import PurchasePackage from "./comp/PurchasePackage";
import PurchaseSummery from "./comp/PurchaseSummery";
import PurchaseType from "./comp/PurchaseType";

import './Purchase.css';


const Purchase = props=>{

const [purchaseStep , setpurchaseStep] = useState(0);
const [packageData, setPackageData] = useState();
const [creditCard, setCreditCard] = useState();
    
const [orderType , setOrederType] = useState('');

const nextStep = ()=>{

    
    setpurchaseStep(prev=>prev+=1);
}


const orderTypeHandel=event=>{
    setOrederType(event.target.value);

}

const packageDataHandle=event=>{
    setPackageData(prev =>{

    });
    console.log(packageData);
}


const packageSubmitHandle = (item)=>{
   
   setPackageData(item);
   nextStep();
}

const CreditCardSubmitHandle = (item)=>{
    setCreditCard(item);

    const dataJson ={
        item,
        packageData

    };
   
   props.next();

}

return(<>
<h1>ביצוע הזמנה</h1>
<div className="Purchase">
    <div className="Purchase-summery">
        <PurchaseSummery data={packageData} />
    </div>

    <div className="Purchase-form">
       
        {purchaseStep===0&&<PurchasePackage  submit={packageSubmitHandle} next={nextStep} packageDataHandle={packageDataHandle} setPInfo={props.setPInfo} back={props.back} />}
        {purchaseStep===1&& <PurchaseCreditCard submit={CreditCardSubmitHandle}   />}
       

    </div>

</div>

</>
);
}

export default Purchase;
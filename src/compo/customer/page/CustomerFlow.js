import React,{useState} from "react";
import Card from "../../../share/card/Card";
import IsCustomer from "../../customerChack/IsCustomer";
import PurchaseType from "../comp/PurchaseType";
import CreatCustomer from "../CreatCustomer";
import CustomerDetails from "../CustomerDetails";
import Purchase from "../Purchase";


const CustomerFlow = ()=>{
    const [step , setStep] = useState(0);
    const [customer, setCustomer] = useState({});
    const [customerType, setcustomerType] = useState('');
    const [customerInstallationInfo, setCustomerInstallationInfo] = useState(false);
    const [customerExtraFilds, setCustomerExtraFilds] = useState(false);

     // move betwin the steps    
    const stepBack = ()=>{
        setStep(prev=> prev-1);
    }
    const nextStep = ()=>{
        setStep(prev=> prev+1);
    }




    //get the type from create customer  
    const customerTypeHandle =event=>{
        setcustomerType(event.target.value);
        console.log(event.target.value);
    }

    //set customer inputs
    const customerDetails = (item)=>{
        setCustomer(item)
    }
    


  

    return(
        <Card>
        {step === 0&&<IsCustomer next={nextStep} customerTypeHandle={customerTypeHandle}  customerDetails={customerDetails} />}
        {step === 1&&<CreatCustomer next={nextStep} back={stepBack}  customerTypeHandle={customerTypeHandle}  customerDetails={customerDetails} customer={customer} customerType={customerType}   />}
        {step === 2&&<Purchase next={nextStep}  back={stepBack} customerDetails={customerDetails} customer={customer} customerType={customerType} />}
        {step === 3&& <CustomerDetails     />}
        </Card>
    );

}



export default CustomerFlow;
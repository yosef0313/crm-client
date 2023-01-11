import React from "react";



const PurchaseType = props=>{

    return<><p className="Purchase-p Purchase-p1" > 
    <select onChange={props.orderTypeHandel} defaultValue="">

        <option value={'bezek'}>ניוד מספק אחר</option>
        <option value={''}>הקמת תשתית חדשה</option>
    </select>
    </p>
    {props.orderType&&<p className="Purchase-p Purchase-p2" >
    <select  onChange={props.orderTypeHandel} defaultValue="bezek">
        <option value="bezek">בזק</option>
        <option value='hot'>הוט</option>
    </select>
    </p>}


    </>
}


export default PurchaseType;
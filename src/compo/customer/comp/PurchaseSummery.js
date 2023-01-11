import React from "react";

import './PurchaseSummery.css';

const PurchaseSummery = props=>{

return <div className="summery-card">
    <h3>סיכום הזמנה</h3>
<div className="PurchaseSummery-div">
<p>תשתית</p>
{props.orderType?<p>ספק קיים {props.orderType}</p>:<p>הקמת תשתית</p>}

<p> סינון</p>
{props.data&&props.data.filter.value ==="true"?<p> כולל סינון</p>:<p> ללא סינון</p>}
<p>ip</p>
{props.data&&props.data.ip.value === 'true'?<p> קבוע</p>:<p> לא קבוע</p>}
<p>חבילה </p>
<p>{props.data?props.data.package.value:'לא נבחר'}</p>

<p>מספר פלאפון לתיאום </p>
<p>{props.data?props.data.contactPhone.value:'לא נבחר'}</p>
<p>מחיר  </p>
<p>{props.data?props.data.Price:'לא נבחר'}</p>

</div>


</div>;

}

export default PurchaseSummery;
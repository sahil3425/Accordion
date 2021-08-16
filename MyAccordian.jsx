import React, { useState } from 'react';
const MyAccordian=({question,answer})=>{
    const [show,setShow]=useState(false);
return (<>
    <div className="main-heading">
        <p className="ptag" onClick={()=>{
            setShow(!show)
        }}>➕</p>
        <h3>{question}</h3>
    </div>
    {
        show&&<p className='answers'>{answer}</p>
    }
</>)
}
export default MyAccordian;
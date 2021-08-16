import React, { useState } from 'react'
import {questions} from './api';
import './index.css'
import MyAccordian from './MyAccordian'
const App = ()=>{
    const [data,setData]=useState(questions);
    return(<>
    <section className="main-div">
    <h1>React Basic Questions</h1>
   {
       data.map((curElem)=>{
           const {id}=curElem;
             return <MyAccordian key={id} {...curElem}/>;
       })
   }</section>
    </>)
}
export default App;
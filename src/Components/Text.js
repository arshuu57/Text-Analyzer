import React, { useState } from 'react'


export default function Text(props) {
    
const[text,setText] = useState("");
const Onheandlechange = (event)=>{
    setText(event.target.value)
    console.log("Text is changed")
}
const Handleuppercase = (e)=>{
    let a  = text.toUpperCase();
    setText(a)
    props.showAlert("Converted to Uppercase","success")
  }
  const Handlelowerrcase = (e)=>{
    let b  = text.toLowerCase();
    setText(b)
    props.showAlert("Converted to Lowercase","success")
}
  return (
   
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.head}</h1>
<div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea value={text} onChange={Onheandlechange} className="form-control" id="exampleFormControlTextarea1" rows="3" style={{backgroundColor: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}></textarea>
</div>
<button type="button" className="btn btn-primary" onClick={Handleuppercase}>UpperCase</button>
<button type="button" className="btn btn-secondary" onClick={Handlelowerrcase}>LowerCase</button>
<h3>Text Summary</h3>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}Words and{text.length}</p>
<p>{0.010*text.split(/\s+/).filter((element)=>{return element.length!==0}).length}Minuets taken to read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>
  )


}

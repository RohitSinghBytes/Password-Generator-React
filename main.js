import React, {useEffect, useState} from 'react';
import ReactDom from "react-dom/client";

// Password : asdfghj, setPassword()
// length: 10, setlength()
// numberChanged = false, setnumberChanged()
// charChanged = false, setcharChanged()

function PasswordGenerator(){
 
const [Password,setPassword] = useState("");
const [length,setlength] = useState(10);
const [numberChanged, setnumberChanged] = useState(false);
const [charChanged, setcharChanged] = useState(false);

function generatepassword(){
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberChanged)
        str += "0123456789";
    if(charChanged)
        str += "@#$%^&*()+/-~";

    let pass = ""
    for(let i=0;i<length;i++){
       pass += str[Math.floor(Math.random()*str.length)]
    }
    setPassword(pass);
};

// generatepassword();  // ye finite loop mein chalega aise kia toh
// therefore use the useEffect hook

useEffect(()=>{
generatepassword();
},[length,numberChanged,charChanged])

    return(
        <>
        <h1>Password : {Password}</h1>
        <div className='second'>
            <input type="range" min={4} max={30} value={length} onChange={(e)=>setlength(e.target.value)}></input>
            <label>Length: ({length})</label>

          {/* NEW wrapper — remove classNames to revert */}
        <div className="checkbox-row">
            <div className="checkbox-item">
                <input type='checkbox' defaultChecked={numberChanged} 
                    onChange={()=>setnumberChanged(!numberChanged)}></input>
                <label>Number</label>
            </div>
            <div className="checkbox-item">
                <input type='checkbox' defaultChecked={charChanged} 
                    onChange={()=>setcharChanged(!charChanged)}></input>
                <label>Character</label>
            </div>
        </div>
        </div>
        </>
    )
}


ReactDom.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);
import React, {useState} from 'react'
import Main from "./Main";
import Homepage from "./Homepage";

function First() {

    const [loading, setLoading] = useState(false)
    const [xpload, setXpload] = useState(false)
    const [bureau, setBureau] = useState(false)
    const [blink, setBlink] = useState(false)
    
    function gifShowing() {
        setBlink(true)
        setTimeout(() => {
            setLoading(true);
        
        }, 1000);
        
        setTimeout(() => {
            setLoading(false)
            setXpload(true)
        }, 8000);
        setTimeout(() => {
            setXpload(false)
            setBureau(true)
        }, 10000);
        setTimeout(() => {
            setHome(false)
            setMain(true)
        }, 12000);
    }


const [home, setHome] = useState(true)
const [main, setMain] = useState(false)


    return (
        <div style={{height:"100%", width:'100%'}}>
           {home && <Homepage loading={loading} xpload={xpload} bureau={bureau} gifShowing={gifShowing} blink={blink}/>}
           {main && <Main/>}
        </div>
    )
}

export default First

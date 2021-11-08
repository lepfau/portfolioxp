import React, {useState} from 'react'
import Main from "./Main";
import Homepage from "./Homepage";
import useSound from "use-sound";
import postbeep from "../assets/postbeep.mp3"
import xpsound from "../assets/windows-xp-startup.mp3"


function First() {

    const [play] = useSound(postbeep);
    const [playxp] = useSound(xpsound)

    const [loading, setLoading] = useState(false)
    const [xpload, setXpload] = useState(false)
    const [bureau, setBureau] = useState(false)
    const [blink, setBlink] = useState(false)
    const [arrow, setArrow] = useState(true)
    
    function gifShowing() {
        play();
        setArrow(false);
        setBlink(true);
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
            playxp()
        }, 12000);
    }

    const shutdown = () => {
        window.location.reload()
    }


const [home, setHome] = useState(true)
const [main, setMain] = useState(false)


    return (
        <div style={{height:"100%", width:'100%'}}>
           {home && <Homepage loading={loading} xpload={xpload} bureau={bureau} gifShowing={gifShowing} blink={blink} arroww={arrow}/>}
           {main &&  <Main shutdown={shutdown} />}
        </div>
    )
}

export default First

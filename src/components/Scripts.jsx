/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Roles from "./roles/Roles"
import Players from "./Players"
import {groupDistribution} from '../utils/functions.js'
const Scripts = ({scripts}) =>{
    const [currentScript, setCurrentScript] = useState("Select script")
    const [playerCount, setPlayerCount] = useState(null)
    const [groups, setGroups] = useState({townfolks:3, outsiders:0, minions:1, demon:1})
    const selectedScript = (e)=>{
        setCurrentScript(e.currentTarget.value)
       
        
    }
    useEffect(()=>{
        setGroups(groupDistribution(playerCount))
    },[currentScript,playerCount])



    return(
        <div>
            <Players setPlayerCount={setPlayerCount}/>
            {playerCount && <select onChange={selectedScript}  defaultValue="Select script" id="script">
                <option >Select script </option>
                {   
                    scripts.map((script) =>{
                        return(
                            <option key={script.id} value={script.id}>{script.name}</option>
                        )
                    })
                }

            

            </select> }   
            
            {currentScript !="Select script" &&<Roles selectedScript ={currentScript} groups={groups} setGroups={setGroups}/>}
        </div>
    )
    
}

export default Scripts
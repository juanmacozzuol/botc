/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Roles from "./roles/Roles"
import Players from "./Players"
const Scripts = ({scripts}) =>{
    const [currentScript, setCurrentScript] = useState("Select script")
    const selectedScript = (e)=>{
        setCurrentScript(e.currentTarget.value)
    }
    useEffect(()=>{},[currentScript])

    return(
        <div>
        <select onChange={selectedScript}  defaultValue="Select script" id="script">
            <option >Select script </option>
            {   
                scripts.map((script) =>{
                    return(
                        <option key={script.id} value={script.id}>{script.name}</option>
                    )
                })
            }

           

        </select>    
        <Players/>
         {currentScript !="Select script" &&<Roles selectedScript ={currentScript}/>}
         </div>
    )
    
}

export default Scripts
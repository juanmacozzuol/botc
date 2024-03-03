/* eslint-disable react/prop-types */
import TB from  '../../../scripts/TB.json'
import SV from  '../../../scripts/SV.json'
import BMR from  '../../../scripts/BMR.json'
import { useState, useEffect } from 'react'

import './roles.css'

const Roles = ({selectedScript, groups}) =>{
    const [data, setData] = useState(TB)
    const [townfolks, setTownsfolk] =  useState(0)

    useEffect(()=>{

        switch(selectedScript){
            case 'TB':
                setData(TB)
                break;
            case 'SV':
                setData(SV)
                break;
            case 'BMR':
                setData(BMR)
                break;
        }
     

    },[data,selectedScript])

    const toggle = (e)=>{
        console.log(e.currentTarget.classList   )
        if(0 <= townfolks && townfolks< groups["TOWNFOLKS_CAP"] ){
            if( !e.currentTarget.classList.contains("selected-role-button")){
                e.currentTarget.classList.toggle('selected-role-button')
                setTownsfolk(townfolks+1)
            }
            else{
                e.currentTarget.classList.toggle('selected-role-button')
                setTownsfolk(townfolks-1)
            }      
        }
        console.log(townfolks)
        
    }
    const capitalizeName = (role) =>{
        if(role.includes("_")){
            let firstWord = role.split("_")[0]
            let secondWord= role.split("_")[1]
            let name = firstWord.charAt(0).toUpperCase() + firstWord.slice(1) +" " + secondWord.charAt(0).toUpperCase() + secondWord.slice(1)
            return name
            
        }else{
          return role.charAt(0).toUpperCase() + role.slice(1)
        }
    }
    return(
        <div className='roles'>

            {
                data.townsfolk.map((role) =>{
                    return(
                    <div key={`${role}`} className='role'>
                        <p style={{color:"white"}}>{capitalizeName(role)}</p>
                        <button className='role-button' name="townsfolks" onClick={toggle} ><img src={`/${selectedScript}/Icon_${role}.png `}></img></button>
                        
                            <input className='player' placeholder='player'/>
                        
                    </div>
                    )
                })

                
            }
            {
                data.outsiders.map((role) =>{
                    return(
                    <div key={`${role}`} className='role'>
                        <p style={{color:"white"}}>{capitalizeName(role)}</p>
                        <button className='role-button' onClick={toggle} ><img src={`/${selectedScript}/Icon_${role}.png `}></img></button>
                        
                            <input className='player' placeholder='player'/>
                        
                    </div>
                    )
                })
            }
            {
                data.minions.map((role) =>{
                    return(
                    <div key={`${role}`} className='role'>
                        <p style={{color:"white"}}>{capitalizeName(role)}</p>
                        <button className='role-button' onClick={toggle} ><img src={`/${selectedScript}/Icon_${role}.png `}></img></button>
                        
                            <input className='player' placeholder='player'/>
                        
                    </div>
                    )
                })
            }
            {
                data.demons.map((role) =>{
                    return(
                    <div key={`${role}`} className='role'>
                        <p style={{color:"white"}}>{capitalizeName(role)}</p>
                        <button className='role-button' onClick={toggle} ><img src={`/${selectedScript}/Icon_${role}.png `}></img></button>
                        
                            <input className='player' placeholder='player'/>
                        
                    </div>
                    )
                })
            }
        </div>
    )

}

export default Roles
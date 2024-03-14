/* eslint-disable react/prop-types */
import TB from  '../../../scripts/TB.json'
import SV from  '../../../scripts/SV.json'
import BMR from  '../../../scripts/BMR.json'
import { useState, useEffect } from 'react'

import './roles.css'

// for (const property in TB) {
//     for(let i = 0 ; i< TB[property].length; i++){
//       let obj = {grupo: property, role:TB[property][i]}
//       roles.push(obj)
//     }
//   }

const Roles = ({selectedScript, groups, setGroups, setBaron, baron}) =>{
    const [data, setData] = useState(TB)
    const [townfolks, setTownsfolk] =  useState(0)
    const [outsiders, setOutsiders] = useState(0)
    const [minions, setMinions] = useState(0)
    const [demons, setDemons] = useState(0)
    const [fortuneTeller, setFortuneTeller] = useState(false)
    const [drunk, setDrunk] = useState(false)
    console.log("TB",TB)
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
        setTownsfolk(0)
        setOutsiders(0)
        setMinions(0)
        setDemons(0)

        

    },[data,selectedScript])

    const toggle = (e)=>{
        console.log(e.currentTarget.value)
        switch(e.currentTarget.name){
            case "townfolks":
                if(e.currentTarget.value == "fortune_teller") setFortuneTeller(!fortuneTeller)
                
                if( e.currentTarget.classList.contains("selected-role-button")){
            
                    e.currentTarget.classList.toggle('selected-role-button')
                    setTownsfolk(townfolks-1)
                    
                }    
                else{
                    if(townfolks < groups["TOWNFOLKS_CAP"]){
                        e.currentTarget.classList.toggle('selected-role-button')
                        setTownsfolk(townfolks+1)
                    }
                }
                break;
            case "outsiders":
                if(e.currentTarget.value == "drunk") setDrunk(!drunk)
                if( e.currentTarget.classList.contains("selected-role-button")){
            
                    e.currentTarget.classList.toggle('selected-role-button')
                    setOutsiders(outsiders-1)
                }    
                else{
                    if(outsiders < groups["OUTSIDERS_CAP"]){
                        e.currentTarget.classList.toggle('selected-role-button')
                        setOutsiders(outsiders+1)
                    }
                }
                break;
                case "minions":
                    if(e.currentTarget.value == 'baron'){
                        
              
                        setBaron(!baron)
                    }

                    if( e.currentTarget.classList.contains("selected-role-button")){
                        
                        e.currentTarget.classList.toggle('selected-role-button')
                        setMinions(minions-1)
                    }    
                    else{
                        if(minions < groups["MINIONS_CAP"]){
                            e.currentTarget.classList.toggle('selected-role-button')
                            setMinions(minions+1)
                        }
                    }
                    break;
                case "demons":
                    if( e.currentTarget.classList.contains("selected-role-button")){
                
                        e.currentTarget.classList.toggle('selected-role-button')
                        setDemons(demons-1)
                    }    
                    else{
                        if(demons < groups["DEMONS_CAP"]){
                            e.currentTarget.classList.toggle('selected-role-button')
                            setDemons(demons+1)
                        }
                    }
                    break;

        }
        
     
        
        console.log(e.currentTarget.name)
        
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
                        <button className='role-button' name="townfolks" value={ role} onClick={toggle} ><img src={`/${selectedScript}/Icon_${role}.png `}></img></button>
                        
                            <input className='player' placeholder='player'/>
                            {role == "fortune_teller" && fortuneTeller && <input  className="player" placeholder='red hearing'/>}
                            
                    </div>
                    )
                })

                
            }
            {
                data.outsiders.map((role) =>{
                    return(
                    <div key={`${role}`} className='role'>
                        <p style={{color:"white"}}>{capitalizeName(role)}</p>
                        <button className='role-button' name="outsiders" onClick={toggle} value={role} ><img src={`/${selectedScript}/Icon_${role}.png `}></img></button>
                        
                            <input className='player' placeholder='player'/>
                            {role == "drunk" && drunk && <input className='player' placeholder='supposed role'/>}
                    </div>
                    )
                })
            }
            {
                data.minions.map((role) =>{
                    return(
                    <div key={`${role}`} className='role'>
                        <p style={{color:"white"}}>{capitalizeName(role)}</p>
                        <button className='role-button' name="minions" onClick={toggle} value={ role} ><img src={`/${selectedScript}/Icon_${role}.png `}></img></button>
                        
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
                        <button className='role-button' name="demons" onClick={toggle} value={ role} ><img src={`/${selectedScript}/Icon_${role}.png `}></img></button>
                        
                            <input className='player' placeholder='player'/>
                        
                    </div>
                    )
                })
            }
        </div>
    )

}

export default Roles
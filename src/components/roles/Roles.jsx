/* eslint-disable react/prop-types */
import TB from  '../../../scripts/TB.json'
import SV from  '../../../scripts/SV.json'
import BMR from  '../../../scripts/BMR.json'
import { useState, useEffect } from 'react'
import './roles.css'

const Roles = ({selectedScript}) =>{
    const [data, setData] = useState(TB)
    console.log(TB)
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
        e.currentTarget.classList.toggle('selected-role-button')
    }
 
    return(
        <div className='roles'>

            {
                data.townsfolk.map((role) =>{
                    return(
                    <div key={`${role}`} className='role'>
                        <button className='role-button' onClick={toggle} ><img src={`/${selectedScript}/Icon_${role}.png `}></img></button>
                        
                            <input className='player' placeholder='player'/>
                        
                    </div>
                    )
                })

                
            }
            {
                data.outsiders.map((role) =>{
                    return(
                    <div key={`${role}`} className='role'>
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
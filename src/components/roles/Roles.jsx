import { useState } from 'react'
import TB from '../../../troubleBrewing.json'
import './roles.css'
const Roles = () =>{

    const toggle = (e)=>{
       e.currentTarget.classList.toggle('selected-role-button')
    }
    return(
        <div className='roles'>

            {
                TB.townsfolk.map((role) =>{
                    return(
                    <div key={`${role}`} className='role'>
                        <button className='role-button' onClick={toggle} ><img src={`/public/Icon_${role}.png `}></img></button>
                        
                            <input className='player' placeholder='player'/>
                        
                    </div>
                    )
                })

                
            }
            {
                TB.outsiders.map((role) =>{
                    return(
                    <div key={`${role}`} className='role'>
                        <button className='role-button' onClick={toggle} ><img src={`/public/Icon_${role}.png `}></img></button>
                        
                            <input className='player' placeholder='player'/>
                        
                    </div>
                    )
                })
            }
            {
                TB.minions.map((role) =>{
                    return(
                    <div key={`${role}`} className='role'>
                        <button className='role-button' onClick={toggle} ><img src={`/public/Icon_${role}.png `}></img></button>
                        
                            <input className='player' placeholder='player'/>
                        
                    </div>
                    )
                })
            }
            {
                TB.demons.map((role) =>{
                    return(
                    <div key={`${role}`} className='role'>
                        <button className='role-button' onClick={toggle} ><img src={`/Icon_${role}.png `}></img></button>
                        
                            <input className='player' placeholder='player'/>
                        
                    </div>
                    )
                })
            }
        </div>
    )

}

export default Roles
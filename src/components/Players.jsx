/* eslint-disable react/prop-types */
const Players = ({setPlayerCount}) =>{

  

    const playerTotal = (e)=>{
        setPlayerCount(e.target.value)
    
       
       
        
    }


    return(
        <span>
            <label style={{color:"white"}}>Cantidad de jugadores</label>
            <input id="playerCount"  onChange={playerTotal} type="number" max={15} min={5}/>
        </span>
    )
}

export default Players
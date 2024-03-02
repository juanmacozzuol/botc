
import Scripts from "./Scripts"

const NewGame = ()=>{
    const scripts = [{id:"TB",name:"TroubleBrewing"}, {id:"SV",name:"SectsAndViolets"}, {id:"BMR",name:"BadMoonRising"}]


    return(<Scripts scripts={scripts}/>
    )


}

export default NewGame
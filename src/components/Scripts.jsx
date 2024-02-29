const Scripts = (props) =>{

    return(
        <div>
        {
            props.scripts.map((script) =>{
                return(
                    <button key={script}>{script}</button>
                )
            })
        }

        </div>    
    )
    
}

export default Scripts
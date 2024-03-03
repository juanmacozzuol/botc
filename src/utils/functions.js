export const groupDistribution = (playercount) =>{

    var groups = {
        TOWNFOLKS_CAP:0,
        OUTSIDERS_CAP:0,
        MINIONS_CAP:0,
        DEMONS_CAP:1
    }
    switch(playercount){
        case "5":
            groups["TOWNFOLKS_CAP"]= 3
            groups["MINIONS_CAP"] = 1
            return groups
        case "6":
            groups["TOWNFOLKS_CAP"]= 3
            groups["OUTSIDERS_CAP"]= 1
            groups["MINIONS_CAP"] = 1
            return groups
        case "7":
            groups["TOWNFOLKS_CAP"]= 5
            groups["MINIONS_CAP"] = 1
            return groups
        case "8":
            groups["TOWNFOLKS_CAP"]= 5
            groups["OUTSIDERS_CAP"]= 1
            groups["MINIONS_CAP"] = 1
            return groups
        case "9":
            groups["TOWNFOLKS_CAP"]= 5
            groups["OUTSIDERS_CAP"]= 2
            groups["MINIONS_CAP"] = 1
            return groups
        case "10":
            groups["TOWNFOLKS_CAP"]= 7
            groups["MINIONS_CAP"] = 2
            return groups
        case "11":
            groups["TOWNFOLKS_CAP"]= 7
            groups["OUTSIDERS_CAP"]= 1
            groups["MINIONS_CAP"] = 2
            return groups
        case "12":
            groups["TOWNFOLKS_CAP"]= 7
            groups["OUTSIDERS_CAP"]= 2
            groups["MINIONS_CAP"] = 2
            return groups
        case "13":
            groups["TOWNFOLKS_CAP"]= 9
            groups["OUTSIDERS_CAP"]= 0
            groups["MINIONS_CAP"] = 3
            return groups
        case "14":
            groups["TOWNFOLKS_CAP"]= 9
            groups["OUTSIDERS_CAP"]= 1
            groups["MINIONS_CAP"] = 3
            return groups
        case "15":
            groups["TOWNFOLKS_CAP"]= 9
            groups["OUTSIDERS_CAP"]= 2
            groups["MINIONS_CAP"] = 3
            return groups
        default:
            console.log("PROBLEMA")
            break;
            
    }
  
    
}


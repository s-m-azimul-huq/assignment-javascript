//First Problem Solve 

function feetToMile(feet){
   if(feet>0){
    const mile = feet/5280 ;
    return mile ;
   }else if (feet<0){
       const alert = "Plase,Use Only Positive Value ." ;
       return alert ;
   }
}


// Second Problem Solve

function woodCalculator(chair, table, bed){
    const chairCount = chair* 1 ;
    const tableCount = table* 3;
    const bedCount = bed* 5;
    const totalWood = chairCount + tableCount + bedCount ;
    return totalWood ;
}



// Third Problem Solve 

function brickCalculator(floorNumber){
    const brickPerFeet = 1000;
    if(floorNumber <= 10){
        const totalBrick =15*floorNumber*brickPerFeet ;
        return totalBrick ;
    }else if (floorNumber <= 20){
        const totalBrick = 12*floorNumber*brickPerFeet ;
        return totalBrick;
    }else if (floorNumber >20){
        const totalBrick = 10*floorNumber*brickPerFeet ;
        return totalBrick ;
    }
}



// Forth Problem Solve

function tinyFriend(names){
    let tinyFriendName = names[0];
    for(let i = 0; i<names.length ; i++){
        let currentName = names[i];
        if(currentName.length<tinyFriendName.length){
            tinyFriendName = currentName ;
        }
    }
    return tinyFriendName ;
}


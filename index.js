// Code your solution in this file!

const feet= 264;
function distanceFromHqInBlocks(block){
    return Math.abs(block -42);   
}
console.log(distanceFromHqInBlocks);

function distanceFromHqInFeet(block){
    const distance = distanceFromHqInBlocks(block);
    return distance * feet;
    }

function distanceTravelledInFeet(start,destination){  
    const distanceTravelled = Math.abs(destination - start); 
    return distanceTravelled * feet};


function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400){
        return 0;
    }
    else if( distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02 ;
    }
    else if ( distance > 2000 && distance < 2500){
        return 25;
    }
    else if (distance >2500){
        return "cannot travel that far";
    }
    }

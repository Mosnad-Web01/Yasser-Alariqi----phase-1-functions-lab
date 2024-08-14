function distanceFromHqInBlocks(pickup){
    let ScuberHeadquarters = 42;
    let distance =  Math.abs(pickup - ScuberHeadquarters);
    return distance
}

distanceFromHqInBlocks()


function distanceFromHqInFeet(distance){
    let distanceInFeet = (distance - 42)* 264
    return Math.abs(distanceInFeet)
}
console.log(distanceFromHqInFeet(43));

let companyLocation = 42

function distanceTravelledInFeet( companyLocation ,distance){
    let DistanceTravelInFeet = (companyLocation - distance) * 264
    return Math.abs(DistanceTravelInFeet)
}

function calculatesFarePrice(start, destination){
    let distanceInBlock = Math.abs(start - destination);
    let distanceInFeet = distanceInBlock * 264
    let price = 0;
    if(distanceInFeet < 400) {
        return price = 0
    }else if(distanceInFeet >=400 && distanceInFeet <=2000){
        return price = ((distanceInFeet * 2) - 800) / 100;
    }else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return price = 25
    }else{
        return price = "cannot travel that far"
    }
}
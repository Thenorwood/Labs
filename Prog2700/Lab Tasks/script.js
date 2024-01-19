function travelPlan(location) {
    const currentDate = new Date();
    const isTravelPeriod = currentDate >= new Date(currentDate.getFullYear(), 0, 19) && currentDate <= new Date(currentDate.getFullYear(), 1, 19);
    
    let output;

    if (location === "Halifax") {
        output = "You are in Halifax. The airport is Halifax Stanfield International Airport (YHZ).";
    } else if (isTravelPeriod) {
        output = "I am traveling in Costa Rica.";
    } else {
        output = "Let me know where you are located and where you are going.";
    }

    console.log(output);
    document.getElementById("outputDiv").innerHTML = output;
}


const myLocation = "Halifax"; 
travelPlan(myLocation);

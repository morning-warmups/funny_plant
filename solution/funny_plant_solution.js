var calculateFeeding = function(people, plants){
    var weeks = 1, fruits = 0;
    for(i=0; fruits < people; i++){
        ++weeks;
        fruits += plants;
        plants += fruits;
    }
    return weeks;
}
console.log(calculateFeeding(15, 1));
console.log(calculateFeeding(200, 15));
console.log(calculateFeeding(50000, 1));
console.log(calculateFeeding(150000, 250));




///First attempt///
// function funnyPlant(currentPlants, neededPlants, week){
//     var nextPlants = 0;
//
//     for(var i = 0; i < currentPlants.length; ++i){
//             currentPlants[i] += 1;
//             nextPlants += currentPlants[i];
//     }
//     if(nextPlants >= neededPlants)
//             return week;
//
//     for(var i = 0; i < nextPlants; ++i)
//             currentPlants.push(0);
//
//     return funnyPlant(currentPlants, neededPlants, week + 1);
// }
//
// var numInitial = process.argv[3];
// var numPeople = process.argv[2];
//
// var plantArray = [];
// for(var i = 0; i < numInitial; ++i)
//     plantArray.push(0);
// console.log(funnyPlant(plantArray, numPeople, 2));

// Code your solution here
function findMatching(drivers,name){
return drivers.filter(drivermach=>
drivermach.toLowerCase()===name.toLowerCase());
}

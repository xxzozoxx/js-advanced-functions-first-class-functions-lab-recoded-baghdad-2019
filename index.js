// Code your solution in this file!
const returnFirstTwoDrivers = function (arr){
  return arr.slice(0,2);
}
const returnLastTwoDrivers = function (arr){
  return arr.slice(-2);
}
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(int){
    return function(fare){
      return int * fare;
 }
} 
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers (driversArr , select){
  if(select == returnFirstTwoDrivers){
    return returnFirstTwoDrivers(driversArr);
  }
  else{
     return returnLastTwoDrivers(driversArr);
  }
}
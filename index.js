// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  if (someValue >= 42) {
    return someValue - 42;
  }
  else {
    return 42 - someValue;
  }
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(begin, end) {
  if (end > begin) {
    return (end - begin) * 264;
  }
  else {
    return (begin - end) * 264;
  }
}

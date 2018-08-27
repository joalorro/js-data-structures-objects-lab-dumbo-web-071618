// Write your solution in this file!
const driver = {name: "Sam"}

updateDriverWithKeyAndValue = (driver,key,value) => {
  return Object.assign({},driver,{[key]: value})
}

// const newDrivers = updateDriverWithKeyAndValue(driver, "uptown", "benny")
//
// console.log( newDrivers )

destructivelyUpdateDriverWithKeyAndValue = (obj,key,value) => {
  obj[key] = value
  return obj
}

function deleteFromDriverByKey(driver,key) {
  const newDriver = {...driver}
  return delete newDriver[key]
}
// newDr = deleteFromDriverByKey(driver,name)
// console.log(newDr)

destructivelyDeleteFromDriverByKey = (driver,key) => {
  return delete driver[key]
}

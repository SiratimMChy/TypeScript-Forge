
type FormatCoordinateTuple = readonly  [number, number, string] ;
const formatCoordinate = (Coordinate: FormatCoordinateTuple) : string =>{
   const  [latitude, longitude, locationName] = Coordinate;
   return `Location: ${locationName} (${latitude}, ${longitude})`
}

console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

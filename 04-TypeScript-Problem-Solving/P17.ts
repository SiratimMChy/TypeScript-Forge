
type Car = {
  drive: () => string;
};

type Boat = {
  sail: () => string;
};

const startVehicle = (vehicle: Car | Boat): string => {
  if ("drive" in vehicle) {
    return vehicle.drive();
  }
  return vehicle.sail();
};

const myCar: Car = { drive: () => "Driving on the road" };
const myBoat: Boat = { sail: () => "Sailing on the water" };
console.log(startVehicle(myCar));  // Output: "Driving on the road"
console.log(startVehicle(myBoat)); // Output: "Sailing on the water"

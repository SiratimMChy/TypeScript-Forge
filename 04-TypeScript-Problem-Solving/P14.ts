interface UserProfile {
  name: string;
  address?: {
    city: string;
    country: string;
  };
}

const getUserCity = (user: UserProfile): string => {
  if (user.address && user.address.city) {
    return user.address.city;
  }
  return "City not provided";
};


const userWithAddress: UserProfile = {
  name: "Alif",
  address: { city: "Dhaka", country: "Bangladesh" }
};
const userWithoutAddress: UserProfile = {
  name: "Sakib"
};

console.log(getUserCity(userWithAddress));    // Output: "Dhaka"
console.log(getUserCity(userWithoutAddress)); // Output: "City not provided"

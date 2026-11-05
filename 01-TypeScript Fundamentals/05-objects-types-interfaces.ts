//*object type , type alias and interface
type Address = {
  streetName: string;
  holdingNumber: number;
};
type User = {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
  address: Address;
};

const user: {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
} = {
  name: "Tuha",
  age: 24,
  isActive: true,
  action: () => console.log("Hlw"),
  badges: ["abc", "hero"],
};

const user1: User = {
  name: "Tuha",
  age: 24,
  isActive: true,
  action: () => console.log("Hlw"),
  badges: ["abc", "hero"],
  address: {
    streetName: "Sylhet",
    holdingNumber: 67,
  },
};

interface IUser {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
}


// Type Alias can represent primitive types.
type UserName = string;

// Interface defines object structures.
interface IUserName {
  name: string;
}

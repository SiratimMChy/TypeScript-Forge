//* TypeScript Utility Types (Partial, Required, Pick, Omit, Record)

//* 1. Partial<T> Utility Type
interface User {
  id: string;
  name: string;
  email: string;
}

// Partial<User> makes ALL properties of User optional (?) automatically.
// This is very useful when updating a profile where only a few fields (like 'name') are sent.
const updateProfile = (id: string, data: Partial<User>) => {
  // some backend logic
  console.log(`Updating user ${id}:`, data);
};

updateProfile("asdfas", { name: "Mizan" });


//* 2. Required<T> Utility Type
interface Config {
  apiKey?: string;
  timeout?: number;
}

// Required<Config> does the exact opposite of Partial.
// It takes an interface with optional properties (?) and makes ALL of them mandatory.
const initialize = (config: Required<Config>) => {
  // some logic
  console.log(`Initializing with API Key: ${config.apiKey} and Timeout: ${config.timeout}`);
};

initialize({ apiKey: "asdfasdfa", timeout: 30000 });


//* 3. Pick<T, Keys> Utility Type
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

// Pick allows us to select or "pick" only specific properties from an existing interface.
// Here, ProductPreview will only have { name: string; description: string; }
type ProductPreview = Pick<Product, "name" | "description">;

const preview: ProductPreview = {
  name: "ABC",
  description: "EFG",
};


//* 4. Omit<T, Keys> Utility Type
interface Employee {
  id: number;
  name: string;
  salary: number;
  nid: string;
}

// Omit is the opposite of Pick. It allows us to "remove" or omit specific sensitive properties.
// Here, PublicEmployee will contain everything from Employee EXCEPT 'salary' and 'nid'.
type PublicEmployee = Omit<Employee, "salary" | "nid">;

const directoryEntry: PublicEmployee = {
  id: 42,
  name: "Bob",
};


//* 5. Record<Keys, Type> Utility Type
type Environment = "development" | "staging" | "production";

// Record creates an object type whose keys are union types (Environment) 
// and whose values are of a specific type (string).
const apiUrls: Record<Environment, string> = {
  development: "http://localhost:3000",
  staging: "https://staging.api.com",
  production: "https://api.com",
};

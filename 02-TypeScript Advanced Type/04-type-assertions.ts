// Type Assertion

// "as" Syntax

type Status = "pending" | "approved" | "reject";

const someStatus: string = "pending";
// Error: Argument of type 'string' is not assignable to parameter of type 'Status'.
// Because someStatus is declared as string, TypeScript cannot guarantee
// that its value belongs to the Status union type.

// const someStatus: "pending" = "pending";
// Alternative: Declare the variable with a specific literal type.

const showStatus = (status: Status) => {
    console.log("Your Application Status is " + status);
};

showStatus(someStatus as Status);
// Type Assertion: Tells TypeScript to treat someStatus as Status.
// It does not perform runtime validation or change the actual value.


// Non-Null Assertion

interface Config {
    port?: number;
}

const config: Config = {
    port: 3000
};

// const currentPort: number = config.port;
// Error: Type 'number | undefined' is not assignable to type 'number'.
// Because port is optional, TypeScript considers its value
// potentially undefined.

// const currentPort: number = config.port!;
// Non-Null Assertion: Tells TypeScript that config.port
// is not null or undefined.

const currentPort: number = config.port as number;
// Type Assertion: Tells TypeScript to treat config.port as a number.
// It does not check whether the actual value is undefined.


// Const Assertion

const configuration = {
    port: 8080,
    prefix: "/api/v2"
} as const;

// Inferred Type:
// {
//     readonly port: 8080;
//     readonly prefix: "/api/v2";
// }

// configuration.port = 5000;
// Error: Cannot assign to 'port' because it is a read-only property.

// configuration.prefix = "/api";
// Error: Cannot assign to 'prefix' because it is a read-only property.

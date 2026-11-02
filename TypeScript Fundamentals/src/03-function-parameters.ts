// Optional, Default 

const concatName = (firstName: string, lastName?: string) => {
  if (!lastName) {
    return firstName;
  }

  return firstName + " " + lastName;
};

const greetings = (fullName: string, greeting = "Hlw") => {
  console.log(greeting + " " + fullName);
};

greetings("Tuha");

/*
Side Note: Optional & Default Parameters

What is an Optional Parameter?
- An optional parameter is not required when calling a function.
- We use ? after the parameter name to make it optional.
- Example: lastName?: string

What is a Default Parameter?
- A default parameter has a predefined value.
- If no argument is provided, the default value is used.
- We use = to assign a default value.
- Example: greeting = "Hlw"

Important:
- Optional parameters must come after required parameters.
- Default parameters are used when an argument is omitted or undefined.
- Optional parameters can be omitted when calling a function.
*/
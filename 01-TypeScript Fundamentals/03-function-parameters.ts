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

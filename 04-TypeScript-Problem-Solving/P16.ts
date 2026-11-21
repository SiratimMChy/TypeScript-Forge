
const formatGreeting = (name: string, title?: string, greeting: string = "Hello"): string => {
  return title ? `${greeting}, ${title} ${name}!` : `${greeting}, ${name}!`;
};




console.log(formatGreeting("Tanvir"));                   // Output: "Hello, Tanvir!"
console.log(formatGreeting("Tanvir", "Mr."));            // Output: "Hello, Mr. Tanvir!"
console.log(formatGreeting("Sabbir", "Dr.", "Welcome")); // Output: "Welcome, Dr. Sabbir!"

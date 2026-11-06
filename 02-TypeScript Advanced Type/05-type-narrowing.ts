//* "typeof"

let x = 123;
console.log(typeof (x));


//*Type Guard

const print = (value: string | number) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        return value;
    }
}
//* Truthiness
/* type  User ={
    name:string,
    address:{
        street: string;
    }
} */

type User = {
    name: string,
    address?: {
        street: string;
    }
} | null;
const loggedInUser: User = {
    name: 'asif',
    address: {
        street: "sylhet"
    }
}

const showAddress = (user: User) => {
    
   if (user && user.address) {
     console.log(user.address.street);
   }
throw new Error("User Not Found!")
}
/* interface User {
    name:string,
    address:{
        street: string;
    }
} */

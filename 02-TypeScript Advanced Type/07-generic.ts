// Generic Function

/* const wrapInArray = (value: any )=>{
return[value];
}

const strArr = wrapInArray("Tuha");
const numArr = wrapInArray(123);


strArr.map((item)=> item.toUpperCase());
numArr.map((item)=> item.toUpperCase()); 
No TypeScript error occurs here because any disables type checking.
However, calling toUpperCase() on a number causes a runtime error.*/

const wrapInArray = <T>(value: T) => {
    return [value];
};

const strArr = wrapInArray("Tuha");
const numArr = wrapInArray(123);

strArr.map((item) => item.toUpperCase());
numArr.map((item) => item);

// Generic Interfaces

interface User {
    name: string;
    role: string;
}

interface Blog {
    title: string;
    description: string;
    date: string;
}

interface apiResponse<T> {
    data: T;
    success: boolean;
    statusCode: number;
}

// T is replaced with User.
// Therefore, data must follow the User interface.
type UserResponse = apiResponse<User>;

// T is replaced with Blog.
// Therefore, data must follow the Blog interface.
type BlogResponse = apiResponse<Blog>;

const userRes : UserResponse={
    statusCode:200,
    success:true,
    data:{
        name:"Raz",
        role:"Admin"
    }
}

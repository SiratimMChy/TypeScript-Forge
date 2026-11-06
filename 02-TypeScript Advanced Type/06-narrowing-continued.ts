// Some Caveats of Type Guard

const printAll = (x: string | string[] | null) => {
    if (x && typeof x === "object") {
        for (let str of x) {
            console.log(str);
        }
    }
    else if (typeof x === "string") {
        console.log(x);
    }
    else {
        console.log("");
    }
};

printAll(null);


// Equality Narrowing

const compare = (x: number | string, y: number | boolean) => {
    if (x === y) {
        console.log(x, y);
    }
};


// Inequality Narrowing

const InequalCompare = (x: string | string[] | null) => {
    if (x !== null) {
        if (typeof x === "object") {
            for (const str of x) {
                console.log(str);
            }
            return;
        }

        console.log(x);
        return;
    }

    console.log("");
};

InequalCompare("ncnvm");


// "in" Operator

type Bird = {
    fly: () => void;
};

type Fish = {
    swim: () => void;
};

const move = (animal: Bird | Fish) => {
    if ("fly" in animal) {
        animal.fly();
    }
    else {
        animal.swim();
    }
};


// "instanceof" Check

const date = new Date();
const err = new Error("Something went wrong");

console.log(date instanceof Date);
console.log(err instanceof Error);

const showDate = (x: Date | string) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }

    const today = new Date(x);
    console.log(today.toISOString());
};

showDate("1971-12-16");


// Discriminated Union

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

const getArea = (shape: Circle | Square) => {
    if (shape.kind === "circle") {
        console.log(Math.PI * shape.radius * shape.radius);
    }
    else {
        console.log(shape.sideLength * shape.sideLength);
    }
};

getArea({ kind: "circle", radius: 5 });
getArea({ kind: "square", sideLength: 4 });

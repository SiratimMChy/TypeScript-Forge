interface Circle {
   shape: "circle";
   radius: number;
}

interface Rectangle {
   shape: "rectangle";
   width: number;
   height: number;
}

interface Triangle {
   shape: "triangle";
   base: number;
   height: number;
}

type Shape = Circle | Rectangle | Triangle;

const calculateArea = (shape: Shape): number => {
  if (shape.shape === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else if (shape.shape === "rectangle") {
    return shape.width * shape.height;
  } else {
    return 0.5 * shape.base * shape.height;
  }
};

console.log(calculateArea({ shape: "circle", radius: 5 }));
console.log(calculateArea({ shape: "rectangle", width: 10, height: 4 }));
console.log(calculateArea({ shape: "triangle", base: 10, height: 6 }));

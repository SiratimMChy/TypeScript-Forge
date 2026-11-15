type ProcessInputType = string | number | boolean;
type ProcessOutputType = string | number;
const processInput = (value: ProcessInputType): ProcessOutputType => {
    if (typeof value === "number") {
        return value * 10;
    } else if (typeof value === "string") {
        return value.toLowerCase().trim();
    } else {
        if (value === true) {
            return "Active";
        } else {
            return "Inactive";
        }
    }
};
console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));
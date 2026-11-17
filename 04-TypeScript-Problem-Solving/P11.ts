
type DiscountType = "PERCENTAGE" | "FLAT";

const applyDiscount = (price: number, type: DiscountType, amount: number): number => {
  if (type === "PERCENTAGE") {
    return price - (price * amount) / 100;
  }
  return price - amount;
};

console.log(applyDiscount(1000, "PERCENTAGE", 10)); // Output: 900
console.log(applyDiscount(1000, "FLAT", 150));      // Output: 850

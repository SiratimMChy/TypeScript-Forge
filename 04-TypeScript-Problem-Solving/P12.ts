
interface User {
  name: string;
  role: "admin" | "editor" | "viewer";
  isActive: boolean;
}

const canEdit = (user: User): boolean => {
  return user.isActive && (user.role === "admin" || user.role === "editor");
};

const user1: User = { name: "Tanvir", role: "admin", isActive: true };
const user2: User = { name: "Sabbir", role: "viewer", isActive: true };
const user3: User = { name: "Nayeem", role: "editor", isActive: false };

console.log(canEdit(user1)); // Output: true
console.log(canEdit(user2)); // Output: false
console.log(canEdit(user3)); // Output: false

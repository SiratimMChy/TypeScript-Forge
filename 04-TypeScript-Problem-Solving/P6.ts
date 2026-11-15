const pluckValues = <T, K extends keyof T>(items: T[],key: K): T[K][] =>{
   return items.map((item)=>item[key] ) ;
}

// Sample Input:
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

console.log(pluckValues(users, "name"));

console.log(pluckValues(users, "id"));


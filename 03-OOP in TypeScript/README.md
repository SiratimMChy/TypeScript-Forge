<h1 align="center">OOP in TypeScript</h1>

**01-Class-and-Object.ts**

OOP Basics (Class, Object, Constructor & Keywords)

1. OOP (Object-Oriented Programming):

- OOP stands for Object-Oriented Programming.
- It is a programming paradigm based on classes and objects.
- OOP helps us organize code by combining data (properties) and
  related behaviors (methods) into a single unit.
- In OOP, we can represent real-world entities such as employees,
  students, cars, and bank accounts using objects.
- The four pillars of OOP are: Inheritance, Encapsulation,
  Abstraction, and Polymorphism.

Example:

An Employee can have:
- Properties (Data)   : name, baseSalary
- Behaviors (Methods) : calculateSalary(), displayInfo()

2. Class:

- A class is a blueprint or template for creating objects.
- It defines what properties and methods its objects will have.
- A class itself is not an individual object; it is just the design.
- We use the 'class' keyword to create a class in TypeScript.

Example:

```typescript
class Employee {
  name: string;
  baseSalary: number;
}
```

Here:
- Employee is the class name.
- name and baseSalary are properties of the class.
- string and number are their respective TypeScript types.

Remember:
A class defines the structure and behavior of objects.

3. Object (Instance):

- An object is an instance of a class.
- It is created based on the structure defined by a class.
- An object contains actual values for the properties defined in its class.
- Multiple objects can be created from the same class, and each object
  holds its own separate property values.

Example:

```typescript
const employee = new Employee("Mir", 22300);
const employee1 = new Employee("Asif", 35000);
```

Here:
- employee is an object of the Employee class.
- employee1 is another object of the Employee class.
- Both objects belong to the same class, but they have different property values.

Remember:
Class  = Blueprint (Design)
Object = Instance created from that blueprint (Real Data)

4. Constructor:

- A constructor is a special method inside a class.
- It is called automatically when an object is created using the 'new' keyword.
- Its main purpose is to initialize (set up) an object's properties.
- In JavaScript and TypeScript, the constructor name must be 'constructor'.
- A constructor does not have an explicit return type.
- We can receive parameters through a constructor to assign initial values
  to an object's properties.

Example:

```typescript
class Employee {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
}
```

Here:
- constructor is the special method.
- name and baseSalary are constructor parameters.
- this.name and this.baseSalary refer to the properties of the current object.
- The values received through the parameters are assigned to the object's properties.

Remember:
The constructor initializes an object when it is created.

5. Method:

- A method is a function defined inside a class.
- It is used to perform a specific task or describe the behavior of an object.
- A class can have multiple methods.
- Methods can access the object's properties using the 'this' keyword.

Example:

```typescript
class Employee {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  displayInfo(): void {
    console.log(this.name);
    console.log(this.baseSalary);
  }
}
```

Here:
- displayInfo() is a method of the Employee class.
- void means the method does not return any value.
- We can call this method using an object (e.g., employee.displayInfo()).

Remember:
Constructor initializes an object.
Method performs a specific task.

6. 'this' Keyword:

- The 'this' keyword refers to the current object (instance) inside a class.
- It is used to access the current object's properties and methods.
- It helps distinguish between class properties (this.name) and constructor
  or method parameters (name) when they share the same name.

Example:

```typescript
class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```

Here:
- this.name refers to the 'name' property of the current object.
- name refers to the constructor parameter.
- The assignment stores the parameter value inside the current object's property.

Important:
- 'this' does NOT call or invoke the class constructor.
- It simply points to the current object being created or used.

Remember:
this = Current object (instance).

7. 'new' Keyword:

- The 'new' keyword is used to create an instance (object) of a class.
- When 'new' is used with a class, it creates a fresh object and automatically
  calls the class constructor.

Example:

```typescript
const employee = new Employee("Mir", 22300);
```

Here:
- new creates a new Employee object.
- Employee("Mir", 22300) passes the arguments to the constructor.
- The constructor initializes the object's properties.
- The newly created object is stored in the 'employee' variable.

Remember:
new = Creates a new object and calls its constructor.

8. 'instanceof' Operator:

- The 'instanceof' operator checks whether an object belongs to (was created from)
  a specific class.
- It returns a boolean value: true or false.

Example:

```typescript
console.log(employee instanceof Employee); // Output: true
```

Here:
- Since 'employee' was created from the Employee class using 'new Employee()',
  the check returns true.

Remember:
instanceof = Checks if an object is an instance of a specific class.

Important Differences:

- Class       -> Defines the structure (blueprint).
- Object      -> Contains actual data (instance).
- Constructor -> Initializes the object's properties.
- Method      -> Defines the object's behavior or actions.
- this        -> Refers to the current object.
- new         -> Creates a new instance and runs the constructor.
- instanceof  -> Checks the object's class relationship (returns true/false).

Remember (Quick Summary):

- OOP         = Object-Oriented Programming.
- Class       = Blueprint or template for creating objects.
- Object      = Instance of a class holding real data.
- Constructor = Special method used to initialize an object.
- Method      = Function defined inside a class.
- this        = Refers to the current object (instance).
- new         = Creates an object and automatically calls its constructor.
- instanceof  = Checks whether an object is an instance of a particular class.

**02-Encapsulation.ts**

Encapsulation (Access Modifiers, Getter & Setter)

1. Encapsulation:

- Encapsulation describes the ability of an object to hide its data
  and methods from the rest of the world.
- In encapsulation, we perform two main tasks:
  1. Putting related stuff (properties and methods) together inside a class.
  2. Hiding important or sensitive information from outside access.
- It helps protect an object's internal data and controls how that
  data is accessed or updated.

Example:
In our Employee class, we keep 'name' and '_baseSalary' together,
hide '_baseSalary' using the 'private' modifier, and manage it
using getters and setters.

2. Four Modifiers in TypeScript (public, private, protected, readonly):

- Modifiers control where class properties and methods can be accessed
  or whether they can be reassigned.
- Note: TypeScript has no "default" (package-level) access modifier.
  If no modifier is written, TypeScript treats it as 'public' by default.

  * public:
    - Anyone can access this information from anywhere.
    - Accessible inside the class, inside child classes, and directly
      from outside through an object (e.g., employee.name).

  * private:
    - Only accessible inside the class itself.
    - Cannot be accessed directly from outside the class (even with an object)
      or inside child classes.
    - Adding an underscore (_) before a private property (like _baseSalary)
      is a common naming convention.

  * protected:
    - An intermediate level of access between public and private.
    - Accessible only inside its own class and its child classes (subclasses).
    - Cannot be accessed directly from outside using an object.

  * readonly:
    - Prevents a property from being changed (reassigned) after initialization.
    - Its value can only be set once (at declaration or inside the constructor).

3. Parameter Properties (Constructor Shortcut):

- Writing modifiers (like 'public' or 'private') directly in front of
  constructor parameters automatically declares and initializes those
  class properties in one step.

Example:

```typescript
constructor(public name: string, private _baseSalary: number) {}
```

4. Getter (Accessor):

- Getter means "Accessor" (used to access, read, or return data).
- Defined using the 'get' keyword and does not take any parameters.
- Allows us to read or calculate values from a private property.
- Accessed like a normal property without parentheses '()'.

Examples in our code:
- employee.baseSalary      -> Returns current _baseSalary (23000).
- employee.salaryWithBonus -> Adds 9500 to _baseSalary and returns 32500.
- employee.SalaryIncrement -> Multiplies _baseSalary by 1.5 and returns 48750.

Note on '+=' and '*=' inside Getters:
- Because '+= 9500' and '*= 1.5' are used here, accessing these getters
  also updates the original 'this._baseSalary' value step by step
  (23000 -> 32500 -> 48750).
- If you only want to calculate the bonus or increment without changing
  the original baseSalary, use '+' and '*' instead of '+=' and '*='.

5. Setter (Mutator):

- Setter means "Mutator" (used to set, mutate, or update data).
- Defined using the 'set' keyword and takes one parameter (the new value).
- Allows us to update a private property in a controlled way.
- Used like a normal property by assigning a value with '='.

Example in our code:

```typescript
employee.baseSalary = 23000; // Calls the setter and updates _baseSalary from 22300 to 23000.
```

Important Differences:

- public        -> Accessible from anywhere (inside and outside the class).
- private       -> Accessible ONLY within the same class.
- protected     -> Accessible within the same class and its child classes.
- readonly      -> Can be read, but cannot be modified after initialization.
- Getter (get)  -> Accessor: Returns the value of a property.
- Setter (set)  -> Mutator: Sets or updates the value of a property.

Remember:

- Encapsulation = Putting related stuff together + Hiding important information.
- Use 'private' to hide internal data (like _baseSalary).
- Getter = Accessor (reads data), Setter = Mutator (updates data).
- Call getters and setters like normal properties, NOT like methods ().

**03-Inheritance.ts**

Inheritance (extends, super, protected & Validation)

1. What is Inheritance?

- Inheritance is an OOP pillar that allows one class (Child/Subclass) to
  inherit properties and methods from another class (Parent/Superclass).
- It helps us reuse existing code instead of writing the same properties
  and methods again from scratch.

Example in our code:
- Parent Class (Superclass) : Employee
- Child Class (Subclass)    : Manager
- A Manager is also an Employee, so Manager gets 'name', '_baseSalary',
  getters, setters, and 'describe()' automatically from Employee, while
  adding its own unique property ('teamMemberCount') and methods.

2. The 'extends' Keyword:

- We use the 'extends' keyword to create a child class from a parent class.
- Syntax: class ChildClass extends ParentClass {}

Example:

```typescript
class Manager extends Employee { ... }
```

Here:
- Manager inherits all public and protected features of Employee.
- That is why we can call 'manager.describe()' and 'manager.baseSalary'
  even though they were written inside Employee.

3. The 'super()' Keyword:

- 'super()' is used inside a child class constructor to call the parent
  class constructor.
- It passes the shared arguments (like 'name' and '_baseSalary') up to
  the parent class so the parent can initialize them.
- Important Rule: In a child class constructor, you must call 'super()'
  before using the 'this' keyword.

Example:

```typescript
constructor(name: string, _baseSalary: number, public teamMemberCount: number) {
  super(name, _baseSalary);
}
```

Here:
- 'name' and '_baseSalary' have no 'public'/'protected' modifier in Manager's
  constructor because they already exist in Employee; we just pass them
  to 'super(name, _baseSalary)'.
- 'public teamMemberCount: number' has 'public' because it is a brand-new
  property created specifically for the Manager class.

4. Why change '_baseSalary' from 'private' to 'protected'?

- Look at 'describeManager()' inside the Manager class:
  return `${this.name} earns ${this._baseSalary}`;
- Notice we used 'this._baseSalary' (with the underscore) instead of the
  getter 'this.baseSalary'.
- When '_baseSalary' was 'private' and we commented out 'get baseSalary()',
  Manager could not access the salary at all because 'private' properties
  are locked inside Employee only.
- By changing it to 'protected _baseSalary', it stays hidden from outside
  objects, but both Employee (parent) and Manager (child) can directly
  access 'this._baseSalary' inside their methods—even without a getter!

5. Validation inside Setter (set baseSalary):

- One major benefit of using a Setter is that we can validate new data
  before saving it.
- In our setter, 'if (newSalary < 0)' checks if someone tries to set a
  negative salary and throws an error to protect the object from invalid data.

Example:

```typescript
set baseSalary(newSalary: number) {
  if (newSalary < 0) {
    throw new Error("Salary cannot be negative value");
  }
  this._baseSalary = newSalary;
}
```

Important Differences:

- Parent Class (Employee) -> Base class that holds common properties/methods.
- Child Class (Manager)   -> Extended class that inherits from Parent and adds extra features.
- extends                 -> Connects the Child class to the Parent class.
- super()                 -> Calls the Parent class constructor from the Child class.
- private                 -> Accessible ONLY in the Parent class (not in Child class).
- protected               -> Accessible in both Parent class and Child class (but not outside).

Remember:

- Inheritance = Reusing properties and methods from a Parent class in a Child class.
- Use 'extends' to inherit from a class, and call 'super()' inside the child constructor.
- Do not re-declare parent modifiers (like 'public name') in the child constructor; just pass them to 'super()'.
- Use 'protected' instead of 'private' when child classes also need direct access to a property (like 'this._baseSalary').

**04-Polymorphism.ts**

Polymorphism (Method Overriding & the 'override' Keyword)

1. What is Polymorphism?

- "Poly" means "Many" and "Morph" means "Forms" -> "Many Forms".
- In OOP, Polymorphism allows different classes to share the exact same
  method name, while each class implements its own unique calculation or behavior.

Example in our code:
We have one method name—'calculatePay()'—working in three different forms:
- Employee.calculatePay(0.1)   -> Deducts 10% tax from base salary (22,500).
- Manager.calculatePay()       -> Adds a flat 5,000 bonus with no tax (30,000).
- Developer.calculatePay(0.10) -> Adds a 4,000 bonus and deducts 10% tax (26,500).

2. Method Overriding:

- Method Overriding is how we achieve Polymorphism in classes.
- It happens when a Child Class (Manager or Developer) rewrites a method
  that already exists in the Parent Class (Employee) with the same name.

3. What does the 'override' Keyword do?

- Writing 'override' before a method name in a child class is a TypeScript
  safety feature.
- It tells TypeScript: "Make sure a method with this exact name exists in
  the Parent class (Employee)."
- Why is it helpful?
  If we accidentally misspell the method name in the child class (for example,
  writing 'calculatePays()' instead of 'calculatePay()'), the 'override'
  keyword will immediately show an error and save us from bugs!

4. Why can 'Manager.calculatePay()' drop the 'taxRate' parameter?

- Look at the commented-out Manager code: originally it had 'calculatePay(taxRate: number)',
  even though 'taxRate' was never used inside the calculation.
- In TypeScript/JavaScript, a child method is allowed to take FEWER parameters
  than the parent method if it does not need them.
- However, a child method cannot require MORE mandatory parameters than the
  parent method (because that would break Polymorphism).

5. Why does 'Developer' have a Constructor, while 'Manager' does not?

- Manager does not introduce any new properties; it only uses 'name' and
  '_baseSalary' from Employee. So TypeScript automatically reuses Employee's constructor.
- Developer introduces a brand-new property ('public type: string', e.g., "Full Stack").
  Because of this extra property, Developer needs its own constructor and must
  call 'super(name, _baseSalary)' to pass the parent properties up to Employee.

Important Differences:

- Inheritance       -> Child class uses the Parent's method without changing it.
- Polymorphism      -> Multiple classes share the same method name, but each behaves differently.
- Method Overriding -> Rewriting a parent method inside a child class to change its behavior.
- override keyword  -> Checks that the method being overridden actually exists in the parent class.

Remember:

- Polymorphism = Same method name ('calculatePay'), different behaviors across classes.
- Use the 'override' keyword when rewriting a parent method in a child class to prevent typos.
- A child class only needs a constructor + 'super()' if it adds new properties of its own (like Developer).
- An overridden method in a child class can omit parameters it does not use (like 'taxRate' in Manager).

**05-Abstraction.ts**

Abstraction in TypeScript OOP

1. What is Abstraction?

- Abstraction is the process of hiding the internal implementation details
  and showing only the essential functionality (method structure) to the user.
- Instead of saying HOW a task is done, an abstract parent class only says
  WHAT task must be done, leaving the actual calculation to the child classes.

Example in our code:
Every Employee must have a way to calculate their pay ('calculatePay()'),
but a generic "Employee" does not have a fixed formula. So Employee defines
'abstract calculatePay(): number;' without a body, forcing Manager and
Developer to provide their own implementation details.

2. Two Ways to Achieve Abstraction in TypeScript:

- Just like in Java, there are two ways to achieve abstraction in TypeScript:
  1. Abstract Class (using the 'abstract class' keywords) -> Partial to full abstraction.
  2. Interface (using the 'interface' keyword) -> 100% abstraction (contains no method bodies or constructors).

3. Key Rules of an Abstract Class:

- Declared with 'abstract':
  We use the 'abstract' keyword before the 'class' keyword (e.g., abstract class Employee).

- If there is an abstract method, the class MUST be abstract:
  You cannot put an abstract method inside a normal class.

- What an Abstract Class can contain:
  An abstract class can have:
  * Data members (properties like 'name' and '_baseSalary')
  * A 'constructor' to initialize those properties
  * Normal (non-abstract) methods with bodies (like getters, setters, or helper methods)
  * Abstract methods without bodies (like 'abstract calculatePay(): number;')

- Cannot be instantiated directly:
  We cannot create an object directly from an abstract class using 'new'
  (writing 'new Employee()' gives an error). It acts strictly as a base blueprint.

- Needs to be extended:
  To use an abstract class, we must create a child class using 'extends'
  (e.g., class Manager extends Employee).

- Child class MUST implement abstract methods:
  Any child class that extends an abstract class must write the body/logic
  for all inherited abstract methods. (That is why if we uncomment
  'abstract getResources(): string[];', both Manager and Developer must implement it).

Important Differences:

- Normal Class      -> Can create objects with 'new'; cannot have abstract methods.
- Abstract Class    -> Cannot create objects with 'new'; can have constructors, properties, normal methods, and abstract methods (used with 'extends').
- Interface         -> Cannot have constructors or method bodies at all; only defines structure (used with 'implements').
- Normal Method     -> Has both a declaration and a body '{ ... }'.
- Abstract Method   -> Has only a declaration (name, parameters, return type) and NO body.

Remember:

- Abstraction = Hiding implementation details and showing only the functionality.
- Two ways to achieve abstraction: Abstract Class and Interface.
- If a class contains even one abstract method, the class must be marked as 'abstract'.
- Abstract classes can have constructors, properties, normal methods, and abstract methods.
- You cannot use 'new' on an abstract class; you must 'extend' it and implement its abstract methods in the child class.

**06-minidom-oop.ts**

Building a UI Component System using Abstract Classes & Polymorphism

1. Role of the Abstract Class (UIElement):

- 'UIElement' acts as a strict contract and template for all UI components.
- By marking it as 'abstract', we ensure that no one can accidentally create a generic
  'new UIElement()' directly; every element must be a specific component like Input, Button, or Form.
- The 'protected id: string' property ensures that child classes can easily access the element's ID.

2. Role of the Abstract Method (render):

- 'abstract render(): string;' declares that every UI element must know how to turn itself into an HTML string.
- It doesn't provide a body here because an Input renders differently than a Button or a Form.

3. Polymorphism and Composition in 'Form':

- Look at the 'Form' class:
  private children: UIElement[] = [];
- Because 'children' accepts the abstract type 'UIElement[]', the Form can hold Inputs,
  Buttons, or even other nested Forms inside it (Composition).
- Inside the Form's 'render()' method:
  this.children.map((child) => child.render())
- This is pure **Polymorphism**: the Form doesn't need to check whether a child is an Input or a Button;
  it simply calls '.render()' on each child, and TypeScript automatically executes the correct
  version of 'render()' for that specific object!

4. The 'super()' Call in Subclasses:

- Every subclass (Input, Button, Form) must call 'super(id)' inside its constructor to initialize
  the parent's 'id' property.

Important Concepts Used Here:

- Abstract Classes -> Prevents direct instantiation and enforces shared structure.
- Abstract Methods -> Forces child classes to implement specific behavior.
- Inheritance      -> Child classes inherit common properties (like 'id') from UIElement.
- Polymorphism     -> A uniform method call ('render()') behaves differently depending on the object type.
- Composition      -> Building complex objects (Form) by combining simpler objects (Input, Button).

Remember:

- Use Abstract Classes when you are building a family of related classes that share common behavior and rules.
- Polymorphism makes your UI rendering engine extremely flexible and scalable—adding a new component
  (like a 'Checkbox' or 'Dropdown') only requires creating a new class that extends 'UIElement'.

**07-utility-classes.ts**

TypeScript Utility Types Explained

1. What are Utility Types?

- Utility types are built-in generic helper tools provided by TypeScript.
- They allow us to transform, modify, or extract properties from existing interfaces
  without having to rewrite new types from scratch.

2. Breakdown of the 5 Utility Types used here:

  A. Partial<T>:
  - Makes **all** properties of an interface optional by adding a question mark (?).
  - Perfect for update/PATCH requests where users can send any combination of fields.

  B. Required<T>:
  - Makes **all** optional properties mandatory by removing the question mark (?).
  - Perfect for initialization logic where every configuration value is strictly required.

  C. Pick<T, K>:
  - Extracts/keeps **only** the specified keys from type T.
  - Useful when you need a smaller subset of a large interface (e.g., product card preview).

  D. Omit<T, K>:
  - Excludes/removes the specified keys from type T.
  - Useful for hiding sensitive information (like salary, passwords, or NIDs) from public views.

  E. Record<K, T>:
  - Maps a set of string literal keys (K) to a specific value type (T).
  - Extremely useful for mapping configurations, environment URLs, or role-based permissions.

Important Differences:

- Partial vs Required -> Partial makes everything optional; Required makes everything mandatory.
- Pick vs Omit       -> Pick keeps only the selected keys; Omit removes the selected keys.
- Record             -> Creates mapped dictionary-like object types based on union keys.

Remember:

- Utility types keep your codebase DRY (Don't Repeat Yourself) by deriving new types from existing ones.
- They exist purely at the TypeScript compile level and add zero runtime overhead in JavaScript.





//* Real-world Example: Abstract Class & Polymorphism for UI Rendering

// 1. Abstract Base Class: Defines the general blueprint for all UI elements
abstract class UIElement {
  // 'protected' allows subclasses (Input, Button, Form) to access 'id directly
  constructor(protected id: string) {}

  // Abstract Method: Forces every UI element to implement its own 'render' logic
  abstract render(): string;
}

// 2. Concrete Subclass: Input Element
class Input extends UIElement {
  constructor(
    id: string,
    private type: string,
    private placeholder: string,
  ) {
    super(id); // Passes the 'id' to the parent abstract class constructor
  }

  // Implementing the abstract render method
  render(): string {
    return `<input id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}"/>`;
  }
}

// 3. Concrete Subclass: Button Element
class Button extends UIElement {
  constructor(
    id: string,
    private label: string,
  ) {
    super(id);
  }

  render(): string {
    return `<button id="${this.id}">${this.label}</button>`;
  }
}

// 4. Concrete Subclass: Form Element (Composite Pattern concept)
class Form extends UIElement {
  // Holds a list of child UI elements (can be Input, Button, or even another Form!)
  private children: UIElement[] = [];

  appendChild(child: UIElement): void {
    this.children.push(child);
  }

  render(): string {
    // Polymorphism in action: calling .render() on every child regardless of its actual type
    const childrenHTML = this.children
      .map((child) => child.render())
      .join("\n ");

    return `<form id="${this.id}" style="border: 1px solid #ccc; padding: 20px; display: flex; flex-direction: column; max-width:300px; border-radius:10px; gap:5px;">\n ${childrenHTML} \n</form>`;
  }
}

// --- Usage & Testing ---

const formElement = new Form("login-form");

const nameInput = new Input("name", "text", "Enter your name");
const emailInput = new Input("email", "email", "Enter your email");
const passwordInput = new Input("pass", "password", "Enter your password");
const submitButton = new Button("submit-btn", "Submit");

// Appending children to the form container
formElement.appendChild(nameInput);
formElement.appendChild(emailInput);
formElement.appendChild(passwordInput);
formElement.appendChild(submitButton);

// Logs the generated HTML string to the console
console.log(formElement.render());

// Safely injecting the HTML into a DOM element in a browser environment
const rootElement = document.getElementById("root");

if (rootElement) {
  rootElement.innerHTML = formElement.render();
}

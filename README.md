# Customer Support Client

A React-based customer support application built with Vite.

## React Q&A Guide

### 1. What is JSX, and why is it used?

JSX is a syntax extension for JavaScript that looks like HTML/XML. It allows you to write UI elements in a familiar HTML-like syntax within JavaScript. It's used because it makes code more readable and maintainable, and it gets compiled to regular JavaScript function calls (`React.createElement()`).

**Example:**
```jsx
const element = <h1>Hello, {name}!</h1>;
```

---

### 2. What is the difference between State and Props?

| Feature | State | Props |
|---------|-------|-------|
| **Definition** | Data managed internally by a component | Data passed from parent component |
| **Mutability** | Mutable (can change) | Immutable (read-only) |
| **Scope** | Local to the component | Passed down to child components |
| **Updates** | Triggers re-render | Cannot be modified by child |

---

### 3. What is the useState hook, and how does it work?

`useState` is a React hook that lets you add state to functional components. It returns an array with two elements: the current state value and a function to update it.

**Syntax:**
```jsx
const [value, setValue] = useState(initialValue);
```

**Example:**
```jsx
const [count, setCount] = useState(0);

return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
```

---

### 4. How can you share state between components in React?

**Method 1: Lifting State Up**
Move state to a common parent component and pass it down via props to child components.

**Method 2: Context API**
Create a context to share state across multiple components without prop drilling.

**Method 3: State Management Libraries**
Use Redux, Zustand, or Recoil for more complex state management.

---

### 5. How is event handling done in React?

Event handling uses camelCase event names as JSX attributes. You pass a function reference or arrow function to handle events.

**Examples:**
```jsx
// Function reference
<button onClick={handleClick}>Click me</button>

// Arrow function
<button onClick={() => setCount(count + 1)}>Increase</button>

// Form input
<input onChange={(e) => setText(e.target.value)} />

// Event object
const handleClick = (e) => console.log(e.target);
```

React uses event delegation for optimal performance.

---

## Getting Started

```bash
npm install
npm run dev
```

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **DaisyUI** - UI components
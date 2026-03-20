# Customer Support Client


### 1. What is JSX, and why is it used?

JSX is the short form of javascript XML. XML allow to write html elements within javascript and it make code more readable and efficient. 

---

### 2. What is the difference between State and Props?

**Difference**
*State*: Help to managing the changeable data and tiggered re-renders
*Props*: Help to pass data from parent to child components and don't allow child to parent.

---

### 3. What is the useState hook, and how does it work?

`useState` is a React hook to manage the state of a react component and its return an array. 

**Syntax:**
```jsx
const [value, setValue] = useState(initialValue);
```

---

### 4. How can you share state between components in React?

**Lifting state up**: Declare the state on a common parent component and pass sate to child through the props

**Context API**: Context api can accessable globally without drilling props

**State Libraries**: Example Redux

---

### 5. How is event handling done in React?

Event handling uses camelCase event names as JSX attributes. You pass a function reference or arrow function to handle events.

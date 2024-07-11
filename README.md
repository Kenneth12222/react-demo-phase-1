
---

# React Beginner Tutorial: Demo Project

## Getting Started with React

### Step 1: Install Node.js and npm

First, ensure you have Node.js and npm (Node Package Manager) installed on your computer. You can download and install them from [the official Node.js website](https://nodejs.org/).

### Step 2: Create a New React App

Use Create React App to set up a new React project. Open your terminal and run the following commands:

```bash
npx create-react-app demo-app
cd demo-app
npm start
```

- `npx create-react-app demo-app`: This command creates a new React application named `demo-app`.
- `cd demo-app`: This command navigates into the newly created `demo-app` directory.
- `npm start`: This command starts the development server and opens the React application in your default web browser.

Now you should see your React application running on `http://localhost:3000`.

## Building the Demo Project

### Step 3: Project Structure

Your project directory should look like this:

```
demo-app/
├── node_modules/
├── public/
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

### Step 4: Create Components

Let's create a simple React project with two components: `Navbar` and `Demo`.

### Step 5: Modify `App.js`

Open the `src/App.js` file and replace its contents with the following code:

```jsx
import React from "react";
import './App.css';
import Navbar from "./Navbar";
import Demo from './Demo';

function App () {
  return (
    <>
      <Navbar />
      <Demo />
    </>
  )
}

export default App;
```

### Step 6: Create `Navbar` Component

Create a new file named `Navbar.js` in the `src` directory with the following content:

```jsx
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Logo</h1>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Service</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
```

### Step 7: Create `Demo` Component

Create another file named `Demo.js` in the `src` directory with the following content:

```jsx
import React from 'react';

function Demo() {
  return (
    <div className="Hero">
      <div className="content">
        <h1>Hello, I am learning React</h1>
      </div>
    </div>
  );
}

export default Demo;
```

### Step 8: Style the Components

Open the `src/App.css` file and add the following styles:

```css
/* App.css */
.App {
  text-align: center;
}

.navbar {
  background-color: #333;
  padding: 1rem;
  color: white;
}

.navbar .logo {
  font-size: 1.5rem;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.Hero {
  background-color: #f5f5f5;
  padding: 2rem;
}

.Hero .content {
  max-width: 600px;
  margin: 0 auto;
}

.Hero h1 {
  font-size: 2rem;
  color: #333;
}
```

### Step 9: Explanation of Code

#### Full Code of `App.js`

```jsx
import React from "react";
import './App.css';
import Navbar from "./Navbar";
import Demo from './Demo';

function App () {
  return (
    <>
      <Navbar />
      <Demo />
    </>
  )
}

export default App;
```

#### Breakdown

##### Import Statements

```jsx
import React from "react";
import './App.css';
import Navbar from "./Navbar";
import Demo from './Demo';
```

- `import React from "react";`: This line imports the React library. React is necessary to create React components and to use JSX syntax. It allows you to write HTML-like code within JavaScript.
- `import './App.css'`: This line imports the CSS file for the `App` component. The styles defined in `App.css` will be applied to this component.
- `import Navbar from "./Navbar";`: This line imports the `Navbar` component from the `Navbar.js` file, allowing you to use `<Navbar />` within this file.
- `import Demo from './Demo';`: This line imports the `Demo` component from the `Demo.js` file, allowing you to use `<Demo />` within this file.

##### Function Definition and Export

```jsx
function App () {
  return (
    <>
      <Navbar />
      <Demo />
    </>
  )
}

export default App;
```

- `function App () {`: This line defines a functional component called `App`. In React, a functional component is a JavaScript function that returns JSX.
- `return ( ... )`: The `return` statement specifies what the component will render. In this case, it returns some JSX.

##### JSX Return

```jsx
  return (
    <>
      <Navbar />
      <Demo />
    </>
  )
```

- `<></>`: This is a React fragment, which allows you to group multiple elements without adding extra nodes to the DOM. It’s a shorthand for `<React.Fragment></React.Fragment>`.
- `<Navbar />`: This renders the `Navbar` component. When React sees this, it will include the output of the `Navbar` component here.
- `<Demo />`: This renders the `Demo` component. When React sees this, it will include the output of the `Demo` component here.

##### Export Statement

```jsx
export default App;
```

- `export default App;`: This line exports the `App` component as the default export of the module. It allows other files to import the `App` component using `import App from './App';`.

## Conclusion

You have now created a basic React application, set up a project, and learned how to create and use components. You also understand how to style your components and how everything fits together in a React application. This is a solid foundation to start exploring more advanced concepts in React and build more complex applications.
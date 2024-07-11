
### `App.js`

```javascript
import React from "react"; // Import the React library, which is necessary to create React components.
import './App.css'; // Import the CSS file for styling the App component.
import Navbar from "./Navbar"; // Import the Navbar component from the Navbar.js file.
import Demo from './Demo'; // Import the Demo component from the Demo.js file.

function App () { // Define a functional component called App.
  return ( // The return statement defines what the App component will render.
    <>
      <Navbar /> {/* Render the Navbar component. or think of this like props gatway that uses */}
      <Demo /> {/* Render the Demo component. */}
    </>
  )
}

export default App; // Export the App component as the default export so it can be imported in other files.
```

### `Demo.js`

```javascript
import React from 'react'; // Import the React library.

function Demo() { // Define a functional component called Demo.
    return ( // The return statement defines what the Demo component will render.
        <>
         <div className="Hero"> {/* A div element with a class name "Hero" for styling purposes. */}
           <div className="content"> {/* A nested div with a class name "content" for further styling. */}
             <h1>Hello am learning React</h1> {/* An h1 element with some text content. */}
           </div>
         </div>
        </>
    )
}

export default Demo; // Export the Demo component as the default export.
```

### `Navbar.js`

```javascript
import React from "react"; // Import the React library.

function Navbar() { // Define a functional component called Navbar.
    return ( // The return statement defines what the Navbar component will render.
        <>
            <nav className="navbar"> {/* A nav element with a class name "navbar" for styling purposes. */}
                <h1 className="logo">Logo</h1> {/* An h1 element with a class name "logo" displaying the text "Logo". */}
                <ul> {/* An unordered list element. */}
                    <li><a href='#'>Home</a></li> {/* A list item with an anchor tag linking to "#" and displaying the text "Home". */}
                    <li><a href='#'>About</a></li> {/* A list item with an anchor tag linking to "#" and displaying the text "About". */}
                    <li><a href='#'>Service</a></li> {/* A list item with an anchor tag linking to "#" and displaying the text "Service". */}
                    <li><a href='#'>Contact</a></li> {/* A list item with an anchor tag linking to "#" and displaying the text "Contact". */}
                </ul>
            </nav>
        </>
    )
}

export default Navbar; // Export the Navbar component as the default export.
```

### Explanation

1. **React Imports**: Each file begins by importing the React library, which is essential for creating React components and using JSX syntax.

2. **App Component**:
   - The `App` component imports necessary CSS and two other components: `Navbar` and `Demo`.
   - Inside the `App` component, the `return` statement uses JSX to render the `Navbar` and `Demo` components.
   - This component is then exported so it can be used elsewhere in the application, typically as the root component.

3. **Demo Component**:
   - The `Demo` component contains a simple structure with a `div` element having the class name "Hero" and another nested `div` with the class name "content".
   - Inside the nested `div`, there is an `h1` element that displays a text message.
   - This component is also exported for use in other parts of the application.

4. **Navbar Component**:
   - The `Navbar` component creates a navigation bar structure with a `nav` element containing a `h1` element for the logo and an unordered list (`ul`) with list items (`li`), each containing an anchor tag (`a`) for navigation links.
   - This component is exported for use in other parts of the application.

### Additional Notes

- **JSX**: The syntax used within the `return` statements of each component is JSX, a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.
- **Fragments (`<>...</>`)**: These are used to group multiple elements without adding extra nodes to the DOM.
- **Class Names**: The class names (e.g., `className="navbar"`) are used for applying CSS styles defined in the imported CSS files.
- **Functional Components**: All components here are functional components, which are simpler and more concise compared to class components, especially for components that only render UI and do not need to manage state or lifecycle methods.

This breakdown provides a deeper understanding of each line of code and its purpose within the context of a React application.
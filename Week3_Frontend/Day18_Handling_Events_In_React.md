event handling in react vs html/vanilla js

camelCase naming:
- HTML - onclick
- React - onClick
- HTML - onmouseover
- React - onMouseOver

pass a function: with jsx, you pass a function as the event handler rather than a string.

- HTML: <button onclick="handleClick()">Click Me</button>
- React: <button onClick={handleClick}>Click Me</button>

preventing default behavior: you can't return false from an event handler. you must call event.preventDefault() explicitly.

common DOM events in react:
- onClick, onDoubleClick
- onMouseDown, onMouseUp, onMouseMove, onMouseEnter, onMouseLeave, onMouseOver
- onChange
- onSubmit
- onKeyDown, onKeyPress, onKeyUp
- onFocus, onBlur


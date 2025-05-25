props is short for properties.

props are how you pass data from a parent component to a child component

props are read only within the child component

props can be any js data type: strings, numbers, booleans, arrays, objects, function, etc.

state is data that a component manages itself.

unlike props, state is internal to a component and can be changed by the component.

state is what makes your components interactive and dynamic.

you manage state with a Hook called useState.

useState() takes one argument - the initial value of the state

useState() returns an array with two elements. the current state value and a function to update that state value.

use array destructuring to get these two elements.

example:
const [count, setCount] = useState(0)

here, 'count' is the state variable, initialized to 0
'setCount' is the function used to update 'count'
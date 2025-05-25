useState() and useEffect()

rules of hooks 
1. only call hooks at the top level
2. only call hooks from react functions

useState() - to declare a "state variable" in a functional component

syntax: const [stateVariable, setStateVariable] = useState(initialValue);

useEffect() - provides a way to perform side effects from functional components.

syntax: useEffect(setupFunction, dependencyArray);

setupFunction - the function that contains your side effect code.

dependencyArray - this array tells react when to re-run the setupFunction
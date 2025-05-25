What is JSX (Javascript XML)

simply a file that looks like HTML-in-JavaScript

JSX is not html but looks like it.

it is transpiled by babel during create-react-app

you can embed any valid js expression within jsx by wrapping it in {}

attributes in jsx are camelCased.

there are two types of components.

1. functional components
    - literally js functions
    - accept an optional object of "props"
    - returns jsx that describes what the ui should look like
    - simpler and more common way to write components
2. class components
    - these are es6 classes that extend react.component
    - the have a render() method that returns jsx


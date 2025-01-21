# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly specifying the dependency array. 

## Bug Description

The `useEffect` hook in `bug.js` attempts to increment the `count` state variable in every render, leading to an infinite loop.  The dependency array `[]` indicates that the effect should run only once after the initial render, however, it changes `count` state and it causes the component to re-render and it causes the effect to be called again. 

## Bug Solution

The solution, in `bugSolution.js`, removes the problematic dependency, or adds `count` to the dependency array to fix the error.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe the infinite loop in the console (the browser might freeze).  Then see how the solution fixes the issue.
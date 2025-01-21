```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct approach if the effect should only run once after mount
    // setCount(count + 1); //this will only run once, but not appropriate for this example
  }, []);

  useEffect(() => {
    // Correct solution 1: add count to dependency array to trigger only on count change
    console.log("Count changed to:", count); 
  }, [count]);

  //Correct Solution 2: use setInterval or setTimeout 
  useEffect(() => {
    const intervalID = setInterval(() => {
        setCount(prevCount => prevCount +1);
    }, 1000)
    return () => clearInterval(intervalID);
  }, []);

  return <div>Count: {count}</div>;
}```
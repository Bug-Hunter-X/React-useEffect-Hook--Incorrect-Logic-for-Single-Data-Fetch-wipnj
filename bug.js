```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic to fetch data only once
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        setCount(data.count); // Using count from fetched data
      });
  }, []);

  return (
    <div>
      <p>Count: {count}</p> 
    </div>
  );
}
```
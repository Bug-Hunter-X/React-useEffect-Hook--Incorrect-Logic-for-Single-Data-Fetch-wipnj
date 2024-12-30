```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setCount(data.count);
      } finally {
        setIsLoading(false);
      }
    };

    if (isLoading) {
      fetchData();
    }
  }, [isLoading]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```
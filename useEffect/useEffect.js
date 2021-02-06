function App() {
  const sayHello = () => console.log("say Hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(() => {
    sayHello();
  }, [number, aNumber]);
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}

return (
    <div className="App">
        <div>Hi</div>
        <button onClick={() => setNumber(number+1)}></button>
    </div>
)

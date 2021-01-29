const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
      const {
        target: { value }
      } = e;
      let willUpdate = true;
      if (typeof validator === "function") {
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    };
    return { value, onChange };
  };
  function App() {
    const maxLen = (value) => !value.includes("@");
    const name = useInput("Mr.", maxLen);
    return (
      <div className="App">
        <h1>hello </h1>
        <input placeholder="Name" {...name} />
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  
const useNetwork = (onchange) => {
    const [status, setStatus] = useState(navigator.onLine); // true 또는 false
    const handleChange = () => {
      if (typeof onChange === "function") {
        onchange(navigator.onLine);
      }
      setStatus(navigator.onLine);
    };
    useEffect(() => {
      window.addEventListener("online", handleChange);
      window.addEventListener("offline", handleChange);
      () => {
        window.removeEventListener("online", handleChange);
        window.removeEventListener("offline", handleChange);
      };
    }, []);
    return status;
  };
  
  const App = () => {
    const handleNetworkChange = (online) => {
      console.log(online ? "we went online" : "offline");
    };
    const onLine = useNetwork(handleNetworkChange);
    return (
      <div className="App">
        <h1>{onLine ? "Online" : "Offline"}</h1>
      </div>
    );
  };
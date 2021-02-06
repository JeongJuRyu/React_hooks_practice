//마우스가 창 위쪽으로 벗어난 경우에 콘솔에 메세지 출력
const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
      return;
    }
    const handle = (e) => {
      const { clientY } = e;
      if (clientY <= 0) {
        onBefore();
      }
    };
    useEffect(() => {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }, []);
  };
  
  const App = () => {
    const begForLife = () => console.log("please don't leave");
    useBeforeLeave(begForLife);
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  };
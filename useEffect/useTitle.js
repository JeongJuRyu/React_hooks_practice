const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
  };
  function App() {
    const titleUpdater = useTitle("loading...");
    setTimeout(() => titleUpdater("home"), 500);
    return (
      <div className="App">
        <div>hi</div>
      </div>
    );
  }

  const useTitle = (initialTitle) => {
      const [title, setTitle] = useState(initialTitle);
      const updateTitle = () => {
          const htmlTitle = document.querySelector('title');
          htmlTitle.innerText = title;
      };
      useEffect(updateTitle, [title]);
      return setTitle;
  }
function App(){
    const titleUpdator = useTitle('loading..');
    setTimeout(()=> titleUpdator('home'), 500);
    return (
        <div className="App">
            <div>hi</div>
        </div>
    )
}
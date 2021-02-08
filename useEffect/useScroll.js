const useScroll = () => {
    const [state, setState] = useState({
        x:0,
        y:0,
    });
    const onScroll = (e) => {
        console.log(e);
    }
    useEffect(()=> {
        window.addEventListener('scroll', onScroll);
        return () =>  window.removeEventListener('scroll', onscroll);
    }, [])
    return state;
}

const App = () => {
    const {y} = useScroll();
    return (
        <div className="App" style = {{height:"1000vh"}}>
            <h1 style={{position : 'fixed', color : y > 100 ? "blue" : "red"}}>hello</h1>
        </div>
    )
}
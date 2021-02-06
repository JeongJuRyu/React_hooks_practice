//창을 닫을 때 경고 메시지가 뜨도록 함

const usePreventLeave = () => {
    const listener = (e) => {
        e.preventDefault();
        e.returnValue = '';
    }
    const enablePrevent=() => {
        window.addEventListener('beforeunload', listener);
    }
    const disablePrevent=() => {
        window.removeEventListener('beforeunload',listener)
    }
    return {enablePrevent, disablePrevent};
}

const App = () => {
    const {enablePrevent, disablePrevent} = usePreventLeave();
    return <div className = 'App'>
        <button onClick={enablePrevent}>protect</button>
        <button onClick={disablePrevent}>unprotect</button>
    </div>
}
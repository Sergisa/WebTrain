function NavigationBar() {
    // TODO: Actually implement a navigation bar
    return <h1>Hello from React!</h1>;
}
function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}

const domNode = document.getElementById('navigation');
//const root = ReactDOM.createRoot(domNode);
//root.render(<MyApp/>);

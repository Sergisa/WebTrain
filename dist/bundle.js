function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return /*#__PURE__*/React.createElement("h1", null, "Hello from React!");
}
function MyButton() {
  return /*#__PURE__*/React.createElement("button", null, "I'm a button");
}
export default function MyApp() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Welcome to my app"), /*#__PURE__*/React.createElement(MyButton, null));
}
const domNode = document.getElementById('navigation');
//const root = ReactDOM.createRoot(domNode);
//root.render(<MyApp/>);
const root = ReactDOM.createRoot(document.getElementById('root'));
function tick() {
  const element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello, world!"), /*#__PURE__*/React.createElement("h2", null, "It is ", new Date().toLocaleTimeString(), "."));
  root.render(element);
}
setInterval(tick, 1000);
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u0435\u043B"), /*#__PURE__*/React.createElement(TodoList, {
      items: this.state.items
    }), /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "new-todo"
    }, "\u0427\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C?"), /*#__PURE__*/React.createElement("input", {
      id: "new-todo",
      onChange: this.handleChange,
      value: this.state.text
    }), /*#__PURE__*/React.createElement("button", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C #", this.state.items.length + 1)));
  }
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}
export { TodoApp };
class TodoList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("ul", null, this.props.items.map(item => /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.text)));
  }
}

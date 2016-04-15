export default class SignatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', title: '', email: ''};
    this.field = this.props.field
  }
  handleValueChange(e) {
    const value = e.target.value;
    let { name, title, email } = this.state;
    let content = { name: name, title: title, email: email };
    let newState = {};
    newState[this.field] = value
    this.setState(newState);
    this.enterContent(content);
  }
  enterContent(obj) {
    this.props.contentEntered(obj);
  }
  render() {
    return (
      <div className="form-group">
        <label htmlFor={"input-" + this.field}>{this.field}</label>
        <input
          type="text"
          placeholder={"Your " + this.field}
          value={this.state[this.field]}
          onChange={this.handleValueChange.bind(this)}
          className="form-control"
          id={"input-" + this.field }
        />
      </div>
    )
  }
}

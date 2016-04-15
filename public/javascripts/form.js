export default class SignatureForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {name: '', title: '', email: ''};
  }
  handleNameChange(e) {
    const value = e.target.value;
    const { name, title, email }  = this.state;
    this.setState({name: value})
    this.enterContent({name: value, title: title, email: email});
  }
  handleTitleChange(e) {
    const value = e.target.value;
    const { name, title, email }  = this.state;
    this.setState({title: value})
    this.enterContent({name: name, title: value, email: email});
  }
  handleEmailChange(e) {
    const value = e.target.value;
    const { name, title, email }  = this.state;
    this.setState({email: value})
    this.enterContent({name: name, title: title, email: value});
  }
  enterContent(obj) {
    this.props.contentEntered(obj);
  }
  render() {
    return (
      <div className="purple-box u-padding-Al">
        <form>
          <div className="form-group">
            <label htmlFor="input-name">Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={this.state.name}
              onChange={this.handleNameChange.bind(this)}
              className="form-control"
              id="input-name"
              />
          </div>

          <div className="form-group">
            <label htmlFor="input-title">Title</label>
            <input
              type="text"
              placeholder="Your Title"
              value={this.state.title}
              onChange={this.handleTitleChange.bind(this)}
              className="form-control"
              id="input-title"
              />
          </div>

          <div className="form-group">
            <label htmlFor="input-email">Email</label>
            <input
              type="text"
              placeholder="Your Email"
              value={this.state.email}
              onChange={this.handleEmailChange.bind(this)}
              className="form-control"
              id="input-email"
              />
          </div>
        </form>
      </div>
    )
  }
};

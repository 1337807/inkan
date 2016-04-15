class SignatureForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {name: '', title: '', email: ''};
  }
  handleNameChange(e) {
    var value = e.target.value;
    var title = this.state.title
    var email = this.state.email
    this.setState({name: value})
    this.enterContent({name: value, title: title, email: email});
  }
  handleTitleChange(e) {
    var value = e.target.value;
    var name = this.state.name
    var email = this.state.email
    this.setState({title: value})
    this.enterContent({name: name, title: value, email: email});
  }
  handleEmailChange(e) {
    var value = e.target.value;
    var name = this.state.name
    var title = this.state.title
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

class SignatureOutput extends React.Component {
  render() {
    return (
      <div className="signature-output">
        <h1>Result</h1>
        <p>
          <span>{this.props.data.name}</span> |&nbsp;
          <span>{this.props.data.title}</span> <br/>
          <span>Heroku | Salesforce | 650 7th Street | San Francisco | CA 94103</span> <br/>
          <span><a href={"mailto:" + this.props.data.email}>{this.props.data.email}</a></span> |&nbsp;
        </p>
      </div>
    )
  }
};

class SignatureBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: {}};
  }
  handleContentEnter(content) {
    this.setState({data: content});
  }
  render() {
    return (
      <div className="signature-box">
        <h1>Your Details</h1>
        <SignatureForm contentEntered={this.handleContentEnter.bind(this)} />
        <SignatureOutput data={this.state.data} />
      </div>
    );
  }
};

ReactDOM.render(
  <SignatureBox />,
  document.getElementById('content')
);

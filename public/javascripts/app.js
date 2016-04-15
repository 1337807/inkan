var SignatureForm = React.createClass({
  getInitialState: function () {
    return {name: '', title: '', email: ''}
  },
  handleNameChange: function (e) {
    var value = e.target.value;
    var title = this.state.title
    var email = this.state.email
    this.setState({name: value})
    this.enterContent({name: value, title: title, email: email});
  },
  handleTitleChange: function (e) {
    var value = e.target.value;
    var name = this.state.name
    var email = this.state.email
    this.setState({title: value})
    this.enterContent({name: name, title: value, email: email});
  },
  handleEmailChange: function (e) {
    var value = e.target.value;
    var name = this.state.name
    var title = this.state.title
    this.setState({email: value})
    this.enterContent({name: name, title: title, email: value});
  },
  enterContent: function(obj) {
    this.props.contentEntered(obj);
  },
  render: function () {
    return (
      <div className="purple-box u-padding-Al">
        <form>
          <div className="form-group">
            <label htmlFor="input-name">Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={this.state.name}
              onChange={this.handleNameChange}
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
              onChange={this.handleTitleChange}
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
              onChange={this.handleEmailChange}
              className="form-control"
              id="input-email"
              />
          </div>
        </form>
      </div>
    )
  }
});

var SignatureOutput = React.createClass({
  render: function () {
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
});

var SignatureBox = React.createClass({
  getInitialState: function () {
    return {data: {}};
  },
  handleContentEnter: function (content) {
    this.setState({data: content});
  },
  render: function() {
    return (
      <div className="signature-box">
        <h1>Your Details</h1>
        <SignatureForm contentEntered={this.handleContentEnter} />
        <SignatureOutput data={this.state.data} />
      </div>
    );
  }
});

ReactDOM.render(
  <SignatureBox />,
  document.getElementById('content')
);

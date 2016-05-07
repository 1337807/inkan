import debounce from './util';

export default class SignatureForm extends React.Component {
  constructor() {
    super();
    this.sendRequest = debounce(this.sendRequest, 1000);
  }
  dispacthState(refs) {
    this.props.contentEntered(
      refs.name.value,
      refs.title.value,
      refs.email.value,
      refs.twitter.value,
      refs.linkedin.value,
      refs.github.value,
      refs.facebook.value
    )
  }
  sendRequest(refs) {
    const jsonData =  {
      'name' : refs.name.value,
      'title' : refs.title.value,
      'email' : refs.email.value,
      'twitter' : refs.twitter.value,
      'linkedin' : refs.linkedin.value,
      'github' : refs.github.value,
      'facebook' : refs.facebook.value
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/submit.json");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        //log('written to db', xhr.responseText);
      }
    }
    xhr.send(JSON.stringify(jsonData));
  }
  handleValueChange(_e) {
    this.dispacthState(this.refs);
    this.sendRequest(this.refs);
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
              value={this.props.name}
              onChange={this.handleValueChange.bind(this)}
              className="form-control"
              id="input-name"
              ref="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-title">Title</label>
            <input
              type="text"
              placeholder="Your title"
              value={this.props.title}
              onChange={this.handleValueChange.bind(this)}
              className="form-control"
              id="input-title"
              ref="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-email">Email</label>
            <input
              type="text"
              placeholder="Your email"
              value={this.props.email}
              onChange={this.handleValueChange.bind(this)}
              className="form-control"
              id="input-email"
              ref="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-twitter">Twitter</label>
            <input
              type="text"
              placeholder="Your Twitter"
              value={this.props.twitter}
              onChange={this.handleValueChange.bind(this)}
              className="form-control"
              id="input-twitter"
              ref="twitter"
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-linkedin">Linkedin</label>
            <input
              type="text"
              placeholder="Your Linkedin"
              value={this.props.linkedin}
              onChange={this.handleValueChange.bind(this)}
              className="form-control"
              id="input-linkedin"
              ref="linkedin"
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-github">GitHub</label>
            <input
              type="text"
              placeholder="Your GitHub"
              value={this.props.github}
              onChange={this.handleValueChange.bind(this)}
              className="form-control"
              id="input-github"
              ref="github"
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-facebook">Facebook</label>
            <input
              type="text"
              placeholder="Your Facebook"
              value={this.props.facebook}
              onChange={this.handleValueChange.bind(this)}
              className="form-control"
              id="input-facebook"
              ref="facebook"
            />
          </div>
        </form>
      </div>
    )
  }
};

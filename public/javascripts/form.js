import debounce from './util';
import { postData } from './api';

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
    postData(jsonData);
  }
  handleValueChange(_e) {
    this.dispacthState(this.refs);
    this.sendRequest(this.refs);
  }
  render() {
    const data = this.props.data;
    const { name, title, email, twitter, linkedin, github, facebook } = data;
    return (
      <div className="purple-box u-padding-Al">
        <form>
          <div className="form-group">
            <label htmlFor="input-name">Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={name || ''}
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
              value={title || ''}
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
              value={email}
              onChange={this.handleValueChange.bind(this)}
              className="form-control"
              id="input-email"
              ref="email"
              disabled={true}
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-twitter">Twitter</label>
            <input
              type="text"
              placeholder="Your Twitter"
              value={twitter || ''}
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
              value={linkedin || ''}
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
              value={github || ''}
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
              value={facebook || ''}
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

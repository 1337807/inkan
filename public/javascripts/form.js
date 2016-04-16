export default class SignatureForm extends React.Component {
  handleValueChange(e) {
    this.props.contentEntered(
      this.refs.name.value,
      this.refs.title.value,
      this.refs.email.value
    );
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
        </form>
      </div>
    )
  }
};

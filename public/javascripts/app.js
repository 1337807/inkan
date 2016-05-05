import SignatureOutput from './output.js';
import SignatureForm   from './form.js';
import SignatureRaw    from './raw.js';

class SignatureBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      email: '',
      twitter: '',
      linkedin: '',
      github: '',
      facebook: ''
    };
  }
  handleContentEnter(name, title, email, twitter, linkedin, github, facebook) {
    this.setState({
      name: name,
      title: title,
      email: email,
      twitter: twitter,
      linkedin: linkedin,
      github: github,
      facebook: facebook
    });
  }
  render() {
    return (
      <div className="signature-box">
        <h1>Your Details</h1>
        <SignatureForm contentEntered={this.handleContentEnter.bind(this)} />
        <SignatureOutput data={this.state} />
        <SignatureRaw data={this.state} />
      </div>
    );
  }
};

ReactDOM.render(
  <SignatureBox />,
  document.getElementById('content')
);

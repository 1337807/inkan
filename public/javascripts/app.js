import SignatureOutput from './output.js';
import SignatureForm   from './form.js';

class InkanContainer extends React.Component {
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
        <section className="col-md-6">
          <h3>Your Details</h3>
          <SignatureForm contentEntered={this.handleContentEnter.bind(this)} />
        </section>
        <section className="col-md-6">
          <h3>Result</h3>
          <SignatureOutput data={this.state} />
        </section>
      </div>
    );
  }
};

ReactDOM.render(
  <InkanContainer />,
  document.getElementById('content')
);

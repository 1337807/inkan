import SignatureOutput from './output';
import SignatureForm   from './form';
import Instructions    from './instructions';
import { getData }     from './api'

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
  componentDidMount() {
    getData((data) => {
      this.setState(data);
    });
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
          <SignatureForm data={this.state} contentEntered={this.handleContentEnter.bind(this)} />
        </section>
        <section className="col-md-6">
          <h3>Result</h3>
          <SignatureOutput data={this.state} />
          <h3>Instructions</h3>
          <Instructions />
        </section>
      </div>
    );
  }
};

ReactDOM.render(
  <InkanContainer />,
  document.getElementById('content')
);

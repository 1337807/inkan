import SignatureOutput from './output.js';
import SignatureForm   from './form.js';

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

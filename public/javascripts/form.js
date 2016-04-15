import SignatureInput from './input.js'

export default class SignatureForm extends React.Component {
  handleContentEnter(content) {
    this.props.contentEntered(content);
  }
  render() {
    return (
      <div className="purple-box u-padding-Al">
        <form>
          <SignatureInput field="name" contentEntered={this.handleContentEnter.bind(this)} />
          <SignatureInput field="title" contentEntered={this.handleContentEnter.bind(this)} />
        </form>
      </div>
    )
  }
};

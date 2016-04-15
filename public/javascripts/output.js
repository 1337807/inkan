export default class SignatureOutput extends React.Component {
  render() {
    const { name, title, email } = this.props.data;

    return (
      <div className="signature-output">
        <h1>Result</h1>
        <p>
          <span>{name}</span> |&nbsp;
          <span>{title}</span> <br/>
          <span>Heroku | Salesforce | 650 7th Street | San Francisco | CA 94103</span> <br/>
          <span><a href={"mailto:" + email}>{email}</a></span> |&nbsp;
        </p>
      </div>
    )
  }
};

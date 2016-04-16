export default class SignatureOutput extends React.Component {
  render() {
    const data = this.props.data;
    const { name, title, email, twitter, linkedin, github, facebook } = data;
    let social = Object.keys(data).reduce((acc, current) => {
      if (['twitter', 'linkedin', 'github', 'facebook'].indexOf(current) > -1 && this.props.data[current].length > 0) {
        acc[current] = data[current];
      }
      return acc;
    }, {})

    return (
      <div className="signature-output">
        <h1>Result</h1>
        <p>
          <span>{name || 'name'}</span> |&nbsp;
          <span>{title || 'title'}</span> <br/>
          <span>Heroku | Salesforce | 650 7th Street | San Francisco | CA 94103</span> <br/>
          <span><a href={"mailto:" + email}>{email || 'email'}</a></span> |&nbsp;
          {Object.keys(social).map((site, index) => {
            return <span key={site + index}>{social[site]}&nbsp;</span>;
          })}
        </p>
      </div>
    )
  }
};

export default class SignatureOutput extends React.Component {
  buildSocialLink(site, handle) {
    const socialLinkMap = {
      "twitter" : `https://twitter.com/${handle}`,
      "linkedin" : `https://www.linkedin.com/in/${handle}`,
      "facebook" : `https://www.facebook.com/${handle}`,
      "github" : `https://github.com/${handle}`
    }
    return socialLinkMap[site];
  }
  render() {
    const data = this.props.data;
    const { name, title, email, twitter, linkedin, github, facebook } = data;
    const theColorPurple = '#79589F';
    const nameStyles = {
      color: theColorPurple,
      fontWeight: 'bolder'
    };
    const emailStyles = {
      color: theColorPurple
    };
    let social = Object.keys(data).reduce((acc, current) => {
      if (['twitter', 'linkedin', 'github', 'facebook'].indexOf(current) > -1 && this.props.data[current].length > 0) {
        acc[current] = data[current];
      }
      return acc;
    }, {})

    return (
      <div>
        <h1>Result</h1>
        <p>
          <span style={nameStyles}>{name || 'name'}</span> |&nbsp;
          <span>{title || 'title'}</span> <br/>
          <span>Heroku | Salesforce | 650 7th Street | San Francisco | CA 94103</span> <br/>
          <span style={emailStyles}><a href={"mailto:" + email}>{email || 'email'}</a></span> |&nbsp;
          {Object.keys(social).map((site, index) => {
            return <span key={site + index}><a href={this.buildSocialLink(site, social[site])}>{site}</a>&nbsp;</span>;
          })}
        </p>
      </div>
    )
  }
};

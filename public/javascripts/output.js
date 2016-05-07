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
  handleCopy(e) {
    // h/t https://developers.google.com/web/updates/2015/04/cut-and-copy-commands
    const output = document.getElementById('output-html');
    const range  = document.createRange();
    range.selectNode(output);
    window.getSelection().addRange(range);

    try {
      document.execCommand('copy');
    } catch(err) {
      console.log('Oops, unable to copy');
    }

    // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported
    window.getSelection().removeAllRanges();
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
        <h2 className="result-header">Result</h2>
        <button onClick={this.handleCopy} className="btn btn-default btn-copy">
          <img className="clippy" src="dist/public/images/clippy.svg" alt="Copy to clipboard"></img>
        </button>
        <p id="output-html">
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

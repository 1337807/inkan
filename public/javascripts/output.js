import { buildSocialLink, socialLinksObj } from './social'

export default class SignatureOutput extends React.Component {
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
    const social = socialLinksObj(data);

    return (
      <div>
        <p id="output-html">
          <span className="output output-name">{name || 'name'}</span> |&nbsp;
          <span>{title || 'title'}</span> <br/>
          <span>Heroku | Salesforce | 650 7th Street | San Francisco | CA 94103</span> <br/>
          <span className="output output-email"><a href={"mailto:" + email}>{email || 'email'}</a></span> |&nbsp;
          {Object.keys(social).map((site, index) => {
            return <span key={site + index}><a href={buildSocialLink(site, social[site])}>{site}</a>&nbsp;</span>;
          })}
        </p>
        <button onClick={this.handleCopy} className="btn btn-default btn-copy">
          <img className="clippy" src="dist/public/images/clippy.svg" alt="Copy to clipboard"></img>
        </button>
      </div>
    )
  }
};

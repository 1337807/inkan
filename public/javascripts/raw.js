import htmlEncode from 'js-htmlencode';

export default class SignatureRaw extends React.Component {
  encode(str) {
    return htmlEncode(str);
  }
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
        <h1>Raw</h1>
        <p>
          <span>&lt;span&gt;{name}&lt;/span&gt; |&nbsp;</span>
          <span>&lt;span&gt;{title}&lt;/span&gt; &lt;br/&gt;</span>
          <span>&lt;span&gt;Heroku | Salesforce | 650 7th Street | San Francisco | CA 94103&lt;/span&gt; &lt;br/&gt;</span>
          <span>&lt;span&gt;&lt;a href=&quot;mailto{email}:&quot;&gt;{email}&lt;/a&gt;&lt;/span&gt; |&nbsp;</span>

          {Object.keys(social).map((site, index) => {
            const key  = site + index;
            const href = this.buildSocialLink(site, social[site]);
            return <span key={key}>&lt;span&gt;&lt;a href={href}&gt;{site}&lt;/a&gt;&nbsp;&lt;/span&gt;</span>;
          })}
        </p>
      </div>
    )
  }
};

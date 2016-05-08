export default class Instructions extends React.Component {
  render () {
    return (
      <div>
        <ol>
          <li>Open up <a href="https://gmail.com" target="_blank">GMail</a> in the broswer for your Heroku email</li>
          <li>Click the gear icon toward the top right</li>
          <li>Click "settings" (or simply click <a href="https://mail.google.com/mail/u/0/#settings/general" target="_blank">this link</a>)</li>
          <li>Scroll to the "Signature" section</li>
          <li>Paste in what you copied above</li>
          <li>Don't forget to click "Save Changes" the bottom of the page</li>
        </ol>
      </div>
    )
  }
}

export function buildSocialLink(site, handle) {
  const socialLinkMap = {
    "twitter" : `https://twitter.com/${handle}`,
    "linkedin" : `https://www.linkedin.com/in/${handle}`,
    "facebook" : `https://www.facebook.com/${handle}`,
    "github" : `https://github.com/${handle}`
  }
  return socialLinkMap[site];
}

export function socialLinksObj(data) {
  return (
    Object.keys(data).reduce((acc, current) => {
      if (['twitter', 'linkedin', 'github', 'facebook'].indexOf(current) > -1 && data[current] && data[current].length > 0) {
        acc[current] = data[current];
      }
      return acc;
    }, {})
  )
}

const dev = {
  apiURL: 'https://dlnum6f7kj.execute-api.us-east-1.amazonaws.com/dev',
  cloudfrontBaseURL: 'https://d1ljva6zkf6zjh.cloudfront.net',
  emailURL: 'https://c0mrk8va37.execute-api.us-east-1.amazonaws.com/dev/email/send',
  emailAddress: 'hannahstahl14@gmail.com',
  userID: 'us-east-1:f351b283-a7ba-47a2-97a4-6a35127b601a',
};

const prod = {
  apiURL: 'https://lbe32id9hg.execute-api.us-east-1.amazonaws.com/prod',
  cloudfrontBaseURL: 'https://d1esxin5o90ebg.cloudfront.net',
  emailURL: 'https://aiikn63n03.execute-api.us-east-1.amazonaws.com/prod/email/send',
  emailAddress: 'info@deuterx.com',
  userID: 'us-east-1:e51b2b71-8b21-46c0-a302-6f3b84783041', // TODO change to client's user ID
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  cloudfrontURL: `${config.cloudfrontBaseURL}/${config.userID}`,
  publicCloudfrontURL: 'https://d17jmxltsx3ffm.cloudfront.net',
  businessName: 'DeuteRx',
  ...config,
};

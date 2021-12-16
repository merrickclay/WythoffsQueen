const AWS = require('aws-sdk');

async function refreshCredentials() {
  await AWS.config.credentials.refreshPromise();
  console.log(AWS.config.credentials);
  // schedule the next credential refresh when they're about to expire
  setTimeout(
    refreshCredentials,
    AWS.config.credentials.expireTime - new Date()
  );
}

export default function fetchCredentials() {
  refreshCredentials();
  console.log(AWS.config.credentials);
}

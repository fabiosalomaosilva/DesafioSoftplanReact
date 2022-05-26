import { gapi } from 'gapi-script';

export function startGoogle(startClientGoogle) {
  gapi.load('client:auth2', () => {
    gapi.client.init({
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      scope: '',
    });
  });
}
import { gapi } from 'gapi-script';
import { config } from 'dotenv';

config();

export function startGoogle(startClientGoogle) {
  gapi.load('client:auth2', () => {
    gapi.client.init({
      clientId: process.env.GOOGLE_CLIENT_ID,
      scope: '',
    });
  });
}
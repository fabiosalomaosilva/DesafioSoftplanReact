import { gapi } from 'gapi-script';

export function startGoogle(startClientGoogle) {
  gapi.load('client:auth2', () => {
    gapi.client.init({
      clientId:
        '909737637918-vto6ks26ua6imnikn3uadv37phh6j8hc.apps.googleusercontent.com',
      scope: '',
    });
  });
}
import { Config } from 'vike/types';

export default {
  passToClient: ['pageProps', 'queryState'],
  clientRouting: true,
  meta: {
    Layout: {
      // Load the value of /pages/**/+Layout.js on both the server and client
      env: { server: true, client: true },
    },
  },
} satisfies Config;

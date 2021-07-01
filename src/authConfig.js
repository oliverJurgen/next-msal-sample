const clientId = "5e937ff8-5858-408a-879a-c1b215e783f9";
// Config object to be passed to Msal on creation
export const msalConfig = {
  auth: {
    clientId,
    authority:
      "https://dantegulapa.b2clogin.com/dantegulapa.onmicrosoft.com/B2C_1_signupsignin1",
    knownAuthorities: ["dantegulapa.b2clogin.com"],
    // authority: "https://login.microsoftonline.com/common",
    redirectUri: "https://next-msal-sample.vercel.app/",
    postLogoutRedirectUri: "https://next-msal-sample.vercel.app/",
    // redirectUri: "/",
    // postLogoutRedirectUri: "/",
    // redirectUri: "http://localhost:3000/",
    // postLogoutRedirectUri: "http://localhost:3000/"
  },

  // cache: {
  //   cacheLocation: "sessionStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
  //   storeAuthStateInCookie: false, // If you wish to store cache items in cookies as well as browser cache, set this to "true".
  // },
  // system: {
  //   loggerOptions: {
  //     loggerCallback: (level, message, containsPii) => {
  //       if (containsPii) {
  //         return;
  //       }
  //       switch (level) {
  //         case msal.LogLevel.Error:
  //           console.error(message);
  //           return;
  //         case msal.LogLevel.Info:
  //           console.info(message);
  //           return;
  //         case msal.LogLevel.Verbose:
  //           console.debug(message);
  //           return;
  //         case msal.LogLevel.Warning:
  //           console.warn(message);
  //           return;
  //       }
  //     },
  //   },
  // },
};

// **Added clientId in scopes to recieve accessToken see: https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/2315
// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
  // scopes: ["User.Read"],
  scopes: ["openid", "offline_access", clientId],
};

const tokenRequest = {
  scopes: ["offline_access"], // e.g. ["https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read"]
  forceRefresh: false, // Set this to "true" to skip a cached token and go to the server to get a new token
};

// Add here the endpoints for MS Graph API services you would like to use.
// export const graphConfig = {
//   graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
//   // graphMeEndpoint: "https://graph.microsoft-ppe.com/v1.0/me",
// };

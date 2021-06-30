// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: "5e937ff8-5858-408a-879a-c1b215e783f9",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "/",
        postLogoutRedirectUri: "/",

        // redirectUri: "http://localhost:3000/",
        // postLogoutRedirectUri: "http://localhost:3000/"
    },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"],
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
    // graphMeEndpoint: "https://graph.microsoft-ppe.com/v1.0/me",
};

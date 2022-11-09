const { BitGoAPI } = require('@bitgo/sdk-api');

async function createAccessToken() {
    //Creating accessToken
    const bitgo = new BitGoAPI({ env: 'test' });
    const auth_res = await bitgo.authenticate({
        username: "ghostinside404@gmail.com",
        password: "Ghostinside@404",
        otp: "000000",
    });

    const access_token = await bitgo.addAccessToken({
        otp: "000000",
        label: "Admin Access Token",
        scope: [
            "metamask_institutional",
            "openid",
            "pending_approval_update",
            "portfolio_view",
            "profile",
            "trade_trade",
            "trade_view",
            "wallet_approve_all",
            "wallet_create",
            "wallet_edit_all",
            "wallet_manage_all",
            "wallet_spend_all",
            "wallet_view_all",
        ]
    });

    // console.log(access_token);


    // const { token } = await access_token;

    console.log(`Access Token: ${access_token.token}`);
    return access_token;
}

module.exports = createAccessToken;
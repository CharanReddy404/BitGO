const { BitGo } = require('bitgo');

async function createWallet(accessToken) {
    const { token } = accessToken;
    // console.log(token);
    const bitgo = new BitGo({
        accessToken: token,
        env: 'test',
        customRootURI: 'https://app.bitgo-test.com',
    });
    const wallet = await bitgo.coin('tbtc').wallets().generateWallet({
        label: 'my tss hot Wallet',
        passphrase: 'VerySecurePassword1234'
    });

    console.log("Wallet Created");

    return wallet;
    // console.log('wallet:------', wallet);

    // // const addressArr = []
    // // for (let i = 0; i < 10; i++) {
    // //     const address = await wallet.wallet.createAddress({ label: 'My address' });
    // //     addressArr.push(address);
    // // }
    // // console.log("addressArr:--------", addressArr);
};

module.exports = createWallet;

// //Creating wallet

// bitgo = new BitGo({
//     accessToken: token,
//     env: 'test',
// });

// async function createHotWalletSimple() {
//     const wallet = await bitgo.coin('tbtc').wallets().generateWallet({
//         label: 'my hot Wallet',
//         passphrase: 'VerySecurePassword1234',
//     });

//     console.log(wallet);
// }
// createHotWalletSimple().catch(e => console.log("Create wallet Err:", e))



// const accessToken = 'v2x9bc9861ad32797944733904f9f4ec5d1e1bfaef87d6805b4bab98a945f0d2b08';

// const bitgo = new BitGo({
//     accessToken: accessToken,
//     env: 'custom',
//     customRootURI: 'https://app.bitgo-test.com',
// });

// async function createHotWalletSimple() {
//     const coin = 'tbtc';
//     //Creating new wallet
//     const wallet = await bitgo.coin(coin).wallets().generateWallet({
//         label: 'my hot Wallet',
//         passphrase: 'VerySecurePassword1234',
//     });
//     console.log(wallet);

//     //Creating wallet address
//     const address = await wallet.createAddress();
//     console.log(address);
// }


// createHotWalletSimple().catch(e => console.log(e))






// async function main() {
//     const coin = 'tbtc';
//     const basecoin = bitgo.coin(coin);

//     const accessToken = 'v2x9bc9861ad32797944733904f9f4ec5d1e1bfaef87d6805b4bab98a945f0d2b08';

//     bitgo.authenticateWithAccessToken({ accessToken });

//     const walletId = '6366a3a277ec970007184b6e42700ea7';

//     const walletInstance = await basecoin.wallets().get({ id: walletId });
//     // const walletInstance = await basecoin.wallets().addresses()

//     console.log(walletInstance);

// }
// main().catch(e => console.log(e))

// 2My6KkgBNvKe2xV8QG5kwBKWwJvfPD9h3S7
// 2My6KkgBNvKe2xV8QG5kwBKWwJvfPD9h3S7
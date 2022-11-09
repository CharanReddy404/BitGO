// const { BitGoAPI } = require('@bitgo/sdk-api');
const mongoose = require('mongoose');

async function createWalletAddress(wallet) {

    // const addressArr = []

    const walletAddressSchema = new mongoose.Schema({
        id: String,
        address: String,
        chain: Number,
        index: Number,
        coin: String,
        wallet: String,
        label: String,
        coinSpecific: Object,
        addressType: String,
        keychains: Array,
        baseAddress: String
    })

    const BitGoWalletAddress = mongoose.model('walletAddress', walletAddressSchema);

    for (let i = 0; i < 100; i++) {
        const address = await wallet.createAddress({ label: 'My address' });
        // addressArr.push(address);
        const walletAddressSave = new BitGoWalletAddress(address);
        walletAddressSave.save();
        console.log(`Address: ${i + 1}`);
    }


    // walletAddress.map((address) => {

    // })
    console.log('Completed')
    // return addressArr;
}

module.exports = createWalletAddress;
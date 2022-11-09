const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const createWallet = require('./createWallet');
const createAccessToken = require('./createAccessToken');
const createWalletAddress = require('./createWalletAddress');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('DB connection successful!'));

const main = async () => {
    const accessToken = await createAccessToken();

    const accessTokenSchema = new mongoose.Schema({
        id: String,
        client: String,
        user: String,
        scope: Array,
        created: String,
        expires: String,
        ip: String,
        ipRestrict: Array,
        origin: String,
        label: String,
        isExtensible: Boolean,
        encryptedToken: Object,
        derivationPath: String,
        token: String
    })

    const Bitgo = mongoose.model('AccessToken', accessTokenSchema);

    const AccessToken = new Bitgo(accessToken)

    AccessToken.save();

    const { wallet } = await createWallet(accessToken);

    // console.log(':------------', wallet);

    const walletAddress = await createWalletAddress(wallet);

    // console.log(':--------------', walletAddress);

}

main()

// const accessToken = async () => {
//     const accessToken = await createAccessToken();

//     const accessTokenSchema = new mongoose.Schema({
//         id: String,
//         client: String,
//         user: String,
//         scope: Array,
//         created: String,
//         expires: String,
//         ip: String,
//         ipRestrict: Array,
//         origin: String,
//         label: String,
//         isExtensible: Boolean,
//         encryptedToken: Object,
//         derivationPath: String,
//         token: String
//     })

//     const Bitgo = mongoose.model('AccessToken', accessTokenSchema);

//     const AccessToken = new Bitgo(accessToken)

//     AccessToken.save();

//     return accessToken;
// }

// app.get('/createAccessToken', async (req, res) => {
//     try {
//         let accessToken = await createAccessToken();
//         res.status(200).json({
//             message: 'success',
//             body: accessToken
//         })
//     } catch (err) {
//         console.log(err);
//     }
// })

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App running on port ${port}....`);
})
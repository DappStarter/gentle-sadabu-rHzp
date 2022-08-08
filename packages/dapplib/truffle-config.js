require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan rifle machine method give praise army gesture'; 
let testAccounts = [
"0x18d4a624282fdd7ee4b600b38b9eaca063d357df1abc032e4d234c1b5c16da21",
"0x55731ec54096449f63eabd19e1c494104eb89608912ff4aa3a0d288b53d65286",
"0x704adbd42187e41da9adcb5d8c25fa8dabba4f0fe4124fdda242cbd4b5c5345d",
"0x9e3461a4926361cd7bb30099f239ac143c64053921a9caf5276fac3969fab470",
"0x2e55e5053c155794d6c8d0c8bb0658d4d1e399a683736e8d97ddda8f161a8b91",
"0x8390d3ee32d0bcdcf245a9dad9aa1fd39e321245bb695f1c85783aec6fabc3e3",
"0x96439dc7c1da844f5e999def5d9caabc20296102c5185c676a57cfcb3002ebe4",
"0x1051bd5453f26ce6db88fdeeab49dfdb663125e6a67caf8f3865e37dd0709876",
"0x0421c3952b2b5640e0fdced18b1cdf0dd42c70c37accaeab79e914befe176c1b",
"0x72c17b0abd9dac561fe07c3b4157ee755a3875b000c74e117eaeefb8403f651f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


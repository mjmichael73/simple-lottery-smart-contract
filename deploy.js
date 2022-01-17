const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'regret wink polar menu excess omit amateur source knee video crystal energy',
    'https://rinkeby.infura.io/v3/3e3e72e1de0a46c0a93e5fdcd39b2e80'
);

const web3 = new Web3(provider);

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account:', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: '0x' + bytecode})
        .send({ from: accounts[0] });

    console.log('Contract deployed to: ', result.options.address);
};

deploy();

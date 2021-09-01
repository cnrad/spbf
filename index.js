import { words } from './wordList.js';
import { ethers } from "ethers";

const provider = new ethers.getDefaultProvider("homestead", {
    etherscan: process.env.API_KEY
});

function genSeedPhrase() {
    let seedPhrase = []
    for (let i = 0; i < 12; i++){
        let number = Math.floor(Math.random() * 2048);
        seedPhrase.push(words[number]);
    }

    return seedPhrase.join(' ');
}

async function main(){
    let phrase = genSeedPhrase();
    let result = ethers.utils.isValidMnemonic(phrase);

    if(result === true) {

        let walletMnemonic = ethers.Wallet.fromMnemonic(phrase);

        let wallet = walletMnemonic.connect(provider)
        let balance = await wallet.getBalance();

        console.log(`Valid Seed Phrase:\n${phrase}`)
        console.log("Address: " + wallet.address + "\nBalance: " + balance + " ETH\n\n");

        if(balance > 0) return;

        return main();
    } else return main();
}

main();
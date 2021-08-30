import { words } from './wordList.js';
import { ethers } from "ethers";

function genSeedPhrase() {
    let seedPhrase = []
    for (let i = 0; i < 12; i++){
        let number = Math.floor(Math.random() * 2048);
        seedPhrase.push(words[number]);
    }

    return seedPhrase.join(' ');
}

function main(){
    let phrase = genSeedPhrase();
    let result = ethers.utils.isValidMnemonic(phrase);
    if(result === true) {
        console.log(`Valid Seed Phrase:\n${phrase}`)

        let wallet = ethers.Wallet.fromMnemonic(phrase);
        console.log(wallet.address + "\n");

        return main();
    } else {
        console.log("Invalid Seed Phrase");
        return main();
    }
}

main();

//interact with web3 eth blockchain directly. inspect metamask extension on github, use same libs
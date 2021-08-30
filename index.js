import words from './wordList.js'

async function main(){

    let phrase = genSeedPhrase();

    if(await checkSeedPhrase(phrase) === false) return setTimeout(main(), 2000);

    setTimeout(document.querySelector('#password').value = "testtest", 2000); //password
    setTimeout(document.querySelector('#confirm-password').value = "testtest", 2000); //confirm password

    setTimeout(await document.querySelector('.first-time-flow__button').click(), 2000); //click restore
    
    console.log(`Seed phrase: ${phrase}\nBalance: ${document.querySelector('.currency-display-component__text').innerHTML} ETH \n\n`); // log balance

    setTimeout(async () => {
        await document.querySelector('account-menu__lock-button').click();

        await document.querySelector('unlock-page__link--import').click();
        main();
    }, 5000)
}

async function checkSeedPhrase(phrase) {
    document.querySelector('.import-account__secret-phrase').value = phrase; //check seed phrase
    setTimeout(() => {if(document.querySelector(".error").innerHTML.length > 0) return false}, 3000); //check error length is 0
}

function genSeedPhrase() {
    let seedPhrase = []
    for (let i = 0; i < 12; i++){
        let number = Math.floor(Math.random() * 2048);
        seedPhrase.push(words[number]);
    }

    return seedPhrase.join(' ');
}

main();


// async function main(){
//     let phrase = genSeedPhrase();

//     checkSeedPhrase(phrase)
// }

// async function checkSeedPhrase(phrase) {
//     document.querySelector('.import-account__secret-phrase').value = phrase; //check seed phrase
//     blurAll();
//     setTimeout(() => {if(document.querySelector(".error").innerHTML.length > 0) return false}, 1000); //check error length is 0
// }

// function genSeedPhrase() {
//     let seedPhrase = []
//     for (let i = 0; i < 12; i++){
//         let number = Math.floor(Math.random() * 2048);
//         seedPhrase.push(words[number]);
//     }

//     return seedPhrase.join(' ');
// }

// function blurAll(){
//     var tmp = document.createElement("input");
//     document.body.appendChild(tmp);
//     tmp.focus();
//     document.body.removeChild(tmp);
// }
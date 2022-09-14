import React from 'react'

const CoinFlip = () => {

    function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }

    
    const fiveHeads = () =>{
        return new Promise((resolve, reject) => {
            // console.log('ThisISFIRST***')
            let headsCount = 0;
            let attempts = 0;
            while (headsCount < 5 && attempts <= 100) {
                    attempts++;
                    console.log(`attempt ${attempts}`)
                    let result = tossCoin();
                    console.log(`${result} was flipped`);
                    if (result === "heads") {
                        headsCount++;
                    } else {
                        headsCount = 0;
                    }
                }
                if (attempts <= 100) {
                    resolve(`It took ${attempts} tries to flip five "heads"`)
                } else {
                    reject('You passed 100 flips Sorry!')
                }
            })
            }
            fiveHeads()
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        console.log("When does this run now?");
        }

export default CoinFlip
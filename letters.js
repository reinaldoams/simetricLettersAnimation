const letters = 'Ñ@#W$9876543210?!abc;:+=-,._ '
const arrayOfLetters = [...letters]

const animateLetters = (arrayOfLetters) => {
    let changingString = arrayOfLetters.join('');
    const originalLength = changingString.length
    let i = 0;
    let count = 10;
    let finish = false;
    setInterval(() => {
        if (i<originalLength && count > 0){
            let stringToLog = ''
            for (let i = 0; i < originalLength; i++) {
                stringToLog += changingString[i]
                stringToLog += changingString[originalLength - 1 - i]
            }
            console.log(stringToLog)
            const temp = changingString[0]
            changingString = changingString.slice(1) + temp;
            i++
        } else if (count > 0) {
            i=0
            count--
        } else if (finish === false) {
            console.log('=)')
            finish = true
        } else {
            process.exit()
        }
    }, 20)
}

animateLetters(arrayOfLetters)
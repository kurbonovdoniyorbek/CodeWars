function translate(sentence) {
    let arr = sentence.split(" ")
    var specialCharacters = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    let uppercase = /[A-Z]/
    let vowels = /[aeiou]/
    let finalArr = []
    var PigLatin
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        let vowelsCheck = e.toLowerCase()[0].match(vowels)
        let checkUpperCase = e[0].match(uppercase)
        let changeWord = e.slice(0, 1)
        let restWord = e.slice(-1).match(specialCharacters) ? e.slice(1, (e.length - 1)) : e.slice(1, e.length)
        let addWord = restWord.concat(changeWord)
        console.log(addWord);
        if (addWord.match(specialCharacters)) {
            PigLatin = addWord
        } else if (vowelsCheck) {
            //
            if (e.slice(-1).match(specialCharacters)) {
                PigLatin = addWord + "way" + e.slice(-1)
            }
            else {
                PigLatin = addWord + "way"
            }
        } else {
            if (e.slice(-1).match(specialCharacters)) {
                if (addWord === "leasep") {
                    PigLatin = addWord + "ay!" + e.slice(-1)
                }
                else {
                    PigLatin = addWord + "ay" + e.slice(-1)
                }
            }
            else {
                PigLatin = addWord + "ay"
            }
        }
        let fWord = checkUpperCase ? PigLatin.slice(0, 1).toUpperCase() + PigLatin.slice(1, PigLatin.length).toLowerCase() : PigLatin
        let gathArr = fWord.split(" ")
        finalArr.push(gathArr)
    }
    console.log(finalArr.join(" "));
}

translate("Pizza? Yes please!");


//NOT SOLVED
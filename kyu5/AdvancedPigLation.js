// function translate(sentence) {
//     let arr = sentence.split(" ")
//     var specialCharacters = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
//     let uppercase = /[A-Z]/
//     let vowels = /[aeiou]/
//     let finalArr = []
//     var PigLatin
//     for (let i = 0; i < arr.length; i++) {
//         const e = arr[i];
//         let vowelsCheck = e.toLowerCase()[0].match(vowels)
//         let checkUpperCase = e[0].match(uppercase)
//         let changeWord = e.slice(0, 1)
//         let restWord = e.slice(-1).match(specialCharacters) ? e.slice(1, (e.length - 1)) : e.slice(1, e.length)
//         let addWord = restWord.concat(changeWord)
//         console.log(addWord);
//         if (addWord.match(specialCharacters)) {
//             PigLatin = addWord
//         } else if (vowelsCheck) {
//             //
//             if (e.slice(-1).match(specialCharacters)) {
//                 PigLatin = addWord + "way" + e.slice(-1)
//             }
//             else {
//                 PigLatin = addWord + "way"
//             }
//         } else {
//             if (e.slice(-1).match(specialCharacters)) {
//                 if (addWord === "leasep") {
//                     PigLatin = addWord + "ay!" + e.slice(-1)
//                 }
//                 else {
//                     PigLatin = addWord + "ay" + e.slice(-1)
//                 }
//             }
//             else {
//                 PigLatin = addWord + "ay"
//             }
//         }
//         let fWord = checkUpperCase ? PigLatin.slice(0, 1).toUpperCase() + PigLatin.slice(1, PigLatin.length).toLowerCase() : PigLatin
//         let gathArr = fWord.split(" ")
//         finalArr.push(gathArr)
//     }
//     console.log(finalArr.join(" "));
// }

// translate("Pizza? Yes please!");


//NOT SOLVED


function translate(sentence) {
    const vowels = 'aeiou'.split('');

    const isUpper = (char => char === char.toUpperCase());

    const pigLatin = ((str, i = 0) => {
        if (vowels.includes(str[0])) {
            return i === 0 ? str + 'way' : str + 'ay';
        }

        return pigLatin(str.slice(1) + str.slice(0, 1), i + 1);
    });

    return sentence.split(' ').map(word => {
        let puncs = word.match(/\W/g);
        if (puncs) puncs = puncs.join('');
        if (puncs) plen = puncs.length;
        else {
            plen = 0;
            puncs = '';
        }

        let latin = pigLatin(word.toLowerCase().slice(0, word.length - plen)) + puncs;
        if (isUpper(word[0])) latin = latin[0].toUpperCase() + latin.slice(1);
        return latin;
    }).join(' ');
};

// SOLVED
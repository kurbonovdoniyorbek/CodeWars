function pigIt(str) {
    let arr = str.split(" ")
    var specialCharacters = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    let finalArr = []
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        let changeWord = e.slice(0, 1)
        let restWord = e.slice(1, e.length)
        let addWord = restWord.concat(changeWord)
        let finalWord = addWord.match(specialCharacters) ? addWord : addWord + "ay"
        let gathArr = finalWord.split(" ")
        finalArr.push(gathArr)
    }
    console.log(finalArr.join(" "));
}

pigIt('Pig latin is cool !');


//second solution 


function pigIt(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

//third solution

function pigIt(str) {
    return str.split(" ").map((item) => `${item.substr(1)}${item[0]}ay`).join(" ")
}
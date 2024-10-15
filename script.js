function analyzeSentence(sentence) {
    let lengthCounter = sentence.length; 
    let wordsCounter = sentence.split(' ').length; 
    let vowelsCounter = 0; 


    for (let char of sentence) {
        if ('aeiouAEIOU'.includes(char)) {
            vowelsCounter++;
        }
    }

    return {
        length: lengthCounter,
        words: wordsCounter,
        vowels: vowelsCounter
    };
}

const sentence = "This is a sample sentence.";
const result = analyzeSentence(sentence);

console.log(`Length of the sentence: ${result.length}`);
console.log(`Number of words: ${result.words}`);
console.log(`Number of vowels: ${result.vowels}`);

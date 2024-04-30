function analyzeSentence(sentence) {
    let length = 0;
    let words = 0;
    let vowels = 0;

    // Convert the sentence to lowercase to simplify vowel detection
    sentence = sentence.toLowerCase();

    for (let i = 0; i < sentence.length; i++) {
        // Increment length counter for each character (including spaces and punctuation)
        length++;

        // Check if the current character is a vowel
        if (/[aeiou]/.test(sentence[i])) {
            vowels++;
        }

        // Check if the current character is a letter or a digit
        if (/\w/.test(sentence[i])) {
            // If the previous character was not a letter or digit, then increment the word counter
            if (i === 0 || !/\w/.test(sentence[i - 1])) {
                words++;
            }
        }
    }

    // Return the results
    return {
        length: length,
        words: words,
        vowels: vowels
    };
}

// Example usage:
const sentence = "The quick brown fox jumps over the lazy dog.";
const analysis = analyzeSentence(sentence);
console.log("Length:", analysis.length);
console.log("Number of words:", analysis.words);
console.log("Number of vowels:", analysis.vowels);

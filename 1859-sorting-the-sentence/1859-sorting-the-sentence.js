/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const wordList = s.split(" ");
    const sortedList = new Array(wordList.length);
    for (let word of wordList) {
        const wordIndex = parseInt(word[word.length-1]) - 1;
        sortedList[wordIndex] = word.slice(0, word.length-1);
    }
    
    return sortedList.join(" ");
};
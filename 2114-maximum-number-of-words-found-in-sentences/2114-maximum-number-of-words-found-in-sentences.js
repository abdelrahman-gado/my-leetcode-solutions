/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    
    let maxNumOfWords = -1;
    for (const sentence of sentences) {
        const sentenceWordsArr = sentence.split(" ");
        maxNumOfWords = Math.max(maxNumOfWords, sentenceWordsArr.length);
    }
    
    return maxNumOfWords;
};
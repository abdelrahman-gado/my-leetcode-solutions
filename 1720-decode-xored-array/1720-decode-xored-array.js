/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const hiddenArr = [first];
    for (let i = 0; i < encoded.length; i++) {
        const num = hiddenArr[hiddenArr.length - 1] ^ encoded[i];
        hiddenArr.push(num);
    }

    return hiddenArr;
};
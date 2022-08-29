

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

const map = new Map();
let num = 0;

var encode = function(longUrl) {
    const url = "http://tinyurl.com/";
    const encodedUrl = url + num;
    map.set(encodedUrl, longUrl);
    num++;
    return encodedUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return map.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
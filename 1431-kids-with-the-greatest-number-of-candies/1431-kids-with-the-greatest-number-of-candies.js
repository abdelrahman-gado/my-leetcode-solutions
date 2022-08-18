/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    const greatest = Math.max(...candies);
    const havingGreatestArr = [];
    
    for (const count of candies) {
        if ((count + extraCandies) >= greatest) {
            havingGreatestArr.push(true);
        } else {
            havingGreatestArr.push(false);
        }
    }
    
    return havingGreatestArr;
};
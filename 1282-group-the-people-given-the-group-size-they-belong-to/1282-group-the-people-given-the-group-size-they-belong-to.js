/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const listOfGroups = [];
    const obj = {};
    for (let i = 0; i < groupSizes.length; i++) {
        if (!obj[groupSizes[i]]) {
            obj[groupSizes[i]] = [i];
        } else {
            if (obj[groupSizes[i]].length < groupSizes[i]) {
                obj[groupSizes[i]].push(i);
                if (obj[groupSizes[i]].length === groupSizes[i]) {
                    listOfGroups.push(obj[groupSizes[i]]);
                    obj[groupSizes[i]] = [];
                }
            } else if (obj[groupSizes[i]].length === groupSizes[i]) {
                listOfGroups.push(obj[groupSizes[i]]);
                obj[groupSizes[i]] = [i];
            }
        }
    }
    
    for (let key in obj) {
        if (obj[key].length !== 0) {
            listOfGroups.push(obj[key]);
        }
    }
    
    return listOfGroups;
};
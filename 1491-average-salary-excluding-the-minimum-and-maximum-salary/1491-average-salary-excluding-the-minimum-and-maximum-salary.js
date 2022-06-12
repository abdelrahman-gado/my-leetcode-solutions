/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    
    const tempSalary = [...salary];
    tempSalary.sort((a, b) => a-b);
    
    let sumOfSalaries = 0;
    
    for (let i = 1; i < tempSalary.length-1; i++) {
        sumOfSalaries += tempSalary[i];
    }
    
    
    return sumOfSalaries / (tempSalary.length-2);
};
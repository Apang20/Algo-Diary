/* 
PROBLEM: #1672 Richest Customer Wealth

OBJECTIVE:
 You are given an m x n integer grid accounts where accounts[i][j] is 
 the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
 Return the wealth that the richest customer has.
A customer’s wealth is the amount of money they have in 
all their bank accounts. 
The richest customer is the customer that has the maximum wealth.


EXAMPLES:
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest 
with a wealth of 6 each, so return 6.


Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17


PSEUDOCODE
1) Create sum variable and richest variable
2) Loop through accounts array 
    a) create variable to hold curent wealth 
    b) loop through inner arrays
        i. add the value of each index to the current wealth

    c) if current account > sum, set them equal to each other 

3) return richest account 
*/


function maximumWealth(accounts) {
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        let currentWealth = 0;
        for (let j = 0; j < accounts.length; j++) {
            currentWealth += accounts[i][j];
        }
        if (currentWealth > maxWealth) {
            maxWealth = currentWealth;
        }
    }
    return maxWealth;
};


const maxWealth = function (accounts) {
    let wealthiest = 0;

    for (let i = 0; i < accounts.length; i++) {
        let account = accounts[i];
        let currentWealth = 0;
        for (let j = 0; j < account.length; j++) {
            currentWealth += account[j]
        }
        wealthiest = Math.max(wealthiest, currentWealth);
    }
    return wealthiest;
}

//Time Complexity: 0(n*m)
//Space Complexity: 0(1) - constant vars/no new arr

//Count All Palindromic Subsequence in a given String
// Javascript code to Count Palindromic Subsequence
// in a given String

// Function return the total palindromic
// subsequence
function countPS(str) {
    let N = str.length;

    // create a 2D array to store the count
    // of palindromic subsequence
    let countps = new Array(N);
    for (let i = 0; i < N; i++) {
        countps[i] = new Array(N);
        for (let j = 0; j < N; j++) {
            countps[i][j] = 0;
        }
    }

    // palindromic subsequence of length 1
    for (let i = 0; i < N; i++)
        countps[i][i] = 1;

    // check subsequence of length L is
    // palindrome or not
    for (let L = 2; L <= N; L++) {
        for (let i = 0; i <= N - L; i++) {
            let k = L + i - 1;
            if (str[i] == str[k]) {
                countps[i][k] = countps[i][k - 1]
                    + countps[i + 1][k] + 1;
            } else {
                countps[i][k] = countps[i][k - 1]
                    + countps[i + 1][k]
                    - countps[i + 1][k - 1];
            }
        }
    }

    // return total palindromic subsequence
    return countps[0][N - 1];
}

// Driver program
let str = "abcb";
document.write("Total palindromic "
    + "subsequence are : "
    + countPS(str));


// Javascript program to counts Palindromic Subsequence
// in a given String using recursion
     
let n;
let dp=new Array(1000);
for(let i=0;i<1000;i++)
{
    dp[i]=new Array(1000);
    for(let j=0;j<1000;j++)
    {
        dp[i][j]=-1;
    }
}
 
 
let str = "abcb";

// Function return the total
// palindromic subsequence
function countPS(i,j)
{
    if (i > j)
        return 0;

    if (dp[i][j] != -1)
        return dp[i][j];
  
    if (i == j)
        return dp[i][j] = 1;

    else if (str[i] == str[j])
        return dp[i][j]
            = countPS(i + 1, j) +
                countPS(i, j - 1) + 1;
                else
            return dp[i][j] = countPS(i + 1, j) +
                              countPS(i, j - 1) -
                              countPS(i + 1, j - 1);
    }
     
    // Driver code
     n = str.length;
     document.write("Total palindromic subsequence"
                           + "are : " + countPS(0, n - 1));
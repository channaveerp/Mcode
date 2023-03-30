/*
https://www.scaler.com/academy/mentee-dashboard/class/49881/assignment/problems/193?navref=cl_tt_lst_nm;

Problem Description
Given an array of integers A, every element appears twice except for one. Find that integer that occurs once.

NOTE: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example Input
Input 1:
 A = [1, 2, 2, 3, 1]
Input 2:
 A = [1, 2, 2]


Example Output
Output 1:
 3 ==> 3 occurs once.
Output 2:
 1 ==> 1 occurs once.

Approach
We have noticed that if X has 1 in that position, we will have an odd number of 1s in that position.
If X has 0 in that position, we will have an odd number of 0 in that position.
Looking at the bit operators, XOR is what we need.
XOR will return 1 only on two different bits. So if two numbers are the same, XOR will return 0.
Finally, there is only one number left.
A ^ A = 0 and A ^ B ^ A = B.
So, all the even occurrences will cancel out using XOR.

Time Complexity : O(n)
Space Complexity(extra) : O(1)
*/

function singleNumber(A) {
  let sum = A[0];
  for (let i = 1; i < A.length; i++) {
    sum = sum ^ A[i]; // xor with same num is 0, and xor of 0 with other number is other number;
  }
  return Number(sum);
}

console.log(singleNumber([1, 2, 2, 3, 1])); // 3
console.log(singleNumber([1, 2, 2])); // 1

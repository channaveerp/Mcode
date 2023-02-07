/*
https://www.scaler.com/academy/mentee-dashboard/class/42703/homework/problems/26950?navref=cl_tt_nv
Problem Description
You are given two integers A and B.
If B-th bit in A is set, make it unset
If B-th bit in A is unset, make it set
Return the updated A value

Example Input
Input 1:
A = 4
B = 1
Input 2:
A = 5
B = 2


Example Output
Output 1:
6 ==> Given N = 4 which is 100 in binary. The 1-st bit is unset so we make it set
Output 2:
1 ==> Given N = 5 which is 101 in binary. The 2-nd bit is set so we make it unset

Approach
The value of the B-th bit is 2^B
To toggle the B-th bit in A, we can directly
perform bitwise XOR operation between A and 2^B.
If the bit was set, this will unset the bit and
if the bit was unset, then this will set that 
bit

Time Complexity : O(1)
Space Complexity : O(1)
*/

function toggleBit(A, B) {
  return A ^ (1 << B);
}

console.log(toggleBit(6, 3)); // 14

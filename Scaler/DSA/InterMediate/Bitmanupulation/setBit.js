/*
https://www.scaler.com/academy/mentee-dashboard/class/42703/assignment/problems/27344?navref=cl_tt_nv

Problem Description
You are given two integers A and B.
Set the A-th bit and B-th bit in 0, and return output in decimal.

input
A = 3
B = 5

output 40. ==> The binary expression is 101000 which is 40 in decimal.

input 
A = 4
B = 4

output 16 ==> The binary expression is 10000 which is 16 in decimal

// Approach
The value of the A-th bit is 2^A and that
of the B-th bit is 2^B.
We have to set the A-th bit and the B-th bit
in 0. This is similar to directly adding 2^A 
and 2^B to 0. 
If A = B, then we can just add 2^A to 0.

Time Complexity : O(1)
Space Complexity : O(1)
*/

function setBit(A, B) {
  // set A'th bit and set B'th bit and perform a or
  return (1 << A) | (1 << B);
}

console.log(setBit(3, 5)); // 40

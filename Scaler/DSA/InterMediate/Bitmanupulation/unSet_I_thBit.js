/*
Problem Description
You are given two integers A and B.
If B-th bit in A is set, make it unset
If B-th bit in A is unset, leave it as it is
Return the updated A value

input
A = 4
B = 1

output 4 ==> Given N = 4 which is 100 in binary. The 1-st bit is already unset

input
A = 5
B = 2

output 1 ==> Given N = 5 which is 101 in binary. We unset the 2-nd bit

Approach
We can find if the B-th bit is set in A by performing
bitwise AND of A and 2^B. If the result is non-zero then
we subtract 2^B from A. If the bitwise AND is zero that means
the B-th bit is already unset. So, then we return A as it is.

Time Complexity : O(1)
Space Complexity : O(1)
*/

function unSetBit(A, B) {
  return A & ~(1 << B);
}

function unSetBit_2(A, B) {
  if (((A >> B) & 1) == 1) A -= 1 << B;
  return A;
}

console.log(unSetBit(4, 1)); //4

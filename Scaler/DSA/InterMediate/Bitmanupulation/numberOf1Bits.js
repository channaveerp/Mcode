/*
https://www.scaler.com/academy/mentee-dashboard/class/42703/assignment/problems/192?navref=cl_tt_nv;

Write a function that takes an integer and returns the number of 1 bits it has.

input 11, output 3 ==> 11 is represented as 1011 in binary.
*/

//Method 1:
function numSetBits_1(A) {
  let ans = 0;
  while (A != 0) {
    // rightmost set bit becomes unset
    A = A & (A - 1);
    ans++;
  }
  return ans;
}

//Method 2:
function numSetBits_2(A) {
  let total_ones = 0;
  for (let i = 0; i < 30; i++) {
    // checking checkBit here
    if ((A & (1 << i)) > 0) {
      total_ones += 1;
    }
  }
  return total_ones;
}

//

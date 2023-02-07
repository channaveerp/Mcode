/*
https://www.scaler.com/academy/mentee-dashboard/class/42703/assignment/problems/27343?navref=cl_tt_lst_sl

You are given two integers A and B.
Return 1 if B-th bit in A is set
Return 0 if B-th bit in A is unset

*/

function checkBit(A, B) {
  if ((A >> B) & (1 == 1)) return true;
  else return false;
  // or
  // return (A >> B) & 1;
}

console.log(checkBit(4, 1)); // false or 0
//Given N = 4 which is 100 in binary. The 1-st bit is unset so we return 0;

console.log(checkBit(5, 2)); // true or 1
//Given N = 5 which is 101 in binary. The 2-nd bit is set so we return 1

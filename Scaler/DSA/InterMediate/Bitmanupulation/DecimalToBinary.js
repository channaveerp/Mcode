// Q: https://www.scaler.com/academy/mentee-dashboard/class/42700/assignment/problems/27560?navref=cl_tt_nv;

function decimalToBinary(num) {
  let ans = '';

  while (num > 1) {
    ans += num % 2;
    console.log(ans);
    num = Math.floor(num / 2);
  }
  if (num < 2) {
    ans += num;
  }
  return ans.split('').reverse().join('');
}

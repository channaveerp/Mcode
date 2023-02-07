//Q: https://www.scaler.com/academy/mentee-dashboard/class/42700/assignment/problems/27470/?navref=cl_pb_nv_tb;

function binaryToDecimal(binaryNum) {
  let ans = 0;
  let pwr = 0;
  while (binaryNum > 0) {
    ans = ans + (binaryNum % 10) * Math.pow(2, pwr);
    pwr++;
    binaryNum = Math.floor(binaryNum / 10);
  }
  return ans;
}

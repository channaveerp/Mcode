/*
https://www.scaler.com/academy/mentee-dashboard/class/42703/homework/problems/17892?navref=cl_tt_nv
Problem Description
Given an integer A. Unset B bits from the right of A in binary.
For eg:-
A = 93, B = 4
A in binary = 1011101
A should become = 1010000 = 80. Therefore return 80.


Example Input
Input 1:-
A = 25
B = 3
Input 2:-
A = 37
B = 3


Example Output
Output 1:-
24 ==> A = 11001 to 11000
Output 2:-
32 ==> A = 100101 to 100000

Approach
Try using for loops iterate from 0 to B-1 and do the needful.

Initialise a variable ans = A
Iterate from i = 0 to i = B - 1. If ith bit was set in A that is (A & (1<<i)) != 0, ans -= (1<<i), unset it from the answer. 

*/

function unsetXBitsFromRight(A, B) {
  console.log(BigInt(A) >> BigInt(B)); // 4
  console.log(BigInt(4) << BigInt(B)); // 32
  return (BigInt(A) >> BigInt(B)) << BigInt(B);
}

console.log(unsetXBitsFromRight(37, 3)); // 32

// or by using checkBit
/*
 public long solve(long A, int B) {
        
        long ans=A;
        for(int i=0;i<B;i++){
            if((A & (1L<<i)) > 0)
               ans -= (1L<<i);
        }
        return ans;
    }
*/

/*
   
    // Example: 1011101 B = 4;

    // (1<<B) => 1<<4 = 16 => 0 0 0 1 0 0 0
    // (1<<B)-1 = 15 =>  0 0 0 0 1 1 1
    // unsetBits= ~((1<<B)-1) => 1 1 1 1 0 0 0 0
    // A&unsetBits = 1 0 1 0 0 0 0    
    
    public long solve(long A, int B) {

      long unsetBits = ~((1<<B)-1);//will give last b bits unsetBits
      return A&unsetBits;
  }
*/

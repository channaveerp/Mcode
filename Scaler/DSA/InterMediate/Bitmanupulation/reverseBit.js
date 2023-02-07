/*
Problem Description
Reverse the bits of an 32 bit unsigned integer A.

Example Input
Input 1:
 0
Input 2:
 3

Example Output
Output 1:
 0
Output 2:
 3221225472

Example Explanation
Explanation 1:
        00000000000000000000000000000000    
=>      00000000000000000000000000000000
Explanation 2:
        00000000000000000000000000000011    
=>      11000000000000000000000000000000

Approach
Reversing bits could be done by swapping the n/2 least significant bits with its most significant bits.

The trick is to implement a function called swapBits(i, j), which swaps the ‘i’th bit with the ‘j’th bit.

If you still remember how XOR operation works:

0 ^ 0 == 0, 
1 ^ 1 == 0, 
0 ^ 1 == 1, and 
1 ^ 0 == 1.
We only need to perform the swap when the ‘i’th bit and the ‘j’th bit are different.

To test if two bits are different, we could use the XOR operation. Then, we need to toggle both ‘i’th and ‘j’th bits.

We could apply the XOR operation again.

By XOR-ing the ‘i’th and ‘j’th bit with 1, both bits are toggled.

Bonus approach (The divide and conquer approach):

Remember how merge sort works? Let us use an example of n == 8 (one byte) to see how this works:


              01101001

             /        \

           0110       1001

          /   \       /   \

         01    10    10    01

        /\     /\    /\     /\

       0  1   1  0  1  0   0  1
The first step is to swap all odd and even bits. After that swap consecutive pairs of bits, and so on …

Therefore, only a total of log(n) operations are necessary.

Example:
For the first step, you would do:
    x = ((x & 0x55555555) << 1) | ((x & 0xAAAAAAAA) >> 1);
*/

function reverseBit(num) {
  var revnum = 0;
  for (var i = 0; i < 32; i++) {
    if (num & (1 << i)) revnum |= 1 << (31 - i);
  }
  return revnum >>> 0;
}

console.log(reverseBit(3)); // 3221225472

/*
  function reverseBit(A){
      A = BigInt(A);
      let i = 0n;
      let j = 31n;
      while(j>i) {
        let temp1 = (A>>j)&1n;
        let temp = (A>>i)&1n;
        if(temp != temp1) {
          A = A^(1n<<i);
          A = A^(1n<<j);
        }
        i++;
        j--;
      }
      return Number(A);
  }
   public long reverse(long a) {
        long ans = 0l;
        for(int i=0; i<32; i++){
            if(((a>>i) & 1) == 1) {
                ans += Math.pow(2, 31-i);
            }
        }
        return ans;
*/

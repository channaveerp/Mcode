let obj = { a: 'a', b: 'b', c: 'c' };
let { b, ...others } = obj;
// console.log(b);

// reduce more if else conditions from code

const getDiscout = (price, discountCode) => {
  if (discountCode == 'SPECIAL25') return price * 0.25;
  else if (discountCode == 'SUMMER20') return price * 0.2;
  else if (discountCode == 'WINTER15') return price * 0.15;
  else if (discountCode == 'SALE10') return price * 0.1;
  else return 0;
};
const discount = {
  SPECIAL25: 0.25,
  SUMMER20: 0.2,
  WINTER15: 0.15,
  SALE10: 0.1,
};
const shortDiscount = (price, discountCode) => {
  return discount[discountCode] ? price * discount[discountCode] : 0;
};

console.log(getDiscout(1000, 'SUMMER20')); //200
console.log(shortDiscount(1000, 'SUMMER20')); //200

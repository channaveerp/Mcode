let s = "j?qq??b";

// let char = "abcdefghijklmnopqrstuvwxyz"

// for(let i = 0; i < str.length; i++){
//     for(let j = 0; j < char.length; j++){
//         if (str[i] == "?" && str[i] != ){
//             str[i] = char[i]
//         }
//     }

// }

// given a srting S containing only lowerCase English letters and the '?' charecters into lowerCase letters such that the final string does not contain any consecutive repeating charecter. You cannot modify the non '?' charecter.

var modifyString = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "?") {
      let charCode = 97;
      const charCodeLeft = s.charCodeAt(i - 1);
      const charCodeRight = s.charCodeAt(i + 1);
      while (charCodeLeft == charCode || charCodeRight == charCode) {
        charCode++;
      }
      s = s.slice(0, i) + String.fromCharCode(charCode) + s.slice(i + 1);
    }
  }
  return s;
};
//console.log(modifyString(s));

var modifyString = function(s) {
    const arr = s.split('')
    let res = ''
    for(let i=0;i<s.length;i++){
      const curr = arr[i]
      if(curr !== '?') continue
      const prevCharCode = (arr[i-1] || '').charCodeAt(0)
      const nextCharCode = (arr[i+1] || '').charCodeAt(0)
      let random = 0
      while(!random){
        random = Math.floor(Math.random() * 26);
        random += 97 // starting at 'a'
        if(random === prevCharCode || random === nextCharCode){
          random = 0
          continue
        } 
        arr[i]= String.fromCharCode(random)
        break
      }    
    }
    return arr.join('')
  };

var modifyString = function(s) {
    for(let i = 0; i < s.length; i++){
        if(s[i] === '?'){
            let charCode = 97
            const charCodeLeft = s.charCodeAt(i-1)
            const charCodeRight = s.charCodeAt(i+1)
            while(charCodeLeft === charCode || charCodeRight === charCode){
                charCode++
            }
           s = s.slice(0,i) + String.fromCharCode(charCode) + s.slice(i+1)
        } 
    }
    return s
};

let str = "aaabb";

let obj = {};
for (key of str) {
  obj[key] ? obj[key]++ : (obj[key] = 1);
}
//console.log(obj);

let keyVal = obj[key];
flag = false;
for (key in obj) {
//   if (obj[key] == keyVal) {
//     flag = true;
//   } else {
//     flag = false;
//     break;
//   }

//obj[key] == keyVal ? flag = true : flag = flag break;

}

console.log(flag);

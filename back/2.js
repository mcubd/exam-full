// const input = "hgfgdfgjmdsfmn\\       dfdjmbfdsmfdsnmbfdsmbndf\\ y^5\\ fkj\\ \\frac{4}{d}\\ fgfg,";
// const regex = /\\[^\s\\]+/g; // Matches strings starting with '\' and ending before a space or '\'
// const matches = input.match(regex);

// if (matches) {
//   matches.forEach(match =>
    
//     console.log(match+"****************")
     
// );
// }
// console.log(matches);







// const input = "hgfgdfgjmdsfmn\\       dfdjmbfdsmf dsnmbfdsmbndf\\ y^5\\ fkj\\ \\frac{4}{d}\\ fgfg,";
// const regex = /[^\\]*\\/g; // Matches strings starting with any character but ending with '\\\\'
// const matches = input.match(regex);

// if (matches) {
//   matches.forEach(match =>
//     console.log(match + "****************")
//   );
// }
 
const input = "hello there\\       nice\\ y^5\\ too\\ \\frac{4}{d}\\ meet,";
const arr = [];
let i = 0;

while (i < input.length) {
  let startIndex = i;
  while (i < input.length && input[i] !== '\\') {
    i++;
  }
  if (i > startIndex) {
    arr.push(input.slice(startIndex, i));
  }

  if (i < input.length && input[i] === '\\') {
    startIndex = i;
    i++;
    while (i < input.length && input[i] !== ' ' && input[i] !== '\\') {
      i++;
    }
    arr.push(input.slice(startIndex, i)); 
  }

  while (i < input.length && input[i] === ' ') {
    i++;
  }
}

console.log(arr);
console.log(arr.length);


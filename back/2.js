import balanced from 'balanced-match';

const arr = [
  'Here is an example ',
  ' ',
  'of something ',
  '\\frac{g}{\\frac{df}{ff}\\ ff\\ \\frac{ffd}{r}}',
  '} and a square root ',
  '\\sqrt{5868458}',
  '} who ',
  '\\lim_{x^2\\to\\frac{a}{w}}',
  '} andd ',
  '\\int_{vc}{c^2v}',
  '} orrr ',
  '\\int_b^{c^2v}',
  '} ',
  '\\int_b^k',
  ' jj ',
  '\\int_{bf}^d',
  'k8k v^{c^{2^2}}  kk t^3 vnj^ggf y^{uu} after.'
];

const processItem = (item) => {
  if (!item.startsWith('\\')) { 
    let arr66=[]
    let result = '';
    let i = 0;
    while (i < item.length) {
      const caretIndex = item.indexOf('^', i);
      if (caretIndex === -1) {
        result += item.slice(i);
        arr66.push(item.slice(i))
        break;
      }

      result += item.slice(i, caretIndex); // Add the text before '^'
      arr66.push(item.slice(i, caretIndex-1))
      i = caretIndex + 1; // Move past the '^'

      // Check if there's a '{' after '^'
      const nextChar = item[i];
      if (nextChar === '{') {
        // Use balanced-match to find the closing brace
        const bracketMatch = balanced('{', '}', item.slice(i));
  
        if (bracketMatch) {
          console.log(item.slice(caretIndex-1, caretIndex+1) + bracketMatch.body);
          arr66.push(`${item.slice(caretIndex-1, caretIndex+1)}{${bracketMatch.body}}`)
          const { start, end } = bracketMatch;
          result += '^' + item.slice(i + start + 1, i + end) + '^';
          i += end + 1;
        } else {
          result += '^';
        }
      } else {
        // Just add the part after '^' if no '{' follows
        const nextCaretIndex = item.indexOf('^', i);


        result += item.slice(i, nextCaretIndex);
        // console.log(item.slice(caretIndex-1, caretIndex+2));
        arr66.push(item.slice(caretIndex-1, caretIndex+2))

        if (nextCaretIndex === -1) {
          result += item.slice(i);
          arr66.push(item.slice(i))
          break;
        } else {
         
          
          i = nextCaretIndex;
        }
      }
    } 
    return arr66;
  }
  return item; 
};

const processedArr = arr.map(processItem);

console.log(processedArr);

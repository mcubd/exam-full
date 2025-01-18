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
  'k8k v^{c^{2^2}}    kk t^3 vnj^ggf y^{uu} after.'
];

const processItem = (item) => {
  if (!item.startsWith('\\') && item.includes("^")) {
    let arr66 = []

    let i = 0;
    while (i < item.length) {
      const caretIndex = item.indexOf('^', i);

      if (caretIndex === -1) {

        arr66.push(item.slice(i))
        break;
      }


      if (caretIndex > i) {


        arr66.push(item.slice(i, caretIndex - 1))
      }


      i = caretIndex;

      // Check if there's a '{' after '^'
      const nextChar = item[i + 1];
      if (nextChar === '{') {



        const bracketMatch = balanced('{', '}', item.slice(i + 1));
        console.log(bracketMatch);
        if (bracketMatch) {
          i += 1;

          arr66.push(`${item.slice(caretIndex - 1, caretIndex + 1)}{${bracketMatch.body}}`)


          const { start, end } = bracketMatch;

          i += end + 1;
        }
      } else {
        // Just add the part after '^' if no '{' follows
        const nextCaretIndex = item.indexOf('^', i);



        // console.log(item.slice(caretIndex-1, caretIndex+2));
        arr66.push(item.slice(caretIndex - 1, caretIndex + 2))

        if (nextCaretIndex === -1) {

          arr66.push(item.slice(i))
          break;
        } else {


          i = i + 2;
        }
      }
    }
    return arr66;
  }
  return item;
};

const processedArr = arr.map(processItem);

// console.log(processedArr);
const newArr = arr.flatMap(item => {
  if (!item.startsWith('\\') && item.includes("^")) {
    let arr66 = []

    let i = 0;
    while (i < item.length) {
      const caretIndex = item.indexOf('^', i);

      if (caretIndex === -1) {
        arr66.push(item.slice(i))
        break;
      }


      if (caretIndex > i) {
        arr66.push(item.slice(i, caretIndex - 1))
      }


      i = caretIndex;

   
      const nextChar = item[i + 1];

      if (nextChar === '{') {
        const bracketMatch = balanced('{', '}', item.slice(i + 1));
    
        if (bracketMatch) {
          i += 1;
          arr66.push(`${item.slice(caretIndex - 1, caretIndex + 1)}{${bracketMatch.body}}`)
          const { start, end } = bracketMatch;
          i += end + 1;
        }
      } else {
        // Just add the part after '^' if no '{' follows
        const nextCaretIndex = item.indexOf('^', i);
        arr66.push(item.slice(caretIndex - 1, caretIndex + 2))

        if (nextCaretIndex === -1) {
          arr66.push(item.slice(i))
          break;
        } else {
          i = i + 2;
        }
      }
    }
    return arr66;
  }
  return [item];
});

console.log(newArr);
